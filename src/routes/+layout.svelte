<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/ui/Header.svelte';
	import AnimatedRoute from '../components/ui/AnimatedRoute.svelte';
	import { page } from '$app/state';
	import ThemeChangeButton from '../components/ui/ThemeChangeButton.svelte';
	import { customCursor, toggleCursor } from '../store/cursorStore';
	import { isDark, toggleTheme } from '../store/themeStore';
	import CustomCursorToggleButton from '../components/ui/CustomCursorToggleButton.svelte';
	import CustomCursor from '../components/ui/CustomCursor.svelte';
	import Toast from '../components/ui/Toast.svelte';

	let { children } = $props();
	$effect.pre(() => {
		const theme = localStorage.getItem('theme');
		const cursor = (localStorage.getItem('cursor') || 'custom') as 'default' | 'custom';

		// set cursor
		if (
			(window.innerWidth < 768 && $customCursor) ||
			(cursor === 'custom' && !$customCursor) ||
			(cursor === 'default' && $customCursor)
		) {
			toggleCursor();
		}

		// set theme
		if ((!theme && !$isDark) || (theme === 'light' && $isDark)) toggleTheme();
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />
<Toast />

<div class="fixed top-0 right-0 z-20 flex gap-2 p-4">
	<ThemeChangeButton />
	<span class="hidden md:inline-block">
		<CustomCursorToggleButton />
	</span>
</div>

{#if $customCursor}
	<CustomCursor />
{/if}

{#key page.url.pathname}
	<AnimatedRoute />
{/key}

<div class="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
	<div class="flex min-h-screen w-full justify-center">
		{@render children()}
	</div>
</div>
