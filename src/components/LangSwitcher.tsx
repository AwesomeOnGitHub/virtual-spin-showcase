import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "ar", label: "العربية", flag: "sa", country: "Saudi Arabia" },
  { code: "sq", label: "Shqip", flag: "al", country: "Albania" },
  { code: "ad", label: "Català", flag: "ad", country: "Andorra" },
  { code: "be", label: "Belgium", flag: "be", country: "Belgium" },
  { code: "bs", label: "Bosanski", flag: "ba", country: "Bosnia" },
  { code: "bg", label: "Български", flag: "bg", country: "Bulgaria" },
  { code: "hr", label: "Hrvatski", flag: "hr", country: "Croatia" },
  { code: "cs", label: "Čeština", flag: "cz", country: "Czech Republic" },
  { code: "da", label: "Dansk", flag: "dk", country: "Denmark" },
  { code: "nl", label: "Holland", flag: "nl", country: "Netherlands" },
  { code: "en", label: "English", flag: "gb", country: "England" },
  { code: "et", label: "Eesti", flag: "ee", country: "Estonia" },
  { code: "fi", label: "Suomi", flag: "fi", country: "Finland" },
  { code: "fr", label: "Français", flag: "fr", country: "France" },
  { code: "de", label: "Deutsch", flag: "de", country: "Germany" },
  { code: "el", label: "Ελληνικά", flag: "gr", country: "Greece" },
  { code: "hu", label: "Magyar", flag: "hu", country: "Hungary" },
  { code: "is", label: "Íslenska", flag: "is", country: "Iceland" },
  { code: "ga", label: "Gaeilge", flag: "ie", country: "Ireland" },
  { code: "it", label: "Italiano", flag: "it", country: "Italy" },
  { code: "lv", label: "Latviešu", flag: "lv", country: "Latvia" },
  { code: "lt", label: "Lietuvių", flag: "lt", country: "Lithuania" },
  { code: "lu", label: "Luxembourg", flag: "lu", country: "Luxembourg" },
  { code: "mk", label: "Македонски", flag: "mk", country: "North Macedonia" },
  { code: "mt", label: "Malti", flag: "mt", country: "Malta" },
  { code: "mc", label: "Monaco", flag: "mc", country: "Monaco" },
  { code: "no", label: "Norsk", flag: "no", country: "Norway" },
  { code: "pl", label: "Polski", flag: "pl", country: "Poland" },
  { code: "pt", label: "Português", flag: "pt", country: "Portugal" },
  { code: "ro", label: "Română", flag: "ro", country: "Romania" },
  { code: "ru", label: "Русский", flag: "ru", country: "Russia" },
  { code: "sr", label: "Српски", flag: "rs", country: "Serbia" },
  { code: "sk", label: "Slovenčina", flag: "sk", country: "Slovakia" },
  { code: "sl", label: "Slovenščina", flag: "si", country: "Slovenia" },
  { code: "es", label: "Español", flag: "es", country: "Spain" },
  { code: "sv", label: "Svenska", flag: "se", country: "Sweden" },
  { code: "tr", label: "Türkçe", flag: "tr", country: "Turkey" },
];

const sortedLanguages = [...languages].sort((a, b) =>
  a.country.localeCompare(b.country)
);

export function LangSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (selectedCode) => {
    let languageToSet = selectedCode;
    if (selectedCode === "be") languageToSet = "nl";
    if (selectedCode === "mc" || selectedCode === "lu") languageToSet = "fr";
    if (selectedCode === "ad") languageToSet = "ca";
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedCountry", selectedCode);
      }
    } catch {}
    i18n.changeLanguage(languageToSet);
  };

  const getTriggerFlag = () => {
    const lang = (i18n.language || "en").split("-")[0].toLowerCase();
    const byLang = languages.find((l) => l.code === lang);
    if (byLang) return byLang.flag;
    try {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("selectedCountry");
        if (stored) {
          const found = languages.find((l) => l.code === stored);
          if (found) return found.flag;
        }
      }
    } catch {}
    return "gb"; // Fallback to English flag
  };

  const triggerFlag = getTriggerFlag();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="p-1">
          <span className="sr-only">Change language</span>
          <img
            src={`https://flagcdn.com/w20/${triggerFlag}.png`}
            alt="Current language"
            className="h-4 w-6"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-44 p-2 max-h-[18rem] overflow-y-auto scrollbar-none flex flex-col items-center"
      >
        {sortedLanguages.map((lng) => (
          <DropdownMenuItem
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
            className="flex flex-col items-center justify-center text-sm w-full py-2"
          >
            <img
              src={`https://flagcdn.com/w40/${lng.flag}.png`}
              alt={lng.label}
              className="h-6 w-8 mb-1"
            />
            <span className="text-center">{lng.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}