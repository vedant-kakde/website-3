<script context="module">
  export const prerender = true;
</script>

<script>
  import CalloutSecondary from "../components/callout-secondary.svelte";
  import OpenGraph from "../components/open-graph.svelte";
</script>

<style lang="postcss">
  .featureTable + p {
    margin: auto;
    max-width: 60%;
  }
  .featureTable > * > * {
    grid-auto-rows: 3rem;
  }
  .featureTable .toc li {
    font-weight: 700;
    margin-bottom: 1rem;
    padding-left: 2.175rem;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .featureTable .card {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  .featureTable .card-heading {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .featureTable .toc img {
    width: 24px;
  }
  .featureTable [aria-label] {
    min-height: 1.5rem;
    min-width: 1.5rem;
  }
  .ticklist > li {
    display: flex;
    align-items: flex-start;
  }
  .ticklist > li > img {
    width: 24px;
    @apply mr-micro ml-0;
  }
  .max-w-30rem {
    @apply lgx:max-w-lg;
  }
  .mt-1rem {
    margin-top: 1rem;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .p-4rem {
    padding: 4rem;
  }
  .card-image-legend {
    @apply mt-x-small mb-small max-w-md mx-auto;
    font-size: 12px;
    align-self: stretch;
  }
  .halfimages .card,
  .cards {
    justify-content: space-between;
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
    border-radius: 2rem;
  }

  .cards.double {
    @apply space-x-small;
  }

  @media (max-width: 1140px) {
    .cards.double {
      @apply space-x-0 flex-col !important;
    }

    .card-image-legend {
      @apply mb-0;
    }

    .halfimages article {
      @apply flex-col px-small !important;
    }

    .halfimages img {
      @apply mx-auto;
    }

    .halfimages article:last-of-type {
      @apply flex-col-reverse !important;
    }

    .text-box {
      @apply mb-small !important;
    }

    .text-box p {
      @apply mb-0;
    }

    .text-box a {
      @apply mt-x-small;
    }

    .halfimages article > div,
    .cards.double > div {
      @apply flex-1;
    }
  }

  @media (max-width: 799px) {
    .halfimages article:first-of-type {
      @apply flex-col-reverse !important;
    }
    .halfimages article {
      @apply max-w-full !important;
    }
    .cards.double {
      @apply max-w-none;
    }
  }

  .text-center {
    text-align: center;
  }
</style>

<OpenGraph
  data={{
    description:
      "Gitpod is the faster, more powerful, open-source platform that integrates with your individual stack.",
    title: "Gitpod vs GitHub Codespaces",
  }}
/>
<header class="tight">
  <h1>Gitpod vs GitHub Codespaces</h1>
  <p>
    Gitpod is the faster, more resource-efficient, open-source platform that
    integrates with your individual stack.
  </p>
</header>
<div class="halfimages">
  <article class="card">
    <div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src="/images/codespace/spaces-1.svg" role="presentation" />
      <p class="card-image-legend">
        Compared start-up time until ready-to-code for<br />
        <a
          href="https://github.com/gitpod-io/vscode"
          target="_blank"
          on:click={() =>
            window.analytics.track("external_resource_clicked", {
              name: "vscode-repo",
              url: "https://github.com/gitpod-io/vscode",
              context: "body",
            })}
        >
          <strong>https://github.com/gitpod-io/vscode</strong>
        </a>. Last verified 25 Sep 2020.
      </p>
    </div>
    <div class="text-box">
      <h2 class="max-w-30rem">Ready in a flash</h2>
      <p class="text-large max-w-30rem grow">
        Gitpod removes long init and build times by continuously pre-building
        workspaces for your project. Thereby it allows you to start coding or
        debugging immediately, from any context, at any time.
      </p>
      <a href="/docs/prebuilds" class="btn-secondary">More about Prebuilds.</a>
    </div>
  </article>

  <article class="card">
    <div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/images/codespace/spaces-2.svg"
        role="presentation"
        width="550"
        height="414"
      />
      <p class="card-image-legend">
        Price comparison for a developer working 5h per day, 21 per month with 8
        core CPUs and 12GB RAM. Last verified 3 Sep 2021. Sources: <a
          href="/pricing"><strong>Gitpod</strong></a
        >,
        <a
          href="https://github.com/features/codespaces"
          on:click={() =>
            window.analytics.track("external_resource_clicked", {
              name: "codespaces-resources",
              url: "https://github.com/features/codespaces",
              context: "body",
            })}
          target="_blank"
        >
          <strong>GitHub Codespaces</strong>
        </a>.
      </p>
    </div>
    <div class="text-box">
      <h2 class="max-w-30rem">Resource Efficient</h2>
      <p class="text-large max-w-30rem">
        Instead of running on expensive VMs, Gitpod provisions secure containers
        and achieves best-in-class resource-efficiency with scalable workspaces
        running on shared high-powered cloud servers. <a
          href="https://www.researchgate.net/publication/333096446_Reduced_carbon_emission_and_optimized_power_consumption_technique_using_container_over_virtual_machine"
          target="_blank">Helping our planet</a
        > 🌱.
      </p>
    </div>
  </article>
</div>

<div class="featureTable">
  <section class="card toc">
    <ul class="tableOfContents" role="presentation">
      <li>Pricing (Hosted)</li>
      <li>Free Tier</li>
      <li>License</li>
      <li>Availability</li>
      <li class="hasIcon">
        <img src="/svg/github.svg" alt="GitHub" width="24" /> GitHub Integration
      </li>

      <li class="hasIcon">
        <img src="/svg/gitlab.svg" alt="GitLab" width="24" />GitLab Integration
      </li>

      <li class="hasIcon">
        <img src="/svg/bitbucket.svg" alt="Bitbucket" width="24" /> Bitbucket Integration
      </li>

      <li class="hasIcon">
        <img src="/svg/brands/gcp.svg" alt="Google Cloud Platform" width="24" />
        Self-Host on GKE
      </li>

      <li class="hasIcon">
        <img
          src="/svg/brands/aws.svg"
          alt="Amazon Web Services"
          width="24"
        />Self-Host on EKS
      </li>
      <li class="hasIcon">
        <img src="/svg/brands/azure.svg" alt="Azure" width="24" />Self-Host on
        AKS
      </li>
      <li class="hasIcon">
        <img
          src="/svg/brands/kubernetes.svg"
          alt="Kubernetes"
          width="24"
        />Self-Host on Kubernetes
      </li>
      <li>Prebuilds</li>
      <li>Snapshots</li>
      <li>VS Code Extensions</li>
      <li>iPad Support</li>
      <li>Virtual Desktop (VNC)</li>
      <li>Desktop VS Code</li>
      <li>Multi-IDE Support</li>
    </ul>
  </section>
  <section class="card alive text-center">
    <h2 class="card-heading">
      <img alt="Gitpod" src="/images/gitpod-logo.svg" width="40" height="36" />
    </h2>
    <dl id="gitpodPricing" class="tableColumn">
      <dt>Pricing (Hosted)</dt>
      <dd>Free for Open-Source</dd>
      <dt>Free Tier</dt>
      <dd>50h per month</dd>
      <dt>License</dt>
      <dd>Open Source</dd>
      <dt>Availability</dt>
      <dd>Everyone</dd>
      <dt>GitHub Integration</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>GitLab Integration</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Bitbucket Integration</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Self-Host on GKE</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Self-Host on EKS</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Self-Host on AKS</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Self-Host on Kubernetes</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Prebuilds</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Snapshots</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>VS Code Extensions</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>iPad Support</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Virtual Desktop (VNC)</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Desktop VS Code</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Multi-IDE Support</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
    </dl>
  </section>
  <section class="card text-center shadow-normal">
    <h2 class="card-heading h5">GitHub<br />Codespaces</h2>
    <dl>
      <dt>Pricing (Hosted)</dt>
      <dd>
        <span aria-label="unknown" class="icon">$$$</span>
      </dd>
      <dt>Free Tier</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>License</dt>
      <dd>Proprietary</dd>
      <dt>Availability</dt>
      <dd>Teams, Enterprise</dd>
      <dt>GitHub Integration</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>GitLab Integration</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Bitbucket Integration</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Self-Host on GKE</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Self-Host on EKS</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Self-Host on AKS</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Self-Host on Kubernetes</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Prebuilds</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>Snapshots</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
      <dt>VS Code Extensions</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>iPad Support</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Virtual Desktop (VNC)</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Desktop VS Code</dt>
      <dd>
        <img alt="Yes" class="mx-auto" height="24" width="24" src="/tick.svg" />
      </dd>
      <dt>Multi-IDE Support</dt>
      <dd>
        <img alt="No" class="mx-auto" height="24" width="24" src="/cross.svg" />
      </dd>
    </dl>
  </section>
</div>
<p>
  <small
    >Disclaimer: All information, prices, and data were last verified on Sept.
    3, 2021. To report any incorrect or outdated information, please <a
      href="/contact/support">contact us.</a
    ></small
  >
</p>

<CalloutSecondary
  title="Ready to feel the difference?"
  text="Spin up an example workspace now, just link your git provider"
/>

<div class="halfimages">
  <article class="card">
    <div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="/images/codespace/spaces-3.svg"
        role="presentation"
        width="550"
      />
    </div>
    <div>
      <h2>Open-Source</h2>
      <p class="text-large">
        Gitpod puts developers' interest first and thereby guarantees full
        transparency and flexibility. Integrate, don't dictate.
      </p>
      <ul class="ticklist">
        <li>
          <img alt="✓" src="/tick.svg" />
          <span
            >Host Gitpod yourself on GKE, EKS, AKS or self-managed Kubernetes</span
          >
        </li>
        <li>
          <img alt="✓" src="/tick.svg" />
          <span>Contribute to Gitpod and build customizations yourself</span>
        </li>
        <li>
          <img alt="✓" src="/tick.svg" />
          <span>Works just as smoothly with GitHub, GitLab and Bitbucket</span>
        </li>
      </ul>
    </div>
  </article>
</div>

<div class="cards double mt-1rem items-stretch">
  <div class="card p-4rem">
    <h2 class="h3">Automation-first</h2>
    <p class="grow">
      Simply add your build command into a .gitpod.yml file and let Gitpod do
      the heavy-lifting. Once you’ve experienced the freedom of ephemeral
      workspaces, you’ll never want to go back to long-lived,
      manually-maintained environments.
    </p>
    <p>
      <a href="/#get-started" class="btn-primary">Try Now</a>
    </p>
  </div>
  <div class="card p-4rem">
    <h2 class="h3">Code in a carbon-neutral workspace</h2>
    <p class="grow">
      Not only is Gitpod more resource-efficient but it also runs on 100%
      carbon-neutral cloud servers (GCP). All the power, with a lower cost to
      our planet.
    </p>
    <p>
      <a
        href="https://cloud.google.com/sustainability"
        on:click={() =>
          window.analytics.track("external_resource_clicked", {
            name: "gcp-sustainability",
            url: "https://cloud.google.com/sustainability",
            context: "body",
          })}
        class="btn-green"
        target="_blank"
        rel="noopener">More on GCP carbon neutral</a
      >
    </p>
  </div>
</div>
