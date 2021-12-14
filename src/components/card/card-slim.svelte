<script lang="ts">
  import Base from "./base.svelte";
  import type { Card } from "../../types/card.type";
  export let card: Card;
</script>

<Base
  {card}
  {...$$restProps}
  class="py-small px-x-small rounded-5xl {$$restProps.class}"
  iconClassNames="h-28"
/>
