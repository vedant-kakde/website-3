<script lang="ts">
  import AnnouncementBanner from "./announcement-banner.svelte";
  import OpenGraph from "../open-graph.svelte";
  import FeedbackWidget from "./feedback-widget.svelte";
  import EditInGitpod from "../../components/docs/edit-in-gitpod.svelte";
  import docsCurrentSectionStore from "../../stores/docs-current-section";
  import PrevNext from "./prev-next.svelte";

  export let section;
  export let title;

  $: $docsCurrentSectionStore = section;

  const renderPageToc = (node: Element) => {
    node.appendChild(document.getElementsByClassName("toc")[0]);
  };
</script>

<svelte:head>
  <link rel="stylesheet" href="/prism-solarized-light.min.css" />
</svelte:head>

<OpenGraph
  data={{
    description:
      "Explore the documentation to learn more about Gitpod.io and Gitpod Self-Hosted.",
    title: title ? title : "Gitpod Documentation",
  }}
/>
<AnnouncementBanner />
<EditInGitpod />
<div class="flex">
  <div class="content-docs flex-auto">
    <slot />
  </div>
  <div
    use:renderPageToc
    id="toc-wrapper"
    class="hidden xl:block flex-none w-64 pl-8"
  />
</div>
<FeedbackWidget type="docs" class="my-huge" />
<PrevNext />
