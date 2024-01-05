import en from "./locales/en.json";
import es from "./locales/es.json";
import be from "./locales/be.json";

export const languages = {
  en: "English",
  es: "Spanish",
  be: "Nedeerlands",
};

export const defaultLang = "es";

export const ui = {
  en,
  es,
  be,
} as const;
