<script lang="ts">
	import { customCursor, toggleCursor } from '../../store/cursorStore';
	let mouseX = $state(0);
	let mouseY = $state(0);
	let scale = $state(1);

	$effect(() => {
		const move = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			if (!$customCursor) toggleCursor();
		};

		const handleDown = () => {
			scale = 1.5;
		};
		const handleUp = () => {
			scale = 1;
		};

		const handleOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (target.closest?.('button, a, input, textarea, [data-cursor-scale], .project-card')) {
				scale = 1.5;
			}
		};

		const handleOut = () => {
			scale = 1;
		};

		window.addEventListener('mousemove', move);
		window.addEventListener('mousedown', handleDown);
		window.addEventListener('mouseup', handleUp);
		window.addEventListener('mouseover', handleOver);
		window.addEventListener('mouseout', handleOut);

		return () => {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('mousedown', handleDown);
			window.removeEventListener('mouseup', handleUp);
			window.removeEventListener('mouseover', handleOver);
			window.removeEventListener('mouseout', handleOut);
		};
	});
</script>

{#if $customCursor}
	<!-- Main Dot: Follows mouse exactly  -->
	<div
		class="pointer-events-none fixed inset-0 z-999 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5160b2]"
		style={`transform: translate(${mouseX}px, ${mouseY}px)`}
	></div>

	<!-- Trail: Follows mouse with a lag  -->
	<div
		class="pointer-events-none fixed inset-0 z-999 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5160b2ae] opacity-70 transition-transform duration-500 ease-out"
		style={`transform: translate(${mouseX}px, ${mouseY}px) scale(${scale})`}
	></div>
{/if}
