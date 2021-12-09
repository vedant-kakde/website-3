<script>
  import Quote from "./quote.svelte";
</script>

<header>
  <h1>Gitpod for Startups</h1>
  <p>
    Spend less time worrying about brittle, local dev environments and more time
    on building great things.
  </p>
  <p
    class="h5 text-gray-900 font-semibold max-w-2xl mx-auto mt-micro mb-x-small"
  >
    Use all our services for free, up to 2 years.
  </p>
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSc-Vaelz0yG-XkuN2CYyUtZz0khhwMaju4oSLdMNIzoMkpHug/viewform"
    on:click={() =>
      window.analytics.track("startup_application_opened", {
        context: "hero",
      })}
    target="_blank"
    class="btn-conversion">Apply now</a
  >
  <Quote />
</header>
