<script lang="ts">
  import { pricingPlans } from "../../contents/self-hosted";
  import PricingBoxes from "../pricing/pricing-boxes.svelte";
</script>

<header class="tight">
  <h1>Self-hosted plans</h1>
  <p>
    Install Gitpod Self-Hosted on <strong>GKE, EKS, AKS </strong> and
    <strong>K3s</strong>.
  </p>
</header>
<div class="self-hosted-pricing">
  <PricingBoxes {pricingPlans} />
</div>
