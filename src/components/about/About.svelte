<script lang="ts">
	import { AnimatedHeading } from '../ui';
	import ExperienceEducation from './ExperienceEducation.svelte';
	import ResumeDownloadButton from './ResumeDownloadButton.svelte';
	import Skills from './Skills.svelte';
	
</script>

<main class="mb-14 w-full max-w-480 overflow-hidden lg:mb-0">
	<div class="pt-20">
		<AnimatedHeading frontText={{ firstText: 'ABOUT', secondText: 'ME' }} backText="RESUME" />
	</div>
	<div class="animation-slide-in-up">
		<section
			class="relative flex w-full flex-col items-center justify-start gap-8 p-3 sm:p-8 sm:py-28"
		>
			<div
				class="flex w-full flex-col items-start justify-center gap-2 p-3 min-[1600px]:w-360 lg:flex-row"
			>
				<div class="flex h-full w-full flex-col gap-4 lg:w-1/2">
					<h2 class="w-full py-2 text-start text-2xl text-[#5160b2]">PERSONAL INFO</h2>
					<div class="flex w-full gap-6">
						<div class="flex flex-col justify-around gap-6">
							<div class="grid grid-cols-2 justify-around gap-4">
								<div
									class="flex flex-col
                    min-[720px]:max-[1020px]:flex-row
                    min-[1400px]:flex-row sm:gap-1"
								>
									<span
										class="text-[#5160b2] text-shadow-[0px_0px_10px_#7287fd] dark:text-[#cdd6f4]"
									>
										First Name:
									</span>
									<span class="">Rishi</span>
								</div>
								<div
									class="flex flex-col
                  min-[720px]:max-[1020px]:flex-row
                  min-[1400px]:flex-row sm:gap-1"
								>
									<span
										class="text-[#5160b2] text-shadow-[0px_0px_10px_#7287fd] dark:text-[#cdd6f4]"
									>
										Last Name:
									</span>
									<span class="">Soyal</span>
								</div>
								<div
									class="flex flex-col
                  min-[720px]:max-[1020px]:flex-row
                  min-[1400px]:flex-row sm:gap-1"
								>
									<span
										class="text-[#5160b2] text-shadow-[0px_0px_10px_#7287fd] dark:text-[#cdd6f4]"
									>
										Age:
									</span>
									<span class="">21 Years</span>
								</div>
								<div
									class="flex flex-col
                  min-[720px]:max-[1020px]:flex-row
                  min-[1400px]:flex-row sm:gap-1"
								>
									<span
										class="text-[#5160b2] text-shadow-[0px_0px_10px_#7287fd] dark:text-[#cdd6f4]"
									>
										Nationality:
									</span>
									<span class="">Indian</span>
								</div>
								<div
									class="flex flex-col
                  min-[720px]:max-[1020px]:flex-row
                  min-[1400px]:flex-row sm:gap-1"
								>
									<span
										class="text-[#5160b2] text-shadow-[0px_0px_10px_#7287fd] dark:text-[#cdd6f4]"
									>
										Freelance:
									</span>
									<span class="text-green-600 dark:text-green-400"> Available </span>
								</div>
								<div
									class="flex flex-col
                  min-[720px]:max-[1020px]:flex-row
                  min-[1400px]:flex-row sm:gap-1"
								>
									<span
										class="text-[#5160b2] text-shadow-[0px_0px_10px_#7287fd] dark:text-[#cdd6f4]"
									>
										Address:
									</span>
									<span class="">Jaipur, Rajasthan, India</span>
								</div>
								<div
									class="flex flex-col
                  min-[720px]:max-[1020px]:flex-row
                  min-[1400px]:flex-row sm:gap-1"
								>
									<span
										class="text-[#5160b2] text-shadow-[0px_0px_10px_#7287fd] dark:text-[#cdd6f4]"
									>
										Phone:
									</span>
									<a href="tel:+91 6367830221" class="custom-cursor:cursor-none">
										+91 6367830221
									</a>
								</div>
								<div
									class="flex flex-col
                  flex-wrap
                  min-[720px]:max-[1020px]:flex-row min-[1400px]:flex-row sm:gap-1"
								>
									<span
										class="text-[#5160b2] text-shadow-[0px_0px_10px_#7287fd] dark:text-[#cdd6f4]"
									>
										Email:
									</span>
									<a
										href="mailto:rishisoyal510@gmail.com"
										class="text-wrap break-all custom-cursor:cursor-none"
									>
										rishisoyal510@gmail.com
									</a>
								</div>
								<div
									class="flex flex-col
                  min-[720px]:max-[1020px]:flex-row
                  min-[1400px]:flex-row sm:gap-1"
								>
									<span
										class="text-[#5160b2] text-shadow-[0px_0px_20px_#7287fd] dark:text-[#cdd6f4]"
									>
										GitHub:
									</span>
									<a
										href="https://github.com/rishisoyal"
										target="_blank"
										class="custom-cursor:cursor-none"
									>
										rishisoyal
									</a>
								</div>
								<div
									class="flex flex-col
                  min-[720px]:max-[1020px]:flex-row
                  min-[1400px]:flex-row sm:gap-1"
								>
									<span
										class="text-[#5160b2] text-shadow-[0px_0px_20px_#7287fd] dark:text-[#cdd6f4]"
									>
										Languages:
									</span>
									<span class="">English, Hindi</span>
								</div>
							</div>
							<div class="">
								<ResumeDownloadButton />
							</div>
						</div>
					</div>
				</div>

				<!-- Stats -->
				<div class="grid min-h-full w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:w-max">
					<div
						class="flex h-full w-full flex-col items-start justify-center gap-2 rounded-xl border-2 border-[#45475a] p-6 duration-500 ease-in-out hover:-translate-1.5 hover:shadow-[8px_8px_0px_0px_#45475a] hover:transition-all lg:w-64 dark:hover:shadow-[8px_8px_0px_0px_#cdd6f4]"
					>
						<span class="stat-text full">ACTIVELY LEARNING SINCE</span>
						<span class="text-2xl font-bold text-[#5160b2]">2021</span>
					</div>
					<div
						class="flex h-full w-full flex-col items-start justify-center gap-2 rounded-xl border-2 border-[#45475a] p-6 duration-500 ease-in-out hover:-translate-1.5 hover:shadow-[8px_8px_0px_0px_#45475a] hover:transition-all lg:w-64 dark:hover:shadow-[8px_8px_0px_0px_#cdd6f4]"
					>
						<span class="stat-text text-md">INDUSTRIAL TRAINING EXPERIENCE</span>
						<span class="text-2xl font-bold text-[#5160b2]"> 5 MONTHS </span>
					</div>
					<div
						class="flex h-full w-full flex-col items-start justify-center gap-2 rounded-xl border-2 border-[#45475a] p-6 duration-500 ease-in-out hover:-translate-1.5 hover:shadow-[8px_8px_0px_0px_#45475a] hover:transition-all lg:w-64 dark:hover:shadow-[8px_8px_0px_0px_#cdd6f4]"
					>
						<span class="stat-text text-md">TECHNOLOGIES USED</span>
						<span>
							<span class="text-2xl font-bold text-[#5160b2]">10+</span>
							<br />
							<span class="max-w-4 dark:text-gray-300">
								(React, Next.js, Node, MongoDB, etc.)
							</span>
						</span>
					</div>
					<div
						class="flex h-full w-full flex-col items-start justify-center gap-2 rounded-xl border-2 border-[#45475a] p-6 duration-500 ease-in-out hover:-translate-1.5 hover:shadow-[8px_8px_0px_0px_#45475a] hover:transition-all lg:w-64 dark:hover:shadow-[8px_8px_0px_0px_#cdd6f4]"
					>
						<span class="stat-text text-md">CORE TECH STACK</span>
						<span class="text-2xl font-bold text-[#5160b2]"> MERN + Next.js </span>
					</div>
				</div>
			</div>
		</section>

		<!-- skills section -->
		<section class="flex flex-col items-center justify-center">
			<div class="flex w-full items-center justify-center py-8">
				<h2 data-aos="fade-down" class="mb-4 pt-12 text-2xl font-bold sm:py-0 sm:text-4xl">
					MY SKILLS
				</h2>
			</div>
			<Skills />
		</section>

		<!-- Education and experience section -->
		<section class="py-10 sm:py-28">
			<div class="flex w-full items-center justify-center">
				<h2 data-aos="fade-down" class="p-4 text-2xl font-bold sm:text-4xl">
					EXPERIENCE & EDUCATION
				</h2>
			</div>
			<ExperienceEducation />
		</section>
	</div>
</main>