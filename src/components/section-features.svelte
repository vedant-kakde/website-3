<script lang="ts">
  import type { Feature as FeatureType } from "../types/feature.type";
  import Features from "./features.svelte";

  import Section from "./section.svelte";
  export let title: string;
  export let text: string = "";
  export let features: FeatureType[];
</script>

<style lang="postcss">
  .top {
    @media (min-width: 973px) {
      @apply -mb-16;
    }
  }
</style>

<Section>
  <div class="top text-center">
    <h2>{title}</h2>
    {#if text}
      <p class="text-large">{text}</p>
    {/if}
  </div>
  <Features {features} headingLevel="h3" />
</Section>
