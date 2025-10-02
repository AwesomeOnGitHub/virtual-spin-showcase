import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function LangSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("hu")}>
          <img
            src="https://flagcdn.com/w20/hu.png"
            alt="Magyar"
            className="mr-2 h-4 w-6"
          />
          Magyar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          <img
            src="https://flagcdn.com/w20/gb.png"
            alt="English"
            className="mr-2 h-4 w-6"
          />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("de")}>
          <img
            src="https://flagcdn.com/w20/de.png"
            alt="Deutsch"
            className="mr-2 h-4 w-6"
          />
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("it")}>
          <img
            src="https://flagcdn.com/w20/it.png"
            alt="Italiano"
            className="mr-2 h-4 w-6"
          />
          Italiano
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("es")}>
          <img
            src="https://flagcdn.com/w20/es.png"
            alt="Español"
            className="mr-2 h-4 w-6"
          />
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}