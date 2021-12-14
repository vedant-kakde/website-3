<script lang="ts">
  import Section from "../section.svelte";
  import { benefits } from "../../contents/community/hereos";
  import CardSmall from "../card/card-small.svelte";
</script>

<style lang="postcss">
  div {
    max-width: 980px;
    grid-template-columns: repeat(auto-fill, 316px);

    @media (max-width: 400px) {
      grid-template-columns: none;
    }
  }
</style>

<Section class="text-center">
  <h2>Your benefits</h2>
  <p class="text-large max-w-4xl mx-auto">
    This is not a paid position, but in exchange for contributing to Gitpod, you
    will get access to some great and exclusive rewards and perks.
  </p>
  <div class="grid gap-micro justify-center mx-auto mt-small">
    {#each benefits as benefit}
      <CardSmall card={benefit} />
    {/each}
  </div>
</Section>
