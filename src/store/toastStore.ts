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

let timeoutId: ReturnType<typeof setTimeout> | null = null;
export function showToast(message: string, severity: Severity, duration: number = 6000) {
	toast.set({
		message,
		severity,
		duration,
		open: true
	});

	if (timeoutId) clearTimeout(timeoutId);
	timeoutId = setTimeout(() => {
		hideToast();
	}, duration);
	// setTimeout(hideToast, duration);
}

export function hideToast() {
	toast.update((value) => ({
		...value,
		open: false
	}));
}
