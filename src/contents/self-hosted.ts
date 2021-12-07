import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helpers";

export const pricingPlans: Pricing[] = [
  {
    title: "Basic",
    price: "Free",
    features: [
      "10 registered users",
      "Public & private repos",
      "Admin dashboard",
      "GitLab, GitHub and Bitbucket",
      "Unlimited Prebuilds",
      "Shared Workspaces",
      "Snapshots",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "free",
  },
  {
    title: "Professional",
    price: isEurope() ? "€29" : "$35",
    duration: "per user/month",
    features: ["All in Basic", "Starts with the 11th user"],
    btnText: "Contact Sales",
    btnHref: "/enterprise-license",
    spiced: true,
    trackingName: "professional",
  },
];
