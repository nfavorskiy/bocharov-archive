import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultLanguage = 'ru';
const initialLanguage = browser ? localStorage.getItem('language') ?? defaultLanguage : defaultLanguage;

export const language = writable(initialLanguage);

language.subscribe((value) => {
    if (browser) {
        localStorage.setItem('language', value);
        document.documentElement.setAttribute('lang', value);
    }
});