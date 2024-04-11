import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { FILTER_BY_COUNTRY, ORDER_BY, VALUE, DIVIDEND, INCOME, PAST, FUTURE, SELECT_LANGUAGE, HEALTH } from "./util/constants";

const resources = {
  en: {
    translation: {
      [FILTER_BY_COUNTRY]: "Filter by country",
      [ORDER_BY]: "Order by",
      [SELECT_LANGUAGE]: "Select language",
      [VALUE]: "Value",
      [DIVIDEND]: "Dividend",
      [INCOME]: "Income",
      [PAST]: "Past",
      [FUTURE]: "Future",
      [HEALTH]: "Health",
    }
  },
  br: {
    translation: {
      [FILTER_BY_COUNTRY]: "Filtrar por país",
      [ORDER_BY]: "Ordenar por",
      [SELECT_LANGUAGE]: "Selecione o idioma",
      [VALUE]: "Valor",
      [DIVIDEND]: "Dividendo",
      [INCOME]: "Receita",
      [PAST]: "Passado",
      [FUTURE]: "Futuro",
      [HEALTH]: "Saúde",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;