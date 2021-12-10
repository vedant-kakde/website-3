<script lang="ts">
  import { faqs } from "../../contents/startups";
  import Faq from "../faqs/faq.svelte";
  import Faqs from "../faqs/faqs.svelte";
  import Section from "../section.svelte";
</script>

<Section>
  <h2 class="text-center mb-small">FAQs</h2>
  <Faqs>
    {#each faqs as f}
      <Faq title={f.title}>
        {@html f.text}
      </Faq>
    {/each}
  </Faqs>
</Section>
