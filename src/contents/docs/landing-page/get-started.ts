import type { GetStartedItem } from "../../../types/get-started.type";

export const getStartedItems: GetStartedItem[] = [
  {
    buttonLabel: "Start reading",
    description: "Learn about Gitpod by reading our docs.",
    icon: "/svg/docs/landing-page/docs.svg",
    path: "/docs/getting-started",
    title: "Read docs",
  },
  {
    buttonLabel: "Start watching",
    description: "Learn about Gitpod by watching our screencasts.",
    icon: "/svg/docs/landing-page/video.svg",
    path: "/screencasts",
    title: "Watch video",
  },
  {
    buttonLabel: "Start exploring",
    description: "Learn about Gitpod by opening a template",
    icon: "/svg/docs/landing-page/quickstart.svg",
    path: "/docs/quickstart",
    title: "Use Quickstart",
  },
];
