#!/bin/bash
OUTPUT_FILE="${1:-flattened_project.txt}"
if [ ! -d .git ]; then
  echo "Error: This doesn't seem to be a Git repository (no .git directory found)."
  exit 1
fi
> "$OUTPUT_FILE"
> "$OUTPUT_FILE.debug"
INCLUDED_COUNT=0
EXCLUDED_COUNT=0
IMAGE_EXTENSIONS="\.png$|\.jpg$|\.jpeg$|\.gif$|\.bmp$|\.webp$|\.ico$"
is_ignored() {
  local path="$1"
  path="${path#./}"
  if git check-ignore -q "$path" 2>/dev/null; then
    echo "DEBUG: '$path' is ignored (file match)" >> "$OUTPUT_FILE.debug"
    return 0
  fi
  local parent="$path"
  while [ "$parent" != "." ] && [ "$parent" != "/" ]; do
    parent=$(dirname "$parent")
    if git check-ignore -q "$parent" 2>/dev/null; then
      echo "DEBUG: '$path' is ignored (parent directory '$parent' match)" >> "$OUTPUT_FILE.debug"
      return 0
    fi
  done
  echo "DEBUG: '$path' is not ignored" >> "$OUTPUT_FILE.debug"
  return 1
}
is_text_file() {
  local file="$1"
  local mime_type
  mime_type=$(file --mime-type "$file" 2>/dev/null | awk '{print $NF}')
  local ext="${file##*.}"
  if [[ "$ext" == "tsx" ]]; then
    echo "DEBUG: '$file' is text-like (extension: $ext)" >> "$OUTPUT_FILE.debug"
    return 0
  fi
  case "$mime_type" in
    text/*|application/json|application/javascript|application/x-javascript|text/x-typescript|text/x-c|text/x-shellscript|application/xml|text/css)
      echo "DEBUG: '$file' is text-like (MIME: $mime_type)" >> "$OUTPUT_FILE.debug"
      return 0
      ;;
    *)
      echo "DEBUG: '$file' is not text-like (MIME: $mime_type)" >> "$OUTPUT_FILE.debug"
      return 1
      ;;
  esac
}
find . -type f -not -path '*/node_modules/*' -not -path '*/.git/*' | while read -r file; do
  echo "DEBUG: Processing '$file'" >> "$OUTPUT_FILE.debug"
  if [ "$file" = "./$OUTPUT_FILE" ] || [ "$file" = "./$OUTPUT_FILE.debug" ]; then
    echo "DEBUG: '$file' skipped (output or debug file)" >> "$OUTPUT_FILE.debug"
    ((EXCLUDED_COUNT++))
    continue
  fi
  if [[ "$file" == *"/bun.lockb" ]]; then
    echo "DEBUG: '$file' skipped (bun.lockb)" >> "$OUTPUT_FILE.debug"
    ((EXCLUDED_COUNT++))
    continue
  fi
  if [[ "$file" == *"/package-lock.json" ]]; then
    echo "DEBUG: '$file' skipped (package-lock.json)" >> "$OUTPUT_FILE.debug"
    ((EXCLUDED_COUNT++))
    continue
  fi
  if [[ "$file" == *"/.firebase/"* ]]; then
    echo "DEBUG: '$file' skipped (Firebase cache)" >> "$OUTPUT_FILE.debug"
    ((EXCLUDED_COUNT++))
    continue
  fi
  if echo "$file" | grep -E -q "$IMAGE_EXTENSIONS"; then
    echo "DEBUG: '$file' skipped (image extension)" >> "$OUTPUT_FILE.debug"
    ((EXCLUDED_COUNT++))
    continue
  fi
  if is_ignored "$file"; then
    ((EXCLUDED_COUNT++))
    continue
  fi
  if is_text_file "$file"; then
    echo "DEBUG: '$file' included (text)" >> "$OUTPUT_FILE.debug"
    echo "=== $file ===" >> "$OUTPUT_FILE"
    cat "$file" >> "$OUTPUT_FILE"
    echo -e "\n" >> "$OUTPUT_FILE"
    ((INCLUDED_COUNT++))
  else
    ((EXCLUDED_COUNT++))
  fi
done
echo "DEBUG SUMMARY: Included $INCLUDED_COUNT files, excluded $EXCLUDED_COUNT files" >> "$OUTPUT_FILE.debug"
echo "Flattened project (excluding .gitignore patterns, node_modules, .git, directories like /public/3d/, Firebase cache, package-lock.json, images, and binary files like bun.lockb) written to: $OUTPUT_FILE"
echo "Debug info written to: $OUTPUT_FILE.debug"
echo "Summary: Included $INCLUDED_COUNT files, excluded $EXCLUDED_COUNT files"