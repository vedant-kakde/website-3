<script>
  import { benefits } from "../../contents/gitpod-vs-local-development";
  import CardSmall from "../card/card-small.svelte";
</script>

<style lang="postcss">
  header {
    @apply max-w-none !important;
  }

  div {
    grid-template-columns: repeat(auto-fill, 316px);

    @media (max-width: 1460px) {
      @apply max-w-4xl mx-auto;
    }

    @media (max-width: 400px) {
      grid-template-columns: none;
    }
  }
</style>

<header>
  <h1>Gitpod vs local development</h1>
  <p>
    Why should you move your dev environment to the cloud? Here is the answer.
  </p>
  <div class="grid gap-micro justify-center mt-small">
    {#each benefits as benefit}
      <CardSmall card={benefit} />
    {/each}
  </div>
</header>
