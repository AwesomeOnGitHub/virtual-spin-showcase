import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ICU from "i18next-icu";

import en from "./locales/en/common.json";
import hu from "./locales/hu/common.json";
import de from "./locales/de/common.json";
import it from "./locales/it/common.json";
import es from "./locales/es/common.json";

i18n
  .use(ICU)                // remove if you don't want ICU formatting
  .use(LanguageDetector)   // detects from querystring, localStorage, navigator, etc.
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      hu: { common: hu },
      de: { common: de },
      it: { common: it },
      es: { common: es }
    },
    fallbackLng: "en",
    supportedLngs: ["en", "hu", "de", "it", "es"],
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false }, // React escapes by default
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"]
    },
    react: { useSuspense: true }
  });

export default i18n;