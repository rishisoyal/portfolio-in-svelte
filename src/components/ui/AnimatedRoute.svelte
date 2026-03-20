<div
	class="fixed inset-0 z-99 min-h-screen w-full bg-[#8CAAEE] dark:bg-[#1e1e2e]"
	id="shutter"
></div>

<style>
	#shutter {
		animation: slide-up 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 forwards;
		transform: translateY(0%);
	}

	@keyframes slide-up {
		to {
			transform: translateY(100%);
		}
	}
</style>
