<script lang="ts">
	import { fade } from 'svelte/transition';
	import { customCursor } from '../../store';

	let mouseX = $state(0);
	let mouseY = $state(0);
	let scale = $state(1);
	// Internal state to handle the 'ghost' cursor
	let isInside = $state(false);

	const move = (e: MouseEvent) => {
		// If it was hidden, show it as soon as it moves
		if (!isInside) isInside = true;

		mouseX = e.clientX;
		mouseY = e.clientY;
	};

	const handleOver = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		if (target.closest?.('button, a, input, textarea, [data-cursor-scale], .project-card')) {
			scale = 1.5;
		} else {
			scale = 1;
		}
	};

	const exitViewport = () => {
		isInside = false;
		$customCursor = false;
	};
</script>

<svelte:window
	onmousemove={move}
	onmousedown={() => (scale = 1.5)}
	onmouseup={() => (scale = 1)}
	onmouseover={handleOver}
/>

<svelte:document onmouseleave={exitViewport} onmouseenter={() => (isInside = true)} />

{#if isInside}
	<div
		in:fade={{
			duration: 400
		}}
		out:fade={{
			duration: 400
		}}
	>
		<div
			class="pointer-events-none fixed top-0 left-0 z-999 h-2 w-2 rounded-full bg-[#5160b2]"
			style:transform={`translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`}
		></div>

		<div
			class="pointer-events-none fixed top-0 left-0 z-999 h-10 w-10 rounded-full bg-[#5160b2ae] opacity-70 transition-transform duration-500 ease-out"
			style:transform={`translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${scale})`}
		></div>
	</div>
{/if}
