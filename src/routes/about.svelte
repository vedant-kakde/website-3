<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Explore from "../components/explore.svelte";
  import LogoAnimated from "../components/logo-animated.svelte";
  import OpenGraph from "../components/open-graph.svelte";
</script>

<style>
  .cardlike a {
    padding: 1.5rem;
  }
</style>

<OpenGraph
  data={{
    description: "On a mission to make developers' lives easier!",
    title: "About Gitpod",
  }}
/>

<header class="tight">
  <h1 class="sr-only">Gitpod</h1>
  <LogoAnimated center={true} iterations={1} />
  <p>
    Open source developer platform. Originally from Kiel now fully-remote from
    all around the globe.
  </p>
</header>

<div class="hilited redirector">
  <h2 class="h4">
    Remove all friction from the developer experience to be always ready-to-code
    and make software engineering more collaborative, joyful, and secure.
  </h2>
</div>

<ul class="imageCarousel">
  <li>
    <img
      src="/images/about/team-2.jpg"
      alt="A female Gitpod team member"
      height="310"
      width="310"
    />
  </li>
  <li>
    <img
      src="/images/about/team-3.jpg"
      alt="A laptop and office chair in a tent"
      height="310"
      width="310"
      role="presentation"
    />
  </li>
  <li>
    <img
      src="/images/about/about-6.png"
      alt="Gitpod team members on the beach"
      height="310"
      width="310"
      role="presentation"
    />
  </li>
  <li>
    <img
      src="/images/about/about-5.png"
      alt="4 kumquats on a table"
      height="310"
      width="310"
    />
  </li>
</ul>

<div class="redirector">
  <h2>Obsessed with developer experience</h2>
  <p>
    We have built developer tools, created programming languages and
    successfully grew open source communities over the last 10 years. We are
    developers ourselves - with Gitpod we want to capitalize on our learnings
    and build a company that simplifies the lives of all developers. Experienced
    international investors support us on our journey. We are a fully
    distributed team with humans from all over the world.
  </p>
  <p>
    <a
      class="btn-otherbrand"
      href="https://www.gitpod.io/direction"
      target="_blank"
      rel="noopener"
      ><span class="icon">🗺️</span>
      <img class="arrow" src="/svg/external.svg" alt="External" />Gitpod's
      Direction</a
    >
    <a
      class="btn-otherbrand"
      href="https://www.gitpod.io/roadmap"
      target="_blank"
      rel="noopener"
      ><span class="icon">🛣</span>
      <img class="arrow" src="/svg/external.svg" alt="External" /> Gitpod's Roadmap</a
    >
  </p>
</div>

<div class="redirector">
  <h2>Built on shared principles</h2>
  <p>
    Values are important to us. We are developer-led and aim for a frictionless
    experience when interacting with our product, our company and our brand: no
    hurdles, no BS, no unnecessary extra steps. We believe in the benefits of an
    open culture. We are open minded, inclusive, transparent and curious. We
    always remain students of the game, not masters of the game. We have
    opinions, but are not opinionated. We integrate, don't dictate.
  </p>
  <p>
    <a
      class="btn-otherbrand"
      href="https://www.gitpod.io/values"
      target="_blank"
      rel="noopener"
      ><span class="icon">✨</span>
      <img class="arrow" src="/svg/external.svg" alt="External" /> Brand &amp; Values</a
    >
  </p>
</div>

<div class="redirector">
  <h2>Backed by great investors</h2>
  <p>
    Gitpod Inc. was founded in 2020 and in early 2021 we raised $13m from
    General Catalyst and our early backers Speedinvest, Crane and Vertex. We are
    proud to work with experienced, international investors and great
    individuals who have been early backers of <span class="othercompanies"
      ><span>SignalFX</span>, <span>Cloudera</span>, <span>Couchbase</span>,
      <span>Snyk</span>, <span>Render</span>, <span>BuildKite</span>,
      <span>LaunchDarkly</span>, <span>H20</span>, <span>Hasura</span>,
      <span>Instana</span></span
    >, and several other exciting companies in the world of developer tools and
    open source software.
    <!--
    {#each investors as investor}
      <div>
        <img
          src={investor.logo}
          alt="{investor.name} logo"
          height={investor.imgHeight}
          width={investor.imgWidth}
        />
        <p><strong>{investor.name}</strong></p>
        <p>{investor.description}</p>
      </div>
    {/each} -->
  </p>
</div>

<div class="redirector">
  <h2>Find out more. We are open</h2>
  <p>
    We have always built in the open. If you want to learn skim through some of
    our public Notion pages.
  </p>
  <p>
    <a
      class="btn-otherbrand"
      href="https://www.notion.so/gitpod/How-we-work-0f9159f282d24f9d9776372e0c7dbab4"
      target="_blank"
      rel="noopener"
      ><span class="icon">💻</span>
      <img class="arrow" src="/svg/external.svg" alt="External" />How we work</a
    >
    <a
      class="btn-otherbrand"
      href="https://www.notion.so/gitpod/Architecture-0e39e570b10f4e8ba7b259629ee3cb74"
      target="_blank"
      rel="noopener"
      ><span class="icon">🏗</span>
      <img class="arrow" src="/svg/external.svg" alt="External" /> Architecture</a
    >
  </p>
</div>

<Explore
  contents={{
    title: "We have open positions",
    description: "Come join us.",
    link: {
      text: "See openings",
      href: "https://www.gitpod.io/careers",
    },
  }}
/>

<div class="redirector header">
  <h2>Gitpod in the news</h2>
  <ul class="cardlike flex flex-row flex-wrap justify-center mt-x-small">
    <li>
      <a
        href="https://www.theregister.com/2020/08/25/gitpod_open_sources_cloud_development_platform/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/about/TheRegister.svg"
          alt="The Register"
          height="40"
          width=""
        />
      </a>
    </li>
    <li>
      <a
        href="https://www.infoq.com/articles/cloud-based-development/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/about/InfoQ.svg" alt="Info Q" height="40" width="" />
      </a>
    </li>
    <li>
      <a
        href="https://devops.com/gitpod-open-sources-automated-local-development-environment/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/about/DevOpsDotCom.svg"
          alt="DevOps.com"
          height="40"
          width=""
        />
      </a>
    </li>
    <li>
      <a
        href="https://thenewstack.io/gitpod-open-sources-a-holistic-ide/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/about/TheNewStack.svg"
          alt="The New Stack"
          height="40"
          width=""
        />
      </a>
    </li>
  </ul>
</div>
