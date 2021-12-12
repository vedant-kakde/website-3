<script lang="ts">
  import SecondaryFeatures from "./secondary-features.svelte";
  import type { SecondaryFeature } from "../types/secondary-feature.type";
  import Section from "./section.svelte";
  export let title = "Program benefits";
  export let secondaryFeatures: SecondaryFeature[];
</script>

<Section class="text-center">
  <h2>{title}</h2>
  <p class="text-large mb-small">
    <slot name="text" />
  </p>
  <SecondaryFeatures {secondaryFeatures} headingLevel="h3" />
</Section>
