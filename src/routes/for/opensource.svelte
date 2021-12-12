<script>
  import Header from "../../components/opensource/header.svelte";
  import {
    onboardContributorsFeature,
    acceptContributorsSafely,
    secondaryFeatures,
  } from "../../contents/opensource";
  import {
    codeAnywhereFeature,
    multiTrackDevelopmentFeature,
  } from "../../contents/home/features";
  import SectionFeatures from "../../components/section-features.svelte";
  import ProgramBenefits from "../../components/program-benefits.svelte";
  import Eligibility from "../../components/eligibility.svelte";
  import Faqs from "../../components/opensource/faqs.svelte";
</script>

<Header />

<SectionFeatures
  title="Be always ready-to-code"
  text="Spin up fresh, automated dev environments for each task, in the cloud, in
  seconds."
  features={[
    onboardContributorsFeature,
    codeAnywhereFeature,
    multiTrackDevelopmentFeature,
    acceptContributorsSafely,
  ]}
/>

<ProgramBenefits {secondaryFeatures} />

<Eligibility
  text="To qualify for Gitpod’s startup program, need to meet one of these criteria:"
  list={[
    "You are a maintainer, core contributor to a well-established open-source project.",
    "You regularly contribute to open source communities in other ways (e.g. producing regular content like blog posts, videos, live streams, translations, or organizing meet-ups, conferences, hackathons, etc).",
    "You are an author, core contributor of extensions for editors such as VSCode, VIM, eMacs, et al. or of developer tools such as build systems, programming languages, compilers, and editor tooling such as Language Server Protocol (LSP) implementations.",
    "A significant part of your income is from maintaining or producing open source work.",
  ]}
  link={{ href: "", text: "Apply now" }}
  ulMaxWidth="720px"
/>

<Faqs />
