import { derived } from 'svelte/store';
import { language } from '$lib/stores/language';
import { navbarMessages } from './navbar';
import { homeMessages } from './home';
import { galleriesMessages } from './galleries';
import { researchMessages } from './research';
import { projectMessages } from './projects';
import { photoAndVariousMessages } from './photoAndVarious';

const messages = {
  ru: {
    nav: navbarMessages.ru,
    home: homeMessages.ru,
    galleries: galleriesMessages.ru,
    projects: projectMessages.ru,
    photoAndVarious: photoAndVariousMessages.ru,
    research: researchMessages.ru
  },
  en: {
    nav: navbarMessages.en,
    home: homeMessages.en,
    galleries: galleriesMessages.en,
    projects: projectMessages.en,
    photoAndVarious: photoAndVariousMessages.en,
    research: researchMessages.en
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