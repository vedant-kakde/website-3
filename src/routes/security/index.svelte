<script context="module">
  export const prerender = true;
</script>

<script>
  import Secure from "../../components/security/secure.svelte";
  import Program from "../../components/security/program.svelte";
  import CallToAction from "../../components/security/call-to-action.svelte";
  import Report from "../../components/security/report.svelte";
  import OpenGraph from "../../components/open-graph.svelte";
  import UsedBy from "../../components/index/used-by.svelte";
</script>

<OpenGraph
  data={{
    description: "Does Gitpod encrypt data?",
    title: "Security",
  }}
/>

<header class="tight">
  <h1>Security at Gitpod</h1>
  <p class="max-w-2xl mx-auto mb-medium">
    Gitpod is trusted by over 500k developers and companies that are moving
    their dev environments to the cloud.
  </p>
  <a href="/contact/support" class="btn btn-primary">Talk to an expert</a>
</header>
<UsedBy title="Trusted by developer led companies" />
<Secure />
<Program />
<CallToAction />
<Report />
