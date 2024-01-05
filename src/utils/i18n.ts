import { getLangFromUrl, useTranslations } from "../i18n/utils";

export const useI18n = (url: URL) => {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  return {
    lang,
    t,
  };
};
