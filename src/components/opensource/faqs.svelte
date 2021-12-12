<script lang="ts">
  import { faqs } from "../../contents/opensource";
  import Faq from "../faqs/faq.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Section from "../section.svelte";
  const trackingContext = "general";
</script>

<Section>
  <h2 class="text-center mb-small">FAQs</h2>
  <Faqs>
    {#each faqs as f}
      <Faq title={f.title} {trackingContext}>
        {@html f.text}
      </Faq>
    {/each}
  </Faqs>
</Section>
