<script>
  import Header from "../../components/opensource/header.svelte";
  import {
    programBenefits,
    cards,
    exploreContents,
    features,
  } from "../../contents/opensource";

  import SectionFeatures from "../../components/section-features.svelte";
  import ProgramBenefits from "../../components/program-benefits.svelte";
  import Eligibility from "../../components/eligibility.svelte";
  import Faqs from "../../components/opensource/faqs.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
  import SectionCommon from "../../components/section-common.svelte";
  import Explore from "../../components/explore.svelte";
  import ActionsSpeakLouderThanWords from "../../components/opensource/actions-speak-louder-than-words.svelte";
  import CardSmall from "../../components/card/card-small.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Spend less time reviewing pull-requests, on-boarding contributors and more time on building great things. Get a free Open-Source Plan.",
    title: "Gitpod for Open Source",
  }}
/>

<Header />

<SectionFeatures
  title="Be always ready-to-code"
  text="Spin up fresh, automated dev environments for each task, in the cloud, in
  seconds."
  {features}
/>

<ProgramBenefits cards={programBenefits} />

<Eligibility
  text="To qualify for Gitpod’s startup program, need to meet one of these criteria:"
  list={[
    "You are a maintainer, core contributor to a well-established open-source project.",
    "You regularly contribute to open source communities in other ways (e.g. producing regular content like blog posts, videos, live streams, translations, or organizing meet-ups, conferences, hackathons, etc).",
    "You are an author, core contributor of extensions for editors such as VSCode, VIM, eMacs, et al. or of developer tools such as build systems, programming languages, compilers, and editor tooling such as Language Server Protocol (LSP) implementations.",
    "A significant part of your income is from maintaining or producing open source work.",
  ]}
  link={{ href: "", text: "Apply now" }}
  ulMaxWidth="720px"
/>

<Faqs />

<SectionCommon
  title="Open source is in our DNA"
  text="Gitpod is open-source and so are all the tools we develop and contribute to."
>
  <div
    class="flex flex-wrap justify-center mt-small max-w-5xl mx-auto"
    slot="content"
  >
    {#each cards as card}
      <CardSmall class="m-macro px-xx-small" {card} />
    {/each}
  </div>
</SectionCommon>

<ActionsSpeakLouderThanWords />

<Explore contents={exploreContents} />
