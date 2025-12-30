import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultTheme = 'light';
const initialTheme = browser ? localStorage.getItem('theme') ?? defaultTheme : defaultTheme;

export const theme = writable(initialTheme);

theme.subscribe((value) => {
    if (browser) {
        localStorage.setItem('theme', value);
        document.documentElement.setAttribute('data-theme', value);
        document.body.setAttribute('data-theme', value);
    }
});