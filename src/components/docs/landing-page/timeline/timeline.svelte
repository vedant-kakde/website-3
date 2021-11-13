<script lang="ts">
  import { slicedChangelogEntries } from "../../../../stores/changelog";
  import TimelineItem from "./timeline-item.svelte";
</script>

<section id="timeline">
  <div class="container order-2  mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      {#each $slicedChangelogEntries as entry}
        <TimelineItem timelineItem={entry} />
      {/each}
    </div>
  </div>
</section>
