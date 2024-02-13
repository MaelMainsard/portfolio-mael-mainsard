import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from './locale/en.json'
import frJSON from './locale/fr.json'
import idJSON from './locale/id.json'

i18n.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        fr: { ...frJSON },
        id: { ...idJSON },
      },
    lng: "fr",
});