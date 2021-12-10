<script lang="ts">
  import Carousel from "../carousel.svelte";
  import Section from "../section.svelte";
  import Testimonial from "./testimonial.svelte";
  import type { Testimonial as TestimonialType } from "../../types/testimonial.type";

  export let testimonials: TestimonialType[];
</script>

<style lang="scss">
  :global(.slides) {
    margin-bottom: var(--small);
  }

  :global(.slides) > :global(div) > :global(div) {
    display: flex;
    justify-content: center;
  }
</style>

<Section class="-mb-20">
  <div class="row">
    <div class="text-center">
      <h2>Putting developer experience first</h2>
      <p class="text-large mt-xx-small mb-medium">
        Bring back joy and speed to your workflows.
      </p>
    </div>
    <Carousel>
      {#each testimonials as testimonial}
        <Testimonial {testimonial} />
      {/each}
    </Carousel>
  </div>
</Section>
