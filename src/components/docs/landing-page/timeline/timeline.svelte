<script lang="ts">
  import { changelogEntriesStore } from "../../../../stores/changelog";
  import TimelineItem from "./timeline-item.svelte";
</script>

<section id="timeline">
  <div class="container order-2  mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      {#each $changelogEntriesStore as entry}
        <TimelineItem title={entry.date} body={entry.excerpt} />
      {/each}
    </div>
  </div>
</section>
