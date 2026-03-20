import { writable } from 'svelte/store';

type Severity = 'success' | 'error' | 'info' | 'warning';

type State = {
	open: boolean;
	severity: Severity;
	message: string;
	duration: number;
};

export const toast = writable<State>({
	open: false,
	severity: 'success',
	message: '',
	duration: 3000
});

export function showToast(message: string, severity: Severity, duration: number = 3000) {
	toast.set({
		message,
		severity,
		duration,
		open: true
	});
}

export function hideToast() {
	toast.update((value) => ({
		...value,
		open: false
	}));
}
