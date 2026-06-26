<script lang="ts">
  import { AnimatedHeading } from "../../components/ui";
  import Projects from "./_components/Projects.svelte";
</script>

<main class="mb-14 w-full pt-12 lg:mb-0">
  <section class="flex w-full flex-col justify-center gap-8 p-8">
    <AnimatedHeading
      frontText={{ firstText: "MY", secondText: "PORTFOLIO" }}
      backText="WORKS"
    />
    <div class="w-full py-8">
      <Projects />
    </div>
  </section>
</main>
