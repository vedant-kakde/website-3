<script lang="ts">
  import Base from "./base.svelte";
  import type { Card } from "../../types/card.type";
  export let card: Card;
</script>

<Base
  {card}
  {...$$restProps}
  class="p-x-small rounded-2xl {$$restProps.class}"
  titleClassNames="h5"
  styles="max-width: 315px"
/>
