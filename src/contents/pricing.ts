import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helpers";

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

export const otherPlans = [
  {
    title: "Pro Open Source",
    paragraphs: [
      "If you're a professional open-source developer and need more hours, you can apply to our free Professional Open Source plan.",
      "Get free, <strong>unlimited hours</strong> on any <strong>public repository</strong> when you meet the <a href='/docs/professional-open-source#who-is-eligible'>requirements.</a>",
    ],
    btnText: "Apply now",
    btnHref: "/contact/support?open-source-sponsorship",
    trackingName: "pro-open-source",
  },
  {
    title: "Gitpod for Startups",
    paragraphs: [
      "Our startup program gives <a href='/for/startups'>eligible</a> startups up to 2 years of Gitpod for free, no matter how fast your developers and workloads scale. Spend less time worrying about brittle, local dev environments and more time on building great things.",
    ],
    btnText: "View Startups Program",
    btnHref: "/for/startups",
    trackingName: "gitpod-for-startups",
  },
  {
    title: "Self Hosted",
    paragraphs: [
      "Gitpod self-hosted is the best solution for teams who want to keep full data control or use Gitpod in private networks.",
      "Install Gitpod Self-Hosted on <strong>GKE</strong>, <strong>K3s</strong>, <strong>EKS</strong> or <strong>AKS</strong>.",
    ],
    btnText: "More about Self-Hosted",
    btnHref: "/self-hosted",
    trackingName: "self-hosted",
  },
  {
    title: "Student",
    paragraphs: [
      `For those still learning the ropes, you can get our Unleashed Plan for <strong>${
        isEurope() ? "€8" : "$9"
      } per month.</strong>`,
      `
      To get it, just follow these steps:
      <ul class="list-disc list-inside">
      <li>Log-in with a free Gitpod account.</li>
      <li>Make sure that the primary email address of the GitHub/GitLab/Bitbucket account you use in Gitpod is from a domain of your educational institution.</li>
      <li>Go to the <a href="https://gitpod.io/plans">Plans</a> page and select the <em>Student Unlimited Plan</em>.</li>
      <li>If it doesn't appear, please <a href="/contact/support">contact us</a> to register your educational email domain.</li>
      </ul>`,
    ],
    btnText: "Check now",
    btnHref: "https://gitpod.io/plans",
    trackingName: "student",
  },
];
