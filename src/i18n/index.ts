import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ICU from "i18next-icu";
import en from "./locales/en/common.json";
import hu from "./locales/hu/common.json";
import de from "./locales/de/common.json";
import it from "./locales/it/common.json";
import es from "./locales/es/common.json";
import fr from "./locales/fr/common.json";
import ru from "./locales/ru/common.json";
import nl from "./locales/nl/common.json";
import da from "./locales/da/common.json";
import pt from "./locales/pt/common.json";
import sv from "./locales/sv/common.json";
import no from "./locales/no/common.json";
import fi from "./locales/fi/common.json";
import is from "./locales/is/common.json";
import cs from "./locales/cs/common.json";
import sk from "./locales/sk/common.json";
import pl from "./locales/pl/common.json";
import ro from "./locales/ro/common.json";
import bg from "./locales/bg/common.json";
import hr from "./locales/hr/common.json";
import sr from "./locales/sr/common.json";
import sl from "./locales/sl/common.json";
import et from "./locales/et/common.json";
import lv from "./locales/lv/common.json";
import lt from "./locales/lt/common.json";
import mt from "./locales/mt/common.json";
import ga from "./locales/ga/common.json";
import cy from "./locales/cy/common.json";
import ca from "./locales/ca/common.json";
import tr from "./locales/tr/common.json";
import mk from "./locales/mk/common.json";
import sq from "./locales/sq/common.json";
import bs from "./locales/bs/common.json";
import ar from "./locales/ar/common.json";

i18n
  .use(ICU)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      hu: { common: hu },
      de: { common: de },
      it: { common: it },
      es: { common: es },
      fr: { common: fr },
      ru: { common: ru },
      nl: { common: nl },
      da: { common: da },
      pt: { common: pt },
      sv: { common: sv },
      no: { common: no },
      fi: { common: fi },
      is: { common: is },
      cs: { common: cs },
      sk: { common: sk },
      pl: { common: pl },
      ro: { common: ro },
      bg: { common: bg },
      hr: { common: hr },
      sr: { common: sr },
      sl: { common: sl },
      et: { common: et },
      lv: { common: lv },
      lt: { common: lt },
      mt: { common: mt },
      ga: { common: ga },
      cy: { common: cy },
      ca: { common: ca },
      tr: { common: tr },
      mk: { common: mk },
      sq: { common: sq },
      bs: { common: bs },
      ar: { common: ar }
    },
    fallbackLng: "en",
    supportedLngs: [
      "en", "hu", "de", "it", "es", "fr", "ru", "nl", "da", "pt",
      "sv", "no", "fi", "is", "cs", "sk", "pl", "ro", "bg", "hr",
      "sr", "sl", "et", "lv", "lt", "mt", "ga", "cy", "ca", "tr",
      "mk", "sq", "bs", "ar"
    ],
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "i18nextLng"
    },
    react: { useSuspense: true },
    load: "languageOnly"
  });

// Set RTL for Arabic
i18n.on("languageChanged", (lng) => {
  if (lng === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
  }
});

export default i18n;