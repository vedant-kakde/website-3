import type { Feature } from "../types/feature.type";
import type { Quote } from "../types/quote.type";
// @ts-ignore
import Workspaces from "../components/workspaces.svelte";
import { linuxSource } from "./terminal";
import type { Card } from "../types/card.type";
import type { ExploreSection } from "../types/explore-section.type";
import {
  codeAnywhereFeature,
  multiTrackDevelopmentFeature,
} from "./home/features";

export const quotes: Quote[] = [
  {
    text: "I'm using Gitpod almost daily when trying out new technologies, working on OSS PRs/repros or when giving demos. Welcome to the promised land of cloud IDEs.",
    author: "Johannes Schickling",
    jobTitle: "Co-founder of Prisma",
    companyLogo: {
      src: "/svg/opensource/prisma.svg",
      alt: "Prisma",
    },
    img: {
      src: "/images/opensource/4-geeks.png",
      alt: "",
    },
  },
  {
    text: `With Gitpod, I can review at any pull request in a full coding environment where I can edit, build, and test the contribution, by just prepending "http://gitpod.io#". Gitpod makes the pull-request review process so much nicer for me and I no longer have to do any local checkouts.`,
    author: "Julius Volz",
    jobTitle: "Co-founder of Prometheus",
    companyLogo: {
      src: "/svg/opensource/prometheus.svg",
      alt: "Prometheus",
    },
    img: {
      src: "/images/opensource/4-geeks.png",
      alt: "",
    },
  },
  {
    text: "Gitpod totally changed the development velocity for RedwoodJS—it removed any issues related to configurations of dev environments and made it incredibly easy to contribute. Reviewing pull requests is delightful because they are prebuilt and ready for review!",
    author: "Tom Preston-Werner",
    jobTitle: "Co-founder RedwoodJS",
    companyLogo: {
      src: "/svg/opensource/redwood.svg",
      alt: "RedwoodJS",
    },
    img: {
      src: "/images/opensource/4-geeks.png",
      alt: "",
    },
  },
];

export const features: Feature[] = [
  {
    title: "Onboard contributors in seconds",
    paragraph:
      "Often the problem with building a community of contributors is the project setup friction. With Gitpod, people will be able to contribute to your project with a single click. Tedious environment setups, contributing guides and maintenance activities no long exist.",
    previewComponent: Workspaces,
  },
  {
    ...codeAnywhereFeature,
    paragraph:
      "Often the problem with building a community of contributors is the project setup friction. With Gitpod, people will be able to contribute to your project with a single click. Tedious environment setups, contributing guides and maintenance activities no long exist.",
  },
  {
    ...multiTrackDevelopmentFeature,
    paragraph:
      "You can have multiple workspaces running at the same time. Start your day by opening one workspace per pull-request needs reviewing. Thanks to pre-builds they are already compiled and ready to go.",
  },
  {
    title: "Accept contributions safely",
    paragraph:
      "With Gitpod, no packages or dependencies are downloaded to onto your devices which contains security incidents and inhibits malicious actors pivoting towards completely compromising your workstation.",
    terminal: {
      source: linuxSource,
      dark: true,
      shadow: false,
      narrow: true,
      skipToEnd: true,
    },
  },
];

export const programBenefits: Card[] = [
  {
    icon: {
      src: "/svg/media-kit/logo-mark.svg",
      alt: "Gitpod",
      transform: "scale(.95)",
    },
    title: "Gitpod for free",
    text: "Maintainers get free unlimited hours for pulibic repos. Contributors to your project are provided with generous free plan for up to 50h a month, including private repos.",
  },
  {
    icon: {
      src: "/svg/heart.svg",
      alt: "Special treats",
      transform: "scale(0.8)",
    },
    title: "Special treats",
    text: "If your open-source software appears in our bill of materials then Gitpod would like to unconditionally shout you some beers, some nice food or more as our way of saying thank-you.",
  },
  {
    icon: {
      src: "/svg/contact/sales.svg",
      alt: "Personal onboarding",
      transform: "scale(1.6) translateY(3px)",
    },
    title: "Personal onboarding",
    text: "We help to get you started and provide support for maintaining the gitpod.yml and gitpod.Dockerfile. You are important to us and we will provide white glove service to you!",
  },
];

export const faqs = [
  {
    title: "I'm not sure if I qualify for the program?",
    text: "If you produce software that is relied upon by everyday developers (which if we are honest, is the digital infrastructure that powers the world) then you are in. Fill in the application form and let us decide.",
  },
  {
    title: "I'm not eligible but still want to use Gitpod",
    text: "We have a very generous <a href='/pricing'>free plan</a> for up to 50h a month, including private repos.",
  },
];

export const cards: Card[] = [
  {
    icon: {
      src: "/svg/opensource/openvsx.svg",
      alt: "Open VSX Registry",
    },
    title: "Open VSX Registry",
    text: "A marketplace for open-source VS Code extensions that can be used for any compatible editor.",
    link: {
      href: "https://github.com/eclipse/openvsx",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/leeway.svg",
      alt: "Leeway",
    },
    title: "Leeway",
    text: "Leeway is a heavily caching build system for Go, Yarn and Docker projects.",
    link: {
      href: "https://github.com/gitpod-io/leeway",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/theia.svg",
      alt: "Theia",
    },
    title: "Theia",
    text: "An extensible framework to develop full-fledged multi-language Cloud & Desktop IDEs.",
    link: {
      href: "https://github.com/eclipse-theia/theia",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/open-vscode.svg",
      alt: "OpenVS Code",
      transform: "scale(1.5)",
    },
    title: "OpenVS Code",
    text: "A version of VS Code that runs a server on a remote machine and allows access through a modern web browser.",
    link: {
      href: "https://github.com/gitpod-io/openvscode-server",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/dazzle.svg",
      alt: "Dazzle",
    },
    title: "Dazzle",
    text: 'An Docker/OCI image builder to build independent layers where a change to one layer does not invalidate the ones sitting "above" it.',
    link: {
      href: "https://github.com/gitpod-io/dazzle/",
      text: "View on GitHub",
    },
  },
];

export const exploreContents: ExploreSection = {
  title: "Apply Now",
  description:
    "Spend less time reviewing pull-requests, onboarding contributors and more time on building great things.",
  note: "Get a free Open-Source Plan.",
  link: { text: "Apply Now", href: "" }, // todo
  useKumquatIllustration: true,
};
