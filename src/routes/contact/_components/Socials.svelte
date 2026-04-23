<script lang="ts">
	const socials = [
		{
			name: 'github.com',
			href: 'https://github.com/rishisoyal',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>`
		},
		{
			name: 'daily.dev',
			href: 'https://app.daily.dev/rishisoyal',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.74 24l-6.37 6.369a2.8 2.8 0 1 0 3.96 3.96l8.35-8.349a2.8 2.8 0 0 0 0-3.96l-8.35-8.35a2.8 2.8 0 0 0-3.96 0L24 20.039l-6.369-6.369a2.8 2.8 0 0 0-3.96 0l-8.35 8.35a2.8 2.8 0 0 0 0 3.96l8.35 8.35a2.8 2.8 0 0 0 3.96 0l18.68-18.68l-2.51 5.411z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 20.039l-12.31 12.31l2.51-5.41L11.26 24l4.39-4.388L20.039 24"/></svg>`
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
				class="cursor-input grid place-content-center rounded-full bg-[#bcc0cc] p-3 transition-all duration-500 hover:-translate-y-1 hover:bg-[#5160b2] hover:text-white hover:shadow-[0px_0px_30px_#5160b2] dark:bg-[#313244] custom-cursor:cursor-none"
				title={social.name}
			>
				{@html social.icon}
			</a>
		</span>
	{/each}
</div>
