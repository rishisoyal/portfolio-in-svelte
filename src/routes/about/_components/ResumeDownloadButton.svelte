<script lang="ts">
	let linkRef: HTMLAnchorElement;
</script>

<a
	bind:this={linkRef}
	// eslint-disable-next-line svelte/no-navigation-without-resolve
	href="/Rishi Soyal - Resume.pdf"
	target="_blank"
	download={true}
	class="hidden"
	aria-label="hidden"
></a>
<div class="py-4">
	<button
		onclick={() => {
			// window.open("/Rishi Soyal - Resume.pdf");
			linkRef.click();
		}}
		class="primary-btn mb-12 cursor-pointer rounded-full before:rounded-full lg:mb-0 custom-cursor:cursor-none"
	>
		<span class="font-semibold">DOWNLOAD CV</span>
		<span
			class="absolute right-0 flex h-14 w-14 items-center justify-center rounded-full text-xl bg-[#5160b2]"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
				/></svg
			>
		</span>
	</button>
</div>
