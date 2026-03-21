<script lang="ts">
	const socials = [
		{
			name: 'github',
			href: 'https://github.com/rishisoyal',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>`
		},
		{
			name: 'linkedin',
			href: 'https://www.linkedin.com/in/rishisoyal',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>`
		},
		{
			name: 'dev.to',
			href: 'https://dev.to/rishisoyal',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.73 11.93c0 1.72-.02 1.83-.23 2.07c-.19.17-.38.23-.76.23l-.51.01l-.03-2.27l-.02-2.27h.52c.35 0 .6.07.77.21c.24.21.26.25.26 2.02M22 7.5v9c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2v-9c0-1.11.89-2 2-2h16c1.11 0 2 .89 2 2M8.93 11.73c-.03-1.84-.05-1.99-.29-2.39c-.4-.68-.85-.84-2.36-.84H5v7h1.21c1.33 0 1.89-.17 2.29-.71c.41-.53.5-.98.43-3.06m4.19-3.23h-1.48c-1.49 0-1.5 0-1.71.28S9.7 9.21 9.7 12v2.96l.27.27c.25.27.31.27 1.71.27h1.44v-1.19l-1.09-.04l-1.1-.03V12.6l.68-.03l.66-.04v-1.19h-1.39V9.7h2.24zm5.88.06c0-.06-.3-.06-.66-.06l-.68.06l-.59 2.35c-.38 1.48-.62 2.27-.67 2.13c-.08-.27-1.14-4.44-1.14-4.49s-.31-.05-.68-.05h-.69l.41 1.55c.2.87.59 2.28.81 3.15c.34 1.35.46 1.65.75 1.94c.2.22.45.36.61.36c.33 0 .76-.34.9-.73C17.5 14.5 19 8.69 19 8.56"/></svg>`
		}
	];
</script>

<div class="socials flex gap-4 py-2">
	{#each socials as social (social.name)}
		<span>
			<a
				href={social.href}
				target="_blank"
				rel="noopener noreferrer"
				class="cursor-input grid place-content-center rounded-full bg-gray-300 p-3 transition-all duration-500 hover:-translate-y-1 dark:bg-[#313244] hover:bg-[#5160b2] hover:shadow-[0px_0px_30px_#5160b2] custom-cursor:cursor-none"
				title={social.name}			>
				{@html social.icon}
			</a>
		</span>
	{/each}
</div>
