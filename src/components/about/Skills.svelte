<script lang="ts">
  import { skills } from "./data/skills";
  import CircularProgressbar from "./CircularProgressbar.svelte";
</script>

<div
  class="grid w-full grid-cols-2 place-content-center items-center justify-items-center gap-8 p-6 md:grid-cols-4 lg:w-4/5"
>
  {#each skills as skill (skill.name)}
    <div
      class="scroll-reveal flex w-full max-w-50 flex-col items-center justify-center opacity-0"
    >
      <div class="flex w-full items-center justify-center">
        <CircularProgressbar level={skill.level} />
      </div>
      <div class="flex w-full items-center justify-center p-2 sm:p-4">
        <h2 class="text-[14px] text-nowrap sm:text-xl">{skill.name}</h2>
      </div>
    </div>
  {/each}
</div>
