import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helpers";

export const pricingPlans: Pricing[] = [
  {
    title: "Open Source",
    price: "Free",
    features: [
      "Unlimited Users",
      "Public & Private Repos",
      "GitLab, GitHub and Bitbucket",
    ],
    btnText: "Get the Code",
    btnHref: "https://github.com/gitpod-io/gitpod",
    trackingName: "open-source",
  },
  {
    title: "Small Teams",
    price: "Free",
    features: [
      "10 Users",
      "Public & Private Repos",
      "GitLab, GitHub and Bitbucket",
      "+ Prebuilds",
      "+ Shared Workspaces",
      "+ Snapshots",
      "+ Admin Dashboard",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "free",
  },
  {
    title: "Professional",
    price: isEurope() ? "€29" : "$35",
    duration: "Per User/Month",
    features: ["Everything in Basic", "Starts with the 11th user"],
    btnText: "Request License",
    btnHref: "/enterprise-license",
    spiced: true,
    trackingName: "professional",
  },
];
