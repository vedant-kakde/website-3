<script>
  import { empowermentFeatures } from "../../contents/pricing";

  import Section from "../section.svelte";
  import Resource from "../support/resource.svelte";
</script>

<Section class="text-center">
  <h2>We love to empower creative minds</h2>
  <div class="flex flex-wrap justify-around mt-small max-w-7xl mx-auto">
    {#each empowermentFeatures as resource}
      <Resource {resource} />
    {/each}
  </div>
</Section>
