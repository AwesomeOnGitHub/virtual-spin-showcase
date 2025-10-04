import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ICU from "i18next-icu";

// === Imports for all locales (make sure the JSON files exist) ===
import en from "./locales/en/common.json"; // English
import hu from "./locales/hu/common.json"; // Hungarian
import de from "./locales/de/common.json"; // German
import it from "./locales/it/common.json"; // Italian
import es from "./locales/es/common.json"; // Spanish
import fr from "./locales/fr/common.json"; // French
import ru from "./locales/ru/common.json"; // Russian
import nl from "./locales/nl/common.json"; // Dutch
import da from "./locales/da/common.json"; // Danish
import pt from "./locales/pt/common.json"; // Portuguese
import sv from "./locales/sv/common.json"; // Swedish
import no from "./locales/no/common.json"; // Norwegian
import fi from "./locales/fi/common.json"; // Finnish
import is from "./locales/is/common.json"; // Icelandic
import cs from "./locales/cs/common.json"; // Czech
import sk from "./locales/sk/common.json"; // Slovak
import pl from "./locales/pl/common.json"; // Polish
import ro from "./locales/ro/common.json"; // Romanian
import bg from "./locales/bg/common.json"; // Bulgarian
import hr from "./locales/hr/common.json"; // Croatian
import sr from "./locales/sr/common.json"; // Serbian
import sl from "./locales/sl/common.json"; // Slovenian
import et from "./locales/et/common.json"; // Estonian
import lv from "./locales/lv/common.json"; // Latvian
import lt from "./locales/lt/common.json"; // Lithuanian
import mt from "./locales/mt/common.json"; // Maltese
import ga from "./locales/ga/common.json"; // Irish
import cy from "./locales/cy/common.json"; // Welsh
import ca from "./locales/ca/common.json"; // Catalan
import tr from "./locales/tr/common.json"; // Turkish
import mk from "./locales/mk/common.json"; // Macedonian
import sq from "./locales/sq/common.json"; // Albanian
import bs from "./locales/bs/common.json"; // Bosnian

// === i18n config ===
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
    },
    fallbackLng: "en",
    supportedLngs: [
      "en", "hu", "de", "it", "es", "fr", "ru", "nl", "da", "pt",
      "sv", "no", "fi", "is", "cs", "sk", "pl", "ro", "bg", "hr", "sr", "sl",
      "et", "lv", "lt", "mt", "ga", "cy", "ca", "tr", "mk", "sq", "bs",
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
    load: "languageOnly" // Maps e.g. "pt-PT" -> "pt"
  });

export default i18n;