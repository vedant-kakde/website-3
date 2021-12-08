<script>
  import { letsCollaborateActions } from "../../contents/community";
  import Section from "../section.svelte";
  import Resource from "../resource.svelte";
</script>

<Section class="text-center">
  <h2>Let’s collaborate</h2>
  <p>
    Would you like to collaborate? We’re excited to hear your ideas. Get in
    contact.
  </p>
  <div class="flex flex-wrap justify-around max-w-7xl mx-auto mt-small">
    {#each letsCollaborateActions as resource}
      <Resource {resource} />
    {/each}
  </div>
</Section>
