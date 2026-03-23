<script lang="ts">
	import { page } from '$app/state';
	import {
		CustomCursor,
		CustomCursorToggleButton,
		Header,
		ThemeChangeButton,
		Toast
	} from '../components/ui';
	import { customCursor, isDark, toggleCursor, toggleTheme } from '../store';
	import './layout.css';

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

<!-- shutter -->
{#key page.url.pathname}
	<div
		class="fixed inset-0 z-99 min-h-screen w-full bg-[#ccd0da] dark:bg-[#1e1e2e]"
		id="shutter"
	></div>
{/key}

<div class="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
	<div class="flex min-h-screen w-full justify-center">
		{@render children()}
	</div>
</div>
