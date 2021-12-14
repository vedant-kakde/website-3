<script>
  import { primaryCtas as cards } from "../../contents/community/index";
  import Resources from "../resources.svelte";
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
  <Resources {cards} />
</header>
