import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helpers";
import type { Resource } from "../types/resource.type";

export const pricingPlans: Pricing[] = [
  {
    title: "Basic",
    price: "Free",
    features: [
      "50 hours/month",
      "Public & private repos",
      "4 parallel workspaces",
      "30min inactivity timeout",
    ],
    btnText: "Try Now",
    btnHref: "/#get-started",
    trackingName: "free",
  },
  {
    title: "Personal",
    price: isEurope() ? "€8" : "$9",
    duration: "per user/month",
    features: ["All in Basic", "100 hours/month"],
    btnText: "Choose plan",
    btnHref: "https://gitpod.io/plans",
    trackingName: "personal",
  },
  {
    title: "Professional",
    price: isEurope() ? "€23" : "$25",
    duration: "per user/month",
    features: [
      "All in Personal",
      "Unlimited hours",
      "8 parallel workspaces",
      "Team Plans",
    ],
    btnText: "Choose plan",
    btnHref: "https://gitpod.io/plans",
    spiced: true,
    trackingName: "professional",
  },
  {
    title: "Unleashed",
    price: isEurope() ? "€35" : "$39",
    duration: "per user/month",
    features: [
      "All in Professional",
      "16 parallel workspaces",
      "1hr inactivity imeout",
      "3hr timeout boost",
    ],
    btnText: "Choose plan",
    btnHref: "https://gitpod.io/plans",
    trackingName: "unleashed",
  },
];

export const empowermentFeatures: Resource[] = [
  {
    title: "Pro OSS developers",
    text: "Professional open-source developers, can apply to our free Professional Open Source Plan.",
    link: {
      text: "View requirements",
      href: "/contact/support?open-source-sponsorship",
    },
  },
  {
    title: "Startups",
    text: "Startups can get up to 2 years of Gitpod for free, no matter how fast your developers and workloads scale.",
    link: {
      text: "View Startups Program",
      href: "/for/startups",
    },
  },
  {
    title: "Students & teachers",
    text: "For those still learning the ropes, you can get our Unleashed Plan for <strong>€8 per month</strong> instead of €36/month.",
    link: {
      text: "Redeem offer",
      href: "/education", // todo: this is gonna op en up the redeem student offer pop-up.
    },
  },
];
