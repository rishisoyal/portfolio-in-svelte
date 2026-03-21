<script lang="ts">
	import type { Project } from '../types/project.type';
	import ProjectCard from './Card.svelte';
	import { projects } from '../data/projects';
	import { Popup } from '../../../components/ui';

	let previewMode = $state(false);
	let projectToPreview = $state<Project | null>(null);

	function handleProjectClick(index: number) {
		projectToPreview = projects[index];
		previewMode = true;
	}

	$effect(() => {
		document.body.style.overflow = previewMode ? 'hidden' : 'auto';
	});
</script>

<div class="flex w-full items-center justify-center">
	<div
		class="project-grid grid w-284 grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3"
	>
		{#each projects as project, i (project.name)}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				onclick={() => handleProjectClick(i)}
				class="project-card animation-fade-in-left relative flex h-55 w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-[#45475a] bg-cover bg-center transition-all duration-300 ease-in-out custom-cursor:cursor-none"
			>
				<img
					class="h-full w-full bg-cover"
					src={project.img!}
					alt={project.name!}
					width={520}
					height={366}
				/>
				<span
					class="absolute flex h-full w-full items-center justify-center bg-[#000000] opacity-10 transition-all duration-500 ease-in-out sm:opacity-0 md:hover:opacity-50"
				></span>
				<h2
					class="pointer-events-none absolute px-2 text-center text-2xl font-semibold text-[#5160b2] brightness-200 transition-all duration-500 text-shadow-[0px_0px_30px_#5160b2] md:top-5 md:opacity-0"
				>
					{project.name}
				</h2>
			</div>
		{/each}
	</div>
	<Popup
		isOpen={previewMode}
		onClose={() => {
			previewMode = false;
		}}
	>
		<ProjectCard project={projectToPreview!} />
	</Popup>
</div>

<style>
	@media (min-width: 768px) {
		.project-card {
			transition: all 0.5s ease-in-out;
		}

		.project-card:hover h2 {
			/* position: relative; */
			opacity: 1;
			top: 38%;
			/* animation: fade-down .3s ease-in-out 0s 1; */
		}

		.project-card:hover {
			box-shadow: 0px 0px 15px 1px #5160b289;
			scale: 1.03;
		}

		.project-card img {
			transition: all 0.5s ease-in-out;
		}

		.project-card:hover img {
			transform: scale(1.12);
		}
	}

	@keyframes fade-down {
		from {
			top: 20px;
			opacity: 0;
		}

		to {
			top: 0;
			opacity: 1;
		}
	}
</style>
