import type { Feature } from "../../types/feature.type";
import type { Card } from "../../types/card.type";

export const primaryCtas: Card[] = [
  {
    icon: {
      src: "/svg/community/discord.svg",
    },
    title: "Discord Chat",
    text: "Hang out, collaborate and connect with the Gitpod community, take part in live coding sessions and more!",
    link: {
      href: "https://www.gitpod.io/chat",
      text: "Join Discord",
    },
  },
  {
    icon: {
      src: "/svg/community/twitter.svg",
    },
    title: "Twitter",
    text: "Stay up to date on the latest Gitpod news and help us spread the Gitpod love.",
    link: {
      href: "https://twitter.com/gitpod",
      text: "Follow on Twitter",
    },
  },
  {
    icon: {
      src: "/svg/community/github.svg",
    },
    title: "GitHub",
    text: "Do you want to contribute to Gitpod? Or need to report a bug?",
    link: {
      href: "https://github.com/gitpod-io/",
      text: "Go to GitHub",
    },
  },
  {
    icon: {
      src: "/svg/community/youtube.svg",
    },
    title: "YouTube",
    text: "Prefer watching videos and previous livestreams to learn about Gitpod?",
    link: {
      href: "https://www.youtube.com/c/Gitpod",
      text: "Go to YouTube",
    },
  },
  {
    icon: {
      src: "/svg/community/reddit.svg",
    },
    title: "Reddit",
    text: " Do you have Gitpod content that you'd like to share?",
    link: {
      href: "https://www.reddit.com/r/gitpod/",
      text: "Go to Reddit",
    },
  },
];

export const contributeToGitpod: Feature = {
  title: "Contribute to Gitpod",
  paragraph:
    "Gitpod’s source code is open-source and we are more than happy to receive community contributions. The best way to get started is to head over to GitHub and to pick an issue labeled with <code>good-first-issue</code>.",
  moreButton: {
    href: "https://github.com/gitpod-io/gitpod/",
    text: "Contribute to Gitpod",
  },
  secondaryButton: {
    href: "https://github.com/gitpod-io/website/",
    text: "Contribute to website",
  },
  image: {
    src: "/images/community/contribute-to-gitpod.png",
    alt: "Gitpod's GitHub Repo README.md and the Open Issues",
  },
};

export const letsCollaborateActions: Card[] = [
  {
    title: "Author a blog post",
    text: "Do you have a cool story to share related to Gitpod? Publish a guest post on our blog.",
    link: {
      href: "https://github.com/gitpod-io/website/issues/new/choose ",
      text: "Open a PR",
    },
  },
  {
    title: "Publish a guide",
    text: "Do you have a project integration guide to share? Share it with the community on guides.",
    link: {
      href: "https://github.com/gitpod-io/website/issues/new/choose",
      text: "Open a PR",
    },
  },
  {
    title: "Join affiliate program",
    text: "Do you have some reach and regulary convince people about using Gitpod? Let’s discuss a collaboration.",
    link: {
      href: "/contact/support",
      text: "Get in contact",
    },
  },
];
