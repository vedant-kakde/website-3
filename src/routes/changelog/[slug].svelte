<script lang="ts" context="module">
  import { formatDate, stringToBeautifiedFragment } from "../../utils/helpers";
  import type { ChangelogEntry as ChangelogEntryType } from "../../types/changelog-entry.type";
  import BackLink from "../../components/changelog/back-link.svelte";

  export async function load({ page, session }) {
    const changelogEntry: ChangelogEntryType = session.changelogEntries.find(
      (entry: ChangelogEntryType) =>
        stringToBeautifiedFragment(entry.title) === page.params.slug
    );
    return { props: { changelogEntry } };
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import Wrapper from "../../components/changelog/wrapper.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
  import "../../assets/markdown-commons.scss";
  export let changelogEntry: ChangelogEntryType;
  const { date, title, excerpt, content, image, alt } = changelogEntry;

  onMount(() => {
    document.getElementsByClassName("toc")[0].remove();
  });
</script>

<style lang="postcss">
  .entry {
    max-width: 800px;
    @apply mx-auto;
  }

  .entry h2 {
    @apply text-h3 !important;
  }
</style>

<OpenGraph
  data={{
    description: excerpt,
    title,
    type: "article",
    image: `images/changelog/${image}`,
    imageTwitter: `images/changelog/${image}`,
  }}
/>

<Wrapper class="pt-small pb-x-large md:pb-xx-large">
  <div class=" entry flex flex-col md:flex-row">
    <div class="content-changelog">
      <BackLink />
      <img src="/images/changelog/{image}" class="rounded-3xl" {alt} />
      <p class="mt-xx-small -mb-9">{formatDate(date)}</p>
      <h2>
        {title}
      </h2>
      {@html content}
    </div>
  </div>
</Wrapper>
