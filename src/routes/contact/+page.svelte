<script lang="ts">
	import { AnimatedHeading } from '../../components/ui';
	import { Form, Socials } from './_components';
</script>

<main class="mb-18 flex items-start justify-center pt-12 lg:mb-0">
	<section class="flex w-full flex-col justify-center gap-8 p-3 sm:p-8">
		<AnimatedHeading frontText={{ firstText: 'GET IN', secondText: 'TOUCH' }} backText="CONTACT" />
		<div class="animation-slide-in-up w-full p-1 lg:p-12">
			<div class="flex w-full flex-col items-start justify-center gap-14 lg:flex-row">
				<!-- Left section -->
				<div class="left flex w-full flex-col gap-8 lg:w-100 xl:w-160">
					<!-- Main text  -->
					<div class="flex flex-col gap-2">
						<div class="flex w-full items-center justify-start py-2 text-3xl font-bold">
							<h2>DON&#39;T BE SHY!</h2>
						</div>
						<p class="text-left text-wrap text-shadow-[0px_0px_30px_#5160b2] dark:text-[#cdd6f4]">
							Feel free to get in touch with me. I am always open to discussing new projects,
							creative ideas or opportunities to be part of your visions.
						</p>
					</div>
					<!-- Contact info container -->
					<div class="flex flex-col items-start justify-center gap-4">
						<div class="flex items-center justify-center gap-2">
							<div class="">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
									/></svg
								>
							</div>
							<div class="flex flex-col">
								<h5 class="text-gray-500 dark:text-gray-400">ADDRESS POINT</h5>
								<p class="text-[14px]">357, Laxmi Narayan Puri, Jaipur, Rajasthan, India</p>
							</div>
						</div>
						<div class="flex items-center justify-center gap-2">
							<div class="">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"
									><path
										fill="currentColor"
										d="M448.67 154.45L274.1 68.2a41.1 41.1 0 0 0-36.2 0L63.33 154.45A55.6 55.6 0 0 0 32 204.53v184.61c0 30.88 25.42 56 56.67 56h334.66c31.25 0 56.67-25.12 56.67-56V204.53a55.6 55.6 0 0 0-31.33-50.08M252.38 96.82a8.22 8.22 0 0 1 7.24 0L429 180.48l-172 85a8.22 8.22 0 0 1-7.24 0L80.35 181.81Z"
									/></svg
								>
							</div>
							<div class="flex flex-col">
								<h5 class="text-gray-500 dark:text-gray-400">MAIL ME</h5>
								<a
									href="mailto:rishisoyal510@gmail.com"
									class="text-[14px] custom-cursor:cursor-none"
								>
									rishisoyal510@gmail.com
								</a>
							</div>
						</div>
						<div class="flex items-center justify-center gap-2">
							<div class="">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"
									><path
										fill="currentColor"
										d="M2.5 0A2.5 2.5 0 0 0 0 2.5v2C0 10.299 4.701 15 10.5 15h2a2.5 2.5 0 0 0 2.5-2.5v-1.382a1.5 1.5 0 0 0-.83-1.342l-2.415-1.208a1.5 1.5 0 0 0-2.094.868l-.298.893a.71.71 0 0 1-.812.471A5.55 5.55 0 0 1 4.2 6.45a.71.71 0 0 1 .471-.812l1.109-.37a1.5 1.5 0 0 0 .98-1.787l-.586-2.344A1.5 1.5 0 0 0 4.72 0z"
									/></svg
								>
							</div>
							<div class="flex flex-col">
								<h5 class="text-gray-500 dark:text-gray-400">CALL ME</h5>
								<a href="tel:+91 6367830221" class="text-[14px] custom-cursor:cursor-none">
									+91 6367830221
								</a>
							</div>
						</div>
					</div>
					<!-- Social media links -->
					<Socials />
				</div>
				<!-- Right section  -->
				<div class="flex min-h-full w-full lg:max-w-[calc(100%-400px)]">
					<Form />
				</div>
			</div>
		</div>
	</section>
</main>
