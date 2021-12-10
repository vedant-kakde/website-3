<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "../../components/open-graph.svelte";
  import Screencast from "../../components/screencasts/screencast.svelte";
  import screencasts from "../../contents/screencasts";
  import Section from "../../components/section.svelte";
  import Explore from "../../components/explore.svelte";
</script>

<style lang="postcss">
  .screencasts {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 25rem));
  }
</style>

<OpenGraph
  data={{
    description: "Learn more about Gitpod with these short screencasts.",
    title: "Screencasts",
  }}
/>

<Section>
  <h1 class="h2 text-center">Get started with a screencast</h1>
</Section>

<section
  class="screencasts grid justify-center gap-y-medium gap-x-5 m-x-small px-5"
>
  {#each screencasts as screencast, index}
    <Screencast {screencast} screencastNumber={index + 1} />
  {/each}
</section>

<Explore />
