<script lang="ts">
  import type { Screencast } from "../../types/screencasts.type";
  import Preview from "./preview.svelte";

  export let screencast: Screencast;
  export let screencastNumber: number;

  $: screencastDurationMinutes = Math.floor(screencast.duration / 60);
  $: screencastDurationSeconds = screencast.duration % 60;
</script>

<article>
  <Preview {screencast} {screencastNumber} />
  <div class="pl-micro">
    <time class="text-dark-grey text-fine-print"
      >Duration: {screencastDurationMinutes}m {screencastDurationSeconds}s</time
    >
    <p>{screencast.description}</p>
  </div>
</article>
