<script lang="ts">
  import type { Card } from "../types/card.type";
  import Resources from "./resources.svelte";
  import SectionCommon from "./section-common.svelte";
  export let title = "Program benefits";
  export let text: string = "";
  export let cards: Card[];
</script>

<SectionCommon {title} {text}>
  <Resources {cards} slot="content" />
</SectionCommon>
