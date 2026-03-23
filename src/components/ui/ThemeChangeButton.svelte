<script lang="ts">
	import { isDark, toggleTheme } from '../../store';
</script>

<div>
	<button
		id="theme-btn"
		class="grid cursor-pointer place-content-center rounded-full bg-[#bcc0cc] p-2 transition-all duration-500 dark:bg-[#313244] hover:bg-[#5160b2] custom-cursor:cursor-none hover:text-white dark:text-white text-gray-700"
		onclick={toggleTheme}
		title={$isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
	>
		{#if $isDark}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
				><g fill="none"
					><g fill="currentColor" clip-path="url(#SVGHcSWxdhd)"
						><path
							d="M12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-7.071-2.343a1 1 0 1 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414zm12.728 0a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m-9 5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm20 0a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM3.515 3.515a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3.515 4.929a1 1 0 0 1 0-1.414m15.556 0a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414zM12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1"
						/></g
					><defs><clipPath id="SVGHcSWxdhd"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs
					></g
				></svg
			>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
				><path
					fill="currentColor"
					fill-rule="evenodd"
					d="M7.455 2.004a.75.75 0 0 1 .26.77a7 7 0 0 0 9.958 7.967a.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083"
					clip-rule="evenodd"
				/></svg
			>
		{/if}
	</button>
</div>
