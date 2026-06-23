import { derived } from 'svelte/store';
import { language } from '$lib/stores/language';
import { navbarMessages } from './navbar';
import { homeMessages } from './home';
import { galleriesMessages } from './galleries';
import { projectMessages } from './projects';

const messages = {
  ru: {
    nav: navbarMessages.ru,
    home: homeMessages.ru,
    galleries: galleriesMessages.ru,
    projects: projectMessages.ru
  },
  en: {
    nav: navbarMessages.en,
    home: homeMessages.en,
    galleries: galleriesMessages.en,
    projects: projectMessages.en
  }
};

function format(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
}

export const t = derived(language, ($language) => {
  const locale = messages[$language] ? $language : 'ru';

  return {
    locale,
    messages: messages[locale],
    format: (template, values) => format(template, values)
  };
});