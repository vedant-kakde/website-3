<script>
  import { quotes } from "../../contents/opensource";
  import Quotes from "../quotes.svelte";
</script>

<style>
  header {
    max-width: 1000px !important;
  }
</style>

<header>
  <h1>Gitpod for Open Source</h1>
  <p class="max-w-4xl m-auto">
    Spend less time reviewing pull-requests, on-boarding contributors and more
    time on building great things. <strong>Get a free Open-Source Plan.</strong>
  </p>
  <a href="/contact/support" class="btn-conversion mt-x-small mb-medium"
    >Apply now</a
  >
  <Quotes {quotes} />
</header>
