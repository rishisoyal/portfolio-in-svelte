<script lang="ts">
	interface AnimatedButtonProps {
		content: string;
		icon: string;
		onClick?: () => void;
	}

	const { content, icon, onClick }: AnimatedButtonProps = $props();
</script>

<button
	class="primary-btn cursor-pointer rounded-full before:rounded-full md:hover:text-white custom-cursor:cursor-none"
	onclick={onClick}
>
	<span class="font-semibold">{content}</span>
	<span
		class="absolute right-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#5160b2] text-xl text-white"
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html icon}
	</span>
</button>
