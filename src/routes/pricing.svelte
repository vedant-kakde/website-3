<script context="module">
  export const prerender = true;
  const trackingContext = "general";
</script>

<script>
  import Explore from "../components/explore.svelte";
  import Faqs from "../components/pricing/faqs.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import PlansAndPricing from "../components/pricing/plans-and-pricing.svelte";
  import { pricingPlans } from "../contents/pricing";
  import UsedBy from "../components/index/used-by.svelte";
  import Empower from "../components/pricing/empower.svelte";
</script>

<OpenGraph
  data={{
    description:
      "Gitpod is free for Open Source, and offers productive features for you, your team and your business at reasonable prices.",
    title: "Pricing",
  }}
/>
<PlansAndPricing {trackingContext} {pricingPlans}>
  <p slot="note" class="mt-micro text-center">
    Can’t find the answer here? <a href="/contact/sales">Contact sales</a>
  </p>
</PlansAndPricing>
<UsedBy title="Used by 400k+ developers" />
<Empower />
<Faqs {trackingContext} />
<Explore />
