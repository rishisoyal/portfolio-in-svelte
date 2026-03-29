<script lang="ts">
	import type { Project } from '../types/project.type';

	const { project }: { project: Project } = $props();
</script>

<div class="h-max w-full md:w-160">
	<div class="flex w-full items-center justify-center text-[150%] sm:text-4xl">
		<h2 class="text-[#5160b2]">{project.name}</h2>
	</div>
	<!-- Info section -->
	<div class="ga-4 flex flex-col py-4 text-sm sm:text-[1rem]">
		<div class="flex flex-wrap">
			<div class="flex max-w-full items-center gap-2 p-2">
				<span class="rounded-full bg-[#bcc0cc] p-2 text-gray-700 dark:bg-gray-700 dark:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="m12.89 3l1.96.4L11.11 21l-1.96-.4zm6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83zM1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83z"
						/></svg
					>
				</span>
				<span class="text-nowrap">Tech Stack: </span>
				<strong
					onwheel={(e) => {
						e.preventDefault();
						e.currentTarget.scrollLeft += e.deltaY;
					}}
					class="text-scrollbar flex max-w-full overflow-x-auto scroll-smooth text-nowrap text-[#5160b2] dark:text-[#cdd6f4]"
					title="Use Wheel To Scroll"
				>
					{project.techStack?.join(', ')}
				</strong>
			</div>
			{#if project.public_url}
				<div class="flex items-center gap-2 p-2">
					<span
						class="rounded-full bg-[#bcc0cc] p-2 text-gray-700 dark:bg-gray-700 dark:text-white"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="M15 1h8v8l-1 1l-2.763-2.763l-8 8l-2.474-2.474l8-8L14 2zM2 3.75H.75v19.5h19.5V12h-2.5v8.75H3.25V6.25H12v-2.5z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					Preview:
					<a
						href={project.public_url}
						target="_blank"
						class="cursor-pointer text-[#5160b2] custom-cursor:cursor-none"
					>
						<strong class="underline decoration-wavy"> Check out the app </strong>
					</a>
				</div>
			{/if}
			<div class="flex items-center gap-2 p-2">
				<span class="rounded-full bg-[#bcc0cc] p-2 text-gray-700 dark:bg-gray-700 dark:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
						/></svg
					>
				</span>
				GitHub:
				<a
					href={project.github}
					target="_blank"
					class="cursor-pointer text-[#5160b2] custom-cursor:cursor-none"
				>
					<strong class="underline decoration-wavy"> View the code </strong>
				</a>
			</div>
		</div>
		<div class="flex flex-col items-center justify-start gap-2 p-2">
			<div class="flex w-full gap-2">
				<span class="rounded-full bg-[#bcc0cc] p-2 text-gray-700 dark:bg-gray-700 dark:text-white">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
						/></svg
					>
				</span>
				About this project:
			</div>
			<p class="w-full pt-2 text-left text-[#5160b2] dark:text-[#cdd6f4]">
				{project.desc}
			</p>
		</div>
	</div>

	<div class="h-92.5 w-180">
		<img
			class="w-full rounded-2xl border border-[#45475a]"
			src={project.img!}
			alt={project.name!}
			width={720}
			height={366}
		/>
	</div>
</div>
