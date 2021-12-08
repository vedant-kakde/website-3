<script>
  import { primaryCtas } from "../../contents/community/index";
  import Resource from "../resource.svelte";
</script>

<style lang="postcss">
  header {
    @apply max-w-none !important;
  }
</style>

<header>
  <h1>Community</h1>
  <p class="max-w-3xl mx-auto md:px-micro">
    Welcome! Our community is at the centre of everything at Gitpod. We're
    excited to have you join us 🧡
  </p>
  <div class="flex flex-wrap justify-around mt-small max-w-7xl mx-auto">
    {#each primaryCtas as resource}
      <Resource {resource} />
    {/each}
  </div>
</header>
