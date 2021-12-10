import type { FAQ } from "src/types/editors-faq.type";

export const faqs: FAQ[] = [
  {
    question:
      "I am being prompted for a password, what is the password set to?",
    answer:
      "During private Beta, the password for the JetBrains IDE's will always be <code>gitpod</code>",
  },
  {
    question:
      "I changed my IDE preference, but Gitpod still opens VS Code, what should I do?",
    answer:
      "You must start a new workspace to see the JetBrains IDE prompt. Workspaces created before the preferences are updated will not show the JetBrains prompt. Workspaces will respect user preferences on start-up. <i>If you change your preferences you must stop your workspace and restart it</i>. Also, do note that when a workspace restarts, the Code With Me link will also update/change.",
  },
  {
    question: "Do you need a license to use the JetBrains integration?",
    answer:
      "<a href='https://www.jetbrains.com/help/idea/remote-development-starting-page.html#licensing' rel='nofollow noopener noreferrer' target='_blank'>Licensing</a> is required from the desktop client.",
  },
];
