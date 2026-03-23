<script lang="ts">
	import { toast, hideToast } from '../../store';

	const severityColor: Record<typeof $toast.severity, { bgColor: string; borderColor: string }> = {
		error: { bgColor: '#d20f3982', borderColor: '#d20f39' },
		success: { bgColor: '#5160b282', borderColor: '#5160b2' },
		warning: { bgColor: '', borderColor: '' },
		info: { bgColor: '', borderColor: '' }
	};
</script>

{#if $toast.open}
	<div
		class="animation-fade-in-right fixed top-12 right-0 z-999 m-2 flex w-max items-center justify-end gap-4 rounded-xl border-2 p-4"
		style={`
            background-color: ${severityColor[$toast.severity].bgColor};
            border-color: ${severityColor[$toast.severity].borderColor};
          `}
	>
		{$toast.message}

		<button onclick={hideToast} class="cursor-pointer" title="dismiss">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="m17.705 7.705l-1.41-1.41L12 10.59L7.705 6.295l-1.41 1.41L10.59 12l-4.295 4.295l1.41 1.41L12 13.41l4.295 4.295l1.41-1.41L13.41 12z"
				/></svg
			>
		</button>
	</div>
{/if}
