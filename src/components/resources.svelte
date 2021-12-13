<script lang="ts">
  import type { Resource as ResourceType } from "../types/resource.type";
  import Resource from "./resource.svelte";

  export let resources: ResourceType[];
  export let headingLevel: "h3" | "h2" = "h2";
</script>

<div class="flex flex-wrap justify-center mt-small max-w-8xl mx-auto">
  {#each resources as resource}
    <Resource
      {resource}
      class="sm:mx-macro 2xl:mx-micro mb-micro lg:mb-x-small"
      {headingLevel}
    />
  {/each}
</div>
