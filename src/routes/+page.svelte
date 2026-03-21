<script lang="ts">
	import { AnimatedButton } from '../components/ui';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<title>Rishi Soyal - Home</title>

<main
	class="width-transition relative mb-14 flex min-h-screen w-full items-center justify-center overflow-hidden lg:mb-0"
>
	<div
		id="slide"
		class="absolute -top-1/2 -z-9 hidden h-[200%] w-full -rotate-15 transition-colors duration-300 lg:block bg-[#5160b2]"
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
							goto(resolve('/about'));
						}}
					/>
				</div>
			</div>
		</div>
	</div>
</main>

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
