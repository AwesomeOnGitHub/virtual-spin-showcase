import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", label: "English", flag: "gb" },
  { code: "hu", label: "Magyar", flag: "hu" },
  { code: "de", label: "Deutsch", flag: "de" },
  { code: "it", label: "Italiano", flag: "it" },
  { code: "es", label: "Español", flag: "es" },
  { code: "fr", label: "Français", flag: "fr" },
  { code: "ru", label: "Русский", flag: "ru" },
  { code: "nl", label: "Nederlands", flag: "nl" },
  { code: "da", label: "Dansk", flag: "dk" },
  { code: "pt", label: "Português", flag: "pt" },
  { code: "sv", label: "Svenska", flag: "se" },
  { code: "no", label: "Norsk", flag: "no" },
  { code: "fi", label: "Suomi", flag: "fi" },
  { code: "is", label: "Íslenska", flag: "is" },
  { code: "cs", label: "Čeština", flag: "cz" },
  { code: "sk", label: "Slovenčina", flag: "sk" },
  { code: "pl", label: "Polski", flag: "pl" },
  { code: "ro", label: "Română", flag: "ro" },
  { code: "bg", label: "Български", flag: "bg" },
  { code: "hr", label: "Hrvatski", flag: "hr" },
  { code: "sr", label: "Српски", flag: "rs" },
  { code: "sl", label: "Slovenščina", flag: "si" },
  { code: "et", label: "Eesti", flag: "ee" },
  { code: "lv", label: "Latviešu", flag: "lv" },
  { code: "lt", label: "Lietuvių", flag: "lt" },
  { code: "mt", label: "Malti", flag: "mt" },
  { code: "ga", label: "Gaeilge", flag: "ie" },
  { code: "cy", label: "Cymraeg", flag: "gb-wls" }, // Welsh
  { code: "ca", label: "Català", flag: "ad" }, // Catalan → Andorra flag
  { code: "tr", label: "Türkçe", flag: "tr" },
  { code: "mk", label: "Македонски", flag: "mk" },
  { code: "al", label: "Shqip", flag: "al" }, // Albanian
  { code: "ba", label: "Bosanski", flag: "ba" }, // Bosnian
];

export function LangSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    let languageToSet = lng;

    if (lng === "al") languageToSet = "sq"; // Albanian
    if (lng === "ba") languageToSet = "bs"; // Bosnian

    i18n.changeLanguage(languageToSet);
  };

  const currentLang = i18n.language?.split("-")[0]; // normalize
  const currentFlag =
    languages.find((l) => l.code === currentLang)?.flag || "gb"; // fallback

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="sr-only">Change language</span>
          <img
            src={`https://flagcdn.com/w20/${currentFlag}.png`}
            alt="Current language"
            className="h-4 w-6"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lng) => (
          <DropdownMenuItem
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            <img
              src={`https://flagcdn.com/w20/${lng.flag}.png`}
              alt={lng.label}
              className="mr-2 h-4 w-6"
            />
            {lng.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
