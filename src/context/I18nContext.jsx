import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const dictionaries = {
  en: {
    brand: 'airbnb',
    navHomes: 'Homes',
    navExperiences: 'Experiences',
    navServices: 'Services',
    becomeHost: 'Become a host',
    search_where: 'Where',
    search_placeholder_where: 'Search destinations',
    search_when: 'When',
    search_add_dates: 'Add dates',
    search_who: 'Who',
    search_add_guests: 'Add guests',
    languageAndRegion: 'Language and region',
    currency: 'Currency',
    save: 'Save',
    cancel: 'Cancel',
    inspirationTitle: 'Inspiration for future getaways',
  },
  bn: {
    brand: 'এয়ারবিএনবি',
    navHomes: 'হোমস',
    navExperiences: 'এক্সপেরিয়েন্সেস',
    navServices: 'সার্ভিসেস',
    becomeHost: 'হোস্ট হোন',
    search_where: 'কোথায়',
    search_placeholder_where: 'গন্তব্য খুঁজুন',
    search_when: 'কবে',
    search_add_dates: 'তারিখ যোগ করুন',
    search_who: 'কে',
    search_add_guests: 'অতিথি যোগ করুন',
    languageAndRegion: 'ভাষা ও অঞ্চল',
    currency: 'মুদ্রা',
    save: 'সেভ',
    cancel: 'বাতিল',
    inspirationTitle: 'ভবিষ্যৎ ভ্রমণের অনুপ্রেরণা',
  },
  fr: {
    brand: 'airbnb',
    navHomes: 'Maisons',
    navExperiences: 'Expériences',
    navServices: 'Services',
    becomeHost: 'Devenir hôte',
    search_where: 'Où',
    search_placeholder_where: 'Rechercher des destinations',
    search_when: 'Quand',
    search_add_dates: 'Ajouter des dates',
    search_who: 'Qui',
    search_add_guests: 'Ajouter des voyageurs',
    languageAndRegion: 'Langue et région',
    currency: 'Devise',
    save: 'Enregistrer',
    cancel: 'Annuler',
    inspirationTitle: 'Inspiration pour de futurs séjours',
  },
};

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'USD');

  useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);
  useEffect(() => { localStorage.setItem('currency', currency); }, [currency]);

  const t = useMemo(() => {
    const dict = dictionaries[lang] || dictionaries.en;
    return (key) => dict[key] ?? dictionaries.en[key] ?? key;
  }, [lang]);

  const value = { lang, setLang, currency, setCurrency, t, dicts: dictionaries };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);