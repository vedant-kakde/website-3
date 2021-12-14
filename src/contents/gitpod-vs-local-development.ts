import type { Card } from "../types/card.type";
import type { Intro } from "../types/intro.type";

export const benefits: Card[] = [
  {
    icon: {
      src: "/svg/gitpod-vs-local-development/developer-experience.svg",
      alt: "Developer experience",
      transform: "scale(1.6)",
    },
    title: "Developer experience",
    text: "Developer productivity increases and results in greater team morale.",
  },
  {
    icon: {
      src: "/svg/gitpod-vs-local-development/remote-work.svg",
      alt: "Remote work",
      transform: "scale(1.4)",
    },
    title: "Remote work",
    text: "Work from anywhere on any device. All you need is a browser.",
  },
  {
    icon: {
      src: "/svg/gitpod-vs-local-development/faster-onboarding.svg",
      alt: "Faster onboarding",
      transform: "scale(1.5)",
    },
    title: "Faster onboarding",
    text: "Ready to code within seconds. No need to set up dev environments.",
  },
  {
    icon: {
      src: "/svg/gitpod-vs-local-development/open-source-contributions.svg",
      alt: "Open-source contributions",
      transform: "scale(1.5) translateY(4px)",
    },
    title: "Open-source contributions",
    text: "Increase in open-source contributions thanks to an easy onboarding.",
  },
];

export const intros: Intro[] = [
  {
    image: "/images/gitpod-vs-local-development/bob.png",
    name: "Bob",
    works: "works locally",
    workflow: `
			<p>Needs to manually configure each project. This includes:</p>
			<ul>
				<li>installing development tools</li>
				<li>cloning Git repos</li>
				<li>installing dependencies</li>
				<li>upgrade tools & dependencies</li>
				<li>etc.</li>
			</ul>
		`,
  },
  {
    image: "/images/gitpod-vs-local-development/alice.png",
    name: "Alice",
    works: "works in the cloud",
    workflow:
      '<p>Automates the configuration setup by using <img src="/svg/media-kit/logo-light-theme.svg" alt="Gitpod" class="inline h-6 w-20">&nbsp;.</p>',
    isHighlighted: true,
  },
];

export const setupDetails = {
  bob: {
    image: "/images/gitpod-vs-local-development/bob.png",
    name: "Bob",
    details: [
      {
        term: "Setup new Project",
        data: [
          "clones the source code",
          "ensures the correct runtime versions are installed (e.g. Java, Node, .NET)",
          "makes sure the project supports his operating system",
          "follows onboarding instructions, potentially spending up to a few days on this",
        ],
      },
      {
        term: "Develop a new feature",
        data: [
          "pulls latest default branch",
          "creates feature branch",
          "ensures correct runtimes",
          "ensures correct dependencies",
          "starts database and dev servers",
        ],
      },
      {
        term: "Switch context",
        data: [
          "git stash",
          "git pull",
          "changes branch",
          "ensures correct runtimes",
          "ensures correct dependencies",
          "review code",
          "changes back to previous branch",
          "get stashed files",
          "ensures correct runtimes",
          "ensures correct dependencies",
        ],
      },
      {
        term: "Set up a new computer",
        data: [
          "installs runtimes",
          "installs editors",
          "install editor extensions",
          "configures git",
        ],
      },
      {
        term: "Contribute to open-source projects",
        data: ["repeating all steps of SETUP NEW PROJECT 🥱"],
      },
    ],
  },
  alice: {
    image: "/images/gitpod-vs-local-development/alice.png",
    name: "Alice",
    details: [
      {
        term: "Setup new Project",
        data: [
          "creates a .gitpod.yml file at the root of her project",
          `
          adds start task, e.g.
          <div class="code">
            <span>tasks:</span><br />
            <span>&nbsp;&nbsp;- init:</span> npm install<br />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;command:</span> npm run dev
          </div>
          `,
          "enables Prebuilds",
        ],
      },
      {
        term: "Develop a new feature",
        data: [
          "opens new browser tab",
          'prefixes the issue URL with gitpod.io/#&lang;issue-url&rang; or uses the Gitpod <a href="/docs/browser-extension">browser extension</a>',
        ],
      },
      {
        term: "Switch context",
        data: [
          "opens new browser tab",
          'prefixes the PR URL with gitpod.io/#&lang;issue-url&rang; or uses the Gitpod <a href="/docs/browser-extension">browser extension</a>',
          "reviews code within Gitpod",
          "closes browser tab",
        ],
      },
      {
        term: "Set up a new computer",
        data: ["only needs is a browser"],
      },
      {
        term: "Contribute to open-source projects",
        data: [
          "launches workspace with a single click for all project with a gitpod.yml configured",
        ],
      },
    ],
  },
};
