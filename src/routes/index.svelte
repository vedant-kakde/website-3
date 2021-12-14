<script context="module">
  export const prerender = true;
</script>

<script>
  import { testimonials } from "../contents/home/index";
  import {
    features,
    otherFeatures,
    secondaryFeatures,
  } from "../contents/home/features";

  import Features from "../components/features.svelte";
  import ChooseProject from "../components/index/choose-project.svelte";
  import Hero from "../components/index/hero.svelte";
  import SectionScreenshot from "../components/index/section-ides.svelte";
  import Testimonials from "../components/index/testimonials.svelte";
  import GetStarted from "../components/index/get-started/index.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import UsedBy from "../components/index/used-by.svelte";
  import SecondaryFeatures from "../components/secondary-features.svelte";
  import SpinUp from "../components/index/spin-up.svelte";
  import Section from "../components/section.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod streamlines developer workflows by providing prebuilt, collaborative developer environments in your browser - powered by VS Code.",
    title: "Gitpod - Always ready to code",
  }}
/>

<Hero />
<ChooseProject />
<div id="choose-project-observer-target-bottom">
  <Features {features} />
</div>
<SectionScreenshot />
<UsedBy title="Used by 500k+ developers" />
<Features features={otherFeatures} />
<Section>
  <SecondaryFeatures {secondaryFeatures} />
</Section>
<Testimonials {testimonials} />
<GetStarted />
<SpinUp />
