<script>
	import { experienceAndEducation } from './data/experienceAndEducation';

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('animation-fade-in-up');
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 1 }
		);

		const elements = document.querySelectorAll('.experience-education');

		elements.forEach((el) => observer.observe(el));

		return () => {
			observer.disconnect();
		};
	});
</script>

<div class="flex w-full items-center justify-center">
	<div
		class="width-transition grid w-full grid-cols-1 place-items-center gap-6 p-3 sm:p-8 lg:w-300 lg:grid-cols-2"
	>
		{#each experienceAndEducation as data (data.title)}
			<div class="experience-education flex h-full w-full gap-4 p-4 opacity-0">
				<div class="flex flex-col items-center justify-center">
					<span class="rounded-full bg-[#5160b2] p-2 text-gray-200">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
							><g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								><path
									d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v.01"
								/><path d="M3 13a20 20 0 0 0 18 0" /></g
							></svg
						>
					</span>
					<span class="h-full w-0.5 bg-gray-500"></span>
				</div>
				<div class="flex flex-col gap-2">
					<div
						class="w-fit rounded-full bg-[#bcc0cc] px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-200"
					>
						{data.duration}
					</div>
					<h2 class="text-xl">{data.title}</h2>
					<p>{data.description}</p>
					<div>
						<ul class="flex list-disc flex-col text-sm text-gray-800 dark:text-gray-400">
							{#each data.points as point (point)}
								<li>{point}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
