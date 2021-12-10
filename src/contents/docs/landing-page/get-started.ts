import type { GetStartedItem } from "../../../types/get-started.type";

export const getStartedItems: GetStartedItem[] = [
  {
    buttonLabel: "Start reading",
    description: "Learn about Gitpod by reading our docs.",
    icon: {
      path: "/svg/docs/landing-page/docs.svg",
      transform: "scale(1)",
    },
    path: "/docs/getting-started",
    title: "Read docs",
  },
  {
    buttonLabel: "Start watching",
    description: "Learn about Gitpod by watching our screencasts.",
    icon: {
      path: "/svg/docs/landing-page/video.svg",
      transform: "scale(1)",
    },
    path: "/screencasts",
    title: "Watch video",
  },
  {
    buttonLabel: "Start exploring",
    description: "Learn about Gitpod by opening a template",
    icon: {
      path: "/svg/docs/landing-page/quickstart.svg",
      transform: "scale(1.5)",
    },
    path: "/docs/quickstart",
    title: "Use Quickstart",
  },
];
