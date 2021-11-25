<script lang="ts">
  import GetStartedItem from "./get-started-item.svelte";
  import { getStartedItems } from "../../../contents/docs/landing-page/get-started";
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-16">
  {#each getStartedItems as item}
    <GetStartedItem getStartedItem={item} />
  {/each}
</div>
