<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	const pages = [
		{
			path: '/',
			name: 'Home',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.45 2.533a2.25 2.25 0 0 0-2.9 0L3.8 8.228a2.25 2.25 0 0 0-.8 1.72v9.305c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v4.003c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V9.947a2.25 2.25 0 0 0-.8-1.72z"/></svg>`
		},
		{
			path: '/about',
			name: 'About',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M8 9c3.85 0 7 2.5 7 4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5C1 11.5 4.15 9 8 9m0-8a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7"/></svg>`
		},
		{
			path: '/portfolio',
			name: 'Portfolio',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723l.005.003l.027.013l.12.056q.163.077.486.212c.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956c.78-.24 1.406-.478 1.835-.655a14 14 0 0 0 .606-.268l.027-.013l.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1zm6.447 7.894l.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276l.002.002l.004.002l.013.006l.041.02l.151.07c.13.06.318.144.557.242c.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a23 23 0 0 0 2.01-.72a16 16 0 0 0 .707-.312l.041-.02l.013-.006l.004-.002zl-.431-.866zM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg>`
		},
		{
			path: '/contact',
			name: 'Contact',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M448.67 154.45L274.1 68.2a41.1 41.1 0 0 0-36.2 0L63.33 154.45A55.6 55.6 0 0 0 32 204.53v184.61c0 30.88 25.42 56 56.67 56h334.66c31.25 0 56.67-25.12 56.67-56V204.53a55.6 55.6 0 0 0-31.33-50.08M252.38 96.82a8.22 8.22 0 0 1 7.24 0L429 180.48l-172 85a8.22 8.22 0 0 1-7.24 0L80.35 181.81Z"/></svg>`
		}
	] as const;
	let pathName = $derived(page.url.pathname);
</script>

<header
	class="fixed right-0 bottom-0 z-10 block w-full p-3 pl-0 backdrop-blur-sm lg:my-2 lg:flex lg:h-full lg:w-max lg:bg-transparent lg:p-6 lg:backdrop-blur-none"
>
	<ul
		class="flex w-full flex-row items-center justify-evenly lg:flex-col lg:justify-center lg:gap-6"
	>
		{#each pages as page (page.name)}
			<li class="relative flex place-content-center">
				<a
					href={resolve(page.path)}
					class={`relative flex h-12 w-12 cursor-pointer items-center justify-center gap-4 rounded-full sm:h-13 sm:w-13 sm:p-3 custom-cursor:cursor-none
    ${
			pathName === page.path ? 'bg-[#7287fd] dark:bg-[#5160b2]' : 'bg-[#eff1f5] dark:bg-[#45475A]'
		}`}
				>
					<h2
						class="pointer-events-none absolute right-[20%] -z-9 hidden h-full w-30 items-center justify-center rounded-l-full rounded-r-2xl bg-[#7287fd] font-bold opacity-0 lg:flex dark:bg-[#5160b2]"
					>
						{page.name}
					</h2>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html page.icon}
				</a>
			</li>
		{/each}
	</ul>
</header>

<style>
	header ul li a:hover h2 {
		opacity: 1;
		right: 30px;
	}

	header ul li a h2 {
		height: 100%;
		margin: 0;
		text-align: center;
		border-radius: 30px 0 0 30px;
		transition: all 0.3s;
	}

	header ul li a {
		transition: all 0.3s;
	}

	:global(html.dark header ul li a:hover) {
		background-color: #5160b2;
	}

	header ul li a:hover {
		background-color: #7287fd;
	}

	header ul li a:hover h2 {
		pointer-events: all;
	}
</style>
