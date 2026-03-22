<script lang="ts">
	import { AnimatedButton, AnimatedHeading, Popup } from '../components/ui';
	import { ExperienceEducation, ResumeDownloadButton, Skills } from './about/_components';

	let open = $state(false);
</script>

<title>Rishi Soyal - Home</title>

<main
	class="width-transition relative mb-14 flex min-h-screen w-full items-center justify-center overflow-hidden lg:mb-0"
>
	<div
		id="slide"
		class="absolute -top-1/2 -z-9 hidden h-[200%] w-full -rotate-15 bg-[#5160b2] transition-colors duration-300 lg:block"
	></div>
	<div
		class="animation-slide-in-up flex w-full flex-col items-center justify-between gap-6 p-8 lg:flex-row"
	>
		<div
			id="hero-img"
			class="relative z-9 h-60 w-60 rounded-[10px] sm:h-80 sm:w-80 lg:mt-4 lg:h-[calc(100vh-100px)] lg:min-w-[35vw] lg:rounded-2xl lg:border-0"
		>
			<img src="/home_1.avif" alt="Rishi Soyal" class="h-full w-full rounded-[10px] object-cover" />
		</div>
		<div class="width-transition flex w-full flex-col items-center justify-center">
			<div class="flex flex-col items-center justify-center lg:items-start">
				<div class="flex items-start justify-center gap-2">
					<div class="flex flex-col items-end p-4 pt-6">
						<span
							class="flex flex-nowrap items-center gap-4 text-4xl leading-12 font-semibold text-nowrap text-[#5160b2] before:hidden before:h-1 before:w-12 before:rounded-full before:bg-[#5160b2] sm:text-6xl sm:leading-20 lg:before:block"
						>
							I&apos;M RISHI SOYAL.
						</span>
						<span class="text-4xl font-semibold sm:text-6xl"> WEB DEVELOPER </span>
					</div>
				</div>
				<div class="w-screen p-4 pt-0 md:w-180 lg:w-130">
					<p
						class="w-full text-center leading-7 text-wrap text-[#232634] sm:text-[18px] sm:leading-8 lg:w-150 lg:text-left dark:text-[#cdd6f4]"
					>
						I&apos;m an India based full-stack web developer focused on crafting clean &
						user-friendly experiences, I am passionate about building excellent software that
						improves the lives of those around me.
					</p>
				</div>
				<div class="flex w-full items-center justify-center px-4 py-4 lg:justify-start">
					<AnimatedButton
						content="MORE ABOUT ME"
						icon={`<svg xmlns="
						http:
						//www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>`}
						onClick={() => {
							open = true;
						}}
					/>
				</div>
			</div>
		</div>
	</div>
</main>

<!-- about me popup -->
<Popup
	isOpen={open}
	onClose={() => {
		open = false;
	}}
>
	<main class="mb-14 w-full max-w-480 overflow-hidden lg:mb-0">
		<div class="pt-20">
			<AnimatedHeading frontText={{ firstText: 'ABOUT', secondText: 'ME' }} backText="RESUME" />
		</div>
		<div class="animation-slide-in-up">
			<section
				class="relative flex w-full flex-col items-center justify-start gap-8 p-3 sm:p-8 sm:py-28"
			>
				<div class="flex w-full flex-col items-start justify-center gap-2 p-3 lg:flex-row">
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
										<span class="">357, Laxmi Narayan Puri, Jaipur</span>
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
					<div class="grid h-full w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:w-max">
						<div
							class="flex h-full w-full flex-col items-start justify-center gap-2 rounded-xl border-2 border-[#45475a] p-6 duration-500 ease-in-out hover:-translate-1.5 hover:shadow-[8px_8px_0px_0px_#45475a] hover:transition-all lg:w-64 dark:hover:shadow-[8px_8px_0px_0px_#cdd6f4]"
						>
							<span class="stat-text full">ACTIVELY LEARNING SINCE</span>
							<span class="text-2xl font-bold text-[#5160b2]">2021</span>
						</div>
						<div
							class="flex h-full w-full flex-col items-start justify-center gap-2 rounded-xl border-2 border-[#45475a] p-6 duration-500 ease-in-out hover:-translate-1.5 hover:shadow-[8px_8px_0px_0px_#45475a] hover:transition-all lg:w-64 dark:hover:shadow-[8px_8px_0px_0px_#cdd6f4]"
						>
							<span class="stat-text text-md">INTERNSHIP EXPERIENCE</span>
							<span class="text-2xl font-bold text-[#5160b2]"> 3 MONTHS </span>
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
</Popup>

<style>
	#slide {
		transform: translateX(-100%);
		animation: slideIn 0.5s ease-out forwards;
	}
	@keyframes slideIn {
		to {
			transform: translateX(-73%);
		}
	}
</style>
