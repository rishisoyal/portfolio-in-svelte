import { writable } from 'svelte/store';

export const customCursor = writable(true);

export function toggleCursor() {
	customCursor.update((value) => {
		const newVal = !value;

		document.documentElement.classList.toggle('custom-cursor', newVal);
		localStorage.setItem('cursor', newVal ? 'custom' : 'default');

		return newVal;
	});
}