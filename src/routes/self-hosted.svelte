<script context="module">
  export const prerender = true;
  const trackingContext = "self-hosted";
</script>

<script>
  import Explore from "../components/explore.svelte";
  import Faqs from "../components/self-hosted/faqs.svelte";
  import OpenGraph from "../components/open-graph.svelte";
  import PlansAndPricing from "../components/pricing/plans-and-pricing.svelte";
  import { pricingPlans } from "../contents/self-hosted";
</script>

<OpenGraph
  data={{
    description: "Self-Host Gitpod on Your Own Infrastructure.",
    title: "Self-Hosted",
  }}
/>
<PlansAndPricing {trackingContext} {pricingPlans} />
<Faqs {trackingContext} />
<Explore
  contents={{
    title: "Explore Gitpod",
    link: { href: "/screencasts", text: "View Screencasts" },
  }}
/>
