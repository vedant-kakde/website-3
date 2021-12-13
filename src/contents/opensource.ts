import type { Feature } from "../types/feature.type";
import type { Quote } from "../types/quote.type";
// @ts-ignore
import Workspaces from "../components/workspaces.svelte";
import { linuxSource } from "./terminal";
import type { Resource } from "../types/resource.type";

export const quotes: Quote[] = [
  {
    text: "Gitpod helps onboard new contributors to my open-source project in seconds and removes any issues related to configurations of dev environments",
    author: "xyz",
    jobTitle: "Chief Engineer @xyz",
    companyLogo: {
      src: "/svg/opensource/gitlab.svg",
      alt: "GitLab",
    },
    img: {
      src: "/images/opensource/4-geeks.png",
      alt: "",
    },
  },
  {
    text: "TBD...",
    author: "xyz",
    jobTitle: "Chief Engineer @xyz",
    companyLogo: {
      src: "/svg/opensource/gitlab.svg",
      alt: "GitLab",
    },
    img: {
      src: "/images/opensource/4-geeks.png",
      alt: "",
    },
  },
  {
    text: "Gitpod helps onboard new contributors to my open-source project in seconds and removes any issues related to configurations of dev environments",
    author: "xyz",
    jobTitle: "Chief Engineer @xyz",
    companyLogo: {
      src: "/svg/opensource/gitlab.svg",
      alt: "GitLab",
    },
    img: {
      src: "/images/opensource/4-geeks.png",
      alt: "",
    },
  },
  {
    text: "Gitpod helps onboard new contributors to my open-source project in seconds and removes any issues related to configurations of dev environments",
    author: "xyz",
    jobTitle: "Chief Engineer @xyz",
    companyLogo: {
      src: "/svg/opensource/gitlab.svg",
      alt: "GitLab",
    },
    img: {
      src: "/images/opensource/4-geeks.png",
      alt: "",
    },
  },
  {
    text: "Gitpod helps onboard new contributors to my open-source project in seconds and removes any issues related to configurations of dev environments",
    author: "xyz",
    jobTitle: "Chief Engineer @xyz",
    companyLogo: {
      src: "/svg/opensource/gitlab.svg",
      alt: "GitLab",
    },
    img: {
      src: "/images/opensource/4-geeks.png",
      alt: "",
    },
  },
  {
    text: "Gitpod helps onboard new contributors to my open-source project in seconds and removes any issues related to configurations of dev environments",
    author: "xyz",
    jobTitle: "Chief Engineer @xyz",
    companyLogo: {
      src: "/svg/opensource/gitlab.svg",
      alt: "GitLab",
    },
    img: {
      src: "/images/opensource/4-geeks.png",
      alt: "",
    },
  },
];

export const onboardContributorsFeature: Feature = {
  title: "Onboard contributors in seconds",
  paragraph:
    "Often the problem with building a community of contributors is the project setup friction. With Gitpod, people will be able to contribute to your project with a single click. Tedious environment setups, contributing guides and maintenance activities no long exist.",
  previewComponent: Workspaces,
};

export const acceptContributorsSafely: Feature = {
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
};

export const programBenefits: Resource[] = [
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
    text: "TBD...",
  },
];

export const resources: Resource[] = [
  {
    icon: {
      src: "/svg/opensource/openvsx.svg",
      alt: "Open VSX Registry",
    },
    title: "Open VSX Registry",
    text: "A marketplace for open-source VS Code extensions that can be used for any compatible editor and is natively integrated into Gitpod.",
    link: {
      href: "https://github.com/eclipse/openvsx",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/open-vscode.svg",
      alt: "OpenVS Code",
    },
    title: "OpenVS Code",
    text: "A marketplace for open-source VS Code extensions that can be used for any compatible editor and is natively integrated into Gitpod.",
    link: {
      href: "https://github.com/eclipse/openvsx",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/openvsx.svg",
      alt: "Open VSX Registry",
    },
    title: "Open VSX Registry",
    text: "A marketplace for open-source VS Code extensions that can be used for any compatible editor and is natively integrated into Gitpod.",
    link: {
      href: "https://github.com/eclipse/openvsx",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/openvsx.svg",
      alt: "Open VSX Registry",
    },
    title: "Open VSX Registry",
    text: "A marketplace for open-source VS Code extensions that can be used for any compatible editor and is natively integrated into Gitpod.",
    link: {
      href: "https://github.com/eclipse/openvsx",
      text: "View on GitHub",
    },
  },
  {
    icon: {
      src: "/svg/opensource/openvsx.svg",
      alt: "Open VSX Registry",
    },
    title: "Open VSX Registry",
    text: "A marketplace for open-source VS Code extensions that can be used for any compatible editor and is natively integrated into Gitpod.",
    link: {
      href: "https://github.com/eclipse/openvsx",
      text: "View on GitHub",
    },
  },
];
