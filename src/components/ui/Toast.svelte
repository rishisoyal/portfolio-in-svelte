<script lang="ts">
	import { fade } from 'svelte/transition';
	import { hideToast, toast } from '../../store';

	const severityColor: Record<typeof $toast.severity, { bgColor: string; borderColor: string }> = {
		error: { bgColor: '#d20f3982', borderColor: '#d20f39' },
		success: { bgColor: '#5160b282', borderColor: '#5160b2' },
		warning: { bgColor: '', borderColor: '' },
		info: { bgColor: '', borderColor: '' }
	};
</script>

{#if $toast.open}
	<div class="animation-slide-in-right fixed right-0 z-999 w-full p-4 md:w-100">
		<div
			class="flex w-full items-center justify-end gap-4 overflow-hidden rounded-xl border-2 p-4 backdrop-blur-xs md:h-18"
			style={`
            background-color: ${severityColor[$toast.severity].bgColor};
            border-color: ${severityColor[$toast.severity].borderColor};
						`}
			out:fade={{
				duration: 400
			}}
		>
			<div
				class="toast-bar absolute inset-0 h-0.5 rounded-2xl bg-[#5160b2] brightness-110"
				style="--duration: {$toast.duration}ms"
			></div>
			<div class="flex h-full w-full items-center justify-between">
				{$toast.message}
				<div class="flex h-full items-start">
					<button
						onclick={hideToast}
						class="cursor-pointer custom-cursor:cursor-none"
						title="Dismiss"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="m17.705 7.705l-1.41-1.41L12 10.59L7.705 6.295l-1.41 1.41L10.59 12l-4.295 4.295l1.41 1.41L12 13.41l4.295 4.295l1.41-1.41L13.41 12z"
							/></svg
						>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.toast-bar {
		animation: slide-out var(--duration) linear forwards;
	}

	@keyframes slide-out {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
