<script lang="ts">
	import { customCursor, toggleCursor } from '../../store/cursorStore';
</script>

<div>
	<button
		id="cursor-toggle-btn"
		class="grid cursor-pointer place-content-center rounded-full bg-gray-300 p-2 transition-all duration-300 dark:bg-[#313244] hover:bg-[#5160b2] custom-cursor:cursor-none"
		onclick={toggleCursor}
		title={$customCursor ? 'Disable Custom Cursor' : 'Enable Custom Cursor'}
	>
		{#if $customCursor}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
				><path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 4.5V4a2 2 0 0 0-2.41-1.957M13.9 8.4a2 2 0 0 0-1.26-1.295M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158M7 15l-1.8-1.8a 2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343M6 6v8M2 2l20 20"
				/></svg
			>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
				><g
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					><path
						d="M22 14a8 8 0 0 1-8 8m4-11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2m0 0V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1m0-.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"
					/><path
						d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
					/></g
				></svg
			>
		{/if}
	</button>
</div>
