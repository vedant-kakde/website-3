<script context="module">
  export const prerender = true;
</script>

<script>
  import Header from "../components/support/header.svelte";
  import Cta from "../components/support/cta.svelte";
  import PopularArticles from "../components/support/popular-articles.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import { cards } from "../contents/support";
  import Resources from "../components/resources.svelte";
  import SectionCommon from "../components/section-common.svelte";
</script>

<OpenGraph
  data={{
    description: "Need help?",
    title: "Support",
  }}
/>

<Header />
<Cta />
<SectionCommon title="Helpful Resources">
  <Resources {cards} slot="content" />
</SectionCommon>
<PopularArticles />
