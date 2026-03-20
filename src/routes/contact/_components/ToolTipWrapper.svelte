<script lang="ts">
	import type { Component } from 'svelte';

	type ToolTipWrapperProps = {
		children: Component;
		tooltip: string;
		open: boolean;
	};

	let { children, tooltip, open }: ToolTipWrapperProps = $props();
</script>

<div class="relative w-full">
	{@render children()}

	<!-- tooltip   -->
	{#if open}
		<div
			class="animation-fade-in-down absolute -bottom-8 left-1/2 z-9 h-max w-max -translate-x-1/2 transform rounded bg-[#d20f3982] px-2 py-1 text-sm whitespace-nowrap text-white"
		>
			{tooltip}
		</div>
	{/if}
</div>
