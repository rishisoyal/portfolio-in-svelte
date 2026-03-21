<script lang="ts">
	import type { Component } from 'svelte';
	import { blur, scale } from 'svelte/transition';

	interface PopupProps {
		isOpen: boolean;
		onClose: () => void;
		children: Component;
	}

	let { isOpen, onClose, children }: PopupProps = $props();
</script>

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
		onclick={onClose}
		in:blur={{ opacity: 1 }}
		out:blur={{ opacity: 0 }}
	></div>

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="fixed inset-0 z-50 flex flex-col items-center justify-center p-4" onclick={onClose}>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="max-h-[90vh] w-full max-w-max overflow-y-auto rounded-2xl border-2 border-[#45475a] bg-[#DCE0E8] p-4 sm:p-6 dark:bg-[#11111b]"
			onclick={(e) => e.stopPropagation()}
			in:scale={{
				opacity: 0,
				start: 0.9,
			}}
			out:scale={{ opacity: 0, start: 0.9 }}
		>
			<div class="flex w-full items-center justify-end">
				<button
					onclick={onClose}
					class="cursor-pointer opacity-70 transition-all duration-200 hover:opacity-100 custom-cursor:cursor-none"
					title="Close Card"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
						><g fill="currentColor"
							><path
								d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926z"
							/><path
								fill-rule="evenodd"
								d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18"
								clip-rule="evenodd"
							/></g
						></svg
					>
				</button>
			</div>
			{@render children()}
		</div>
	</div>
{/if}
