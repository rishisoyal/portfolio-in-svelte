<script lang="ts">
	import { AnimatedHeading } from '../../components/ui';
	import Projects from './_components/Projects.svelte';
</script>

<main class="mb-14 w-full pt-12 lg:mb-0">
	<section class="flex w-full flex-col justify-center gap-8 p-8">
		<AnimatedHeading frontText={{ firstText: 'MY', secondText: 'PORTFOLIO' }} backText="WORKS" />
		<div class="w-full py-8">
			<!-- <div class="w-full flex items-center justify-center p-4 py-8">
              <ul class="flex gap-4 text-[18px]">
                <li class="cursor-pointer sm:cursor-none hover:text-[#5160b2] transition-colors duration-500 ease-in-out">
                  All
                </li>
                <li class="cursor-pointer sm:cursor-none hover:text-[#5160b2] transition-colors duration-500 ease-in-out">
                  Websites
                </li>
                <li class="cursor-pointer sm:cursor-none hover:text-[#5160b2] transition-colors duration-500 ease-in-out">
                  Apps
                </li>
              </ul>
            </div>  -->
			<Projects />
		</div>
	</section>
</main>
