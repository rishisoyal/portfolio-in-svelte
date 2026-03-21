<script lang="ts">
	import { isDark } from '../../../store';

	const { level }: { level: number } = $props();
	function angle(val: number) {
		return (val / 100) * 360;
	}
</script>

<div
	class="h-30 w-30 rounded-full p-3 sm:h-40 sm:w-40"
	style={`background-image: conic-gradient(#5160b2 0deg, #5160b2 ${angle(level)}deg, ${$isDark ? '#45475a' : '#99a1af'} ${angle(level)}deg, ${$isDark ? '#45475a' : '#99a1af'} 270deg);`}
>
	<div
		class="flex h-full w-full items-center justify-center rounded-full bg-[#dce0e8] text-xl text-[#5160b2] dark:bg-[#11111b] dark:text-[#cdd6f4]"
	>
		{level}%
	</div>
</div>
