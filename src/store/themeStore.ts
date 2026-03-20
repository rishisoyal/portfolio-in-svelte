import { writable } from 'svelte/store';

export const isDark = writable(true);

export function toggleTheme() {
	isDark.update((value) => {
		const newVal = !value;

		document.documentElement.classList.toggle('dark', newVal);
		localStorage.setItem('theme', newVal ? 'dark' : 'light');

		return newVal;
	});
}

export function setIsDark(newVal: boolean) {
	isDark.set(newVal);

	document.documentElement.classList.toggle('dark', newVal);
	localStorage.setItem('theme', newVal ? 'dark' : 'light');
}
