<script>
  import { programFeatures } from "../../contents/security";
  import Section from "../section.svelte";
  import ProgramFeature from "./program-feature.svelte";
</script>

<Section>
  <h2 class="text-center mb-small">Industry leading security program</h2>
  <div
    class="features-container flex flex-wrap justify-around 1/2xl:justify-center 1/2xl:space-x-medium"
  >
    {#each programFeatures as feature}
      <ProgramFeature {feature} />
    {/each}
  </div>
</Section>
