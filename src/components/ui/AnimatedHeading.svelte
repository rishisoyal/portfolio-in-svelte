<script lang="ts">
	type AnimatedHeadingProps = {
		frontText: { firstText: string; secondText: string };
		backText: string;
	};

	let { frontText, backText }: AnimatedHeadingProps = $props();
</script>

<div class="relative flex h-24 w-full items-center justify-center">
	<div
		class="animation-zoom-in absolute flex items-center justify-center text-center text-6xl font-bold opacity-15 sm:text-9xl"
	>
		{backText}
	</div>
	<h1 class="flex h-full w-full items-center justify-center text-4xl font-bold sm:text-6xl z-1">
		{frontText.firstText}
		<span class="px-4 text-[#5160b2] text-shadow-[0px_0px_50px_#7287fd]">
			{frontText.secondText}
		</span>
	</h1>
</div>
