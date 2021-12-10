<script lang="ts" context="module">
  import screencasts from "../../contents/screencasts";

  export const load = async function ({ page }) {
    const { title } = page.params;
    const screencast = screencasts.find(
      (s) => stringToBeautifiedFragment(s.title.slice(0, -3)) === title
    );
    return { props: { screencast } };
  };
</script>

<script lang="ts">
  import type { Screencast as ScreencastType } from "../../types/screencasts.type";
  import ScreencastPreview from "../../components/screencasts/preview.svelte";
  import YouTubeEmbed from "../../components/youtube-embed.svelte";
  import { stringToBeautifiedFragment } from "../../utils/helpers";
  import OpenGraph from "../../components/open-graph.svelte";

  export let screencast: ScreencastType;
</script>

<OpenGraph
  data={{
    description: screencast.description,
    title: screencast.title,
  }}
/>

<header class="header tight">
  <h1>{screencast.title}</h1>
  <p>{screencast.description}</p>
</header>

<YouTubeEmbed embedId={screencast.youtubeId} title={screencast.title} />
<p class="text-center my-x-small">
  Related documentation:
  {#each screencast.relatedDocs as relatedDoc, i}
    <a href="/docs{relatedDoc.path}">{relatedDoc.title}</a>
    {screencast.relatedDocs.length > 0 &&
    screencast.relatedDocs[i + 1] &&
    !screencast.relatedDocs[i + 2]
      ? " and "
      : screencast.relatedDocs.length > 0 && screencast.relatedDocs[i + 1]
      ? ", "
      : ""}
  {/each}
</p>

{#if screencast.nextScreencast}
  <div class="max-w-sm my-medium mx-auto">
    <h2 class="text-center mb-small">Next up...</h2>
    <ScreencastPreview
      screencast={screencasts[screencast.nextScreencast]}
      screencastNumber={screencast.nextScreencast + 1}
      headlineOrder="h3"
    />
  </div>
{/if}
