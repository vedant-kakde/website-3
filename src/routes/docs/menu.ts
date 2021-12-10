import type { MenuStatus, MenuEntry } from "../../types/menu-entry.type";

function M(
  title: string,
  path: string,
  subMenu?: MenuEntry[],
  status?: MenuStatus
): MenuEntry {
  return {
    title,
    status,
    path: "/docs" + (path ? "/" + path : ""),
    subMenu,
  };
}

export const MENU: MenuEntry[] = [
  M("Introduction", ""),
  M("Quickstart", "quickstart"),
  M("Getting Started", "getting-started"),
  M("Configure", "configure", [
    M(".gitpod.yml", "config-gitpod-file"),
    M("Custom Docker Image", "config-docker"),
    M("Start Tasks", "config-start-tasks"),
    M("VS Code Extensions", "vscode-extensions"),
    M("Exposing Ports", "config-ports"),
    M("Prebuilds", "prebuilds"),
    M("Environment Variables", "environment-variables"),
    M("Checkout and Workspace Location", "checkout-location"),
    M("Browser Settings", "configure/browser-settings"),
    M("Tailscale", "configure/tailscale"),
  ]),
  M("Develop", "develop", [
    M("One workspace per task", "workspaces"),
    M("Life of a workspace", "life-of-workspace"),
    M("Contexts", "context-urls"),
    M("Collaboration & Sharing", "sharing-and-collaboration"),
    M("Teams & Projects", "teams-and-projects", [], "beta"),
    M("Create a team plan", "teams"),
    M("Local Companion", "develop/local-companion", [], "beta"),
  ]),
  M("Editors", "editors", [
    M("VS Code Browser", "editors/vscode-browser"),
    M("GoLand", "editors/goland", [], "beta"),
    M("IntelliJ IDEA", "editors/intellij", [], "beta"),
    M("VS Code Desktop", "editors/vscode", [], "beta"),
    M("CLion", "editors/clion", [], "soon"),
    M("DataGrip", "editors/datagrip", [], "soon"),
    M("PhpStorm", "editors/phpstorm", [], "beta"),
    M("PyCharm", "editors/pycharm", [], "beta"),
    M("Rider", "editors/rider", [], "soon"),
    M("RubyMine", "editors/rubymine", [], "soon"),
    M("WebStorm", "editors/webstorm", [], "soon"),
  ]),
  M("Integrations", "integrations", [
    M("GitLab", "gitlab-integration"),
    M("GitHub", "github-integration"),
    M("Bitbucket", "bitbucket-integration"),
    M("Browser Bookmarklet", "browser-bookmarklet"),
    M("Browser Extension", "browser-extension"),
  ]),
  M("Gitpod Self-Hosted", "self-hosted/latest", [
    M("Requirements", "self-hosted/latest/requirements"),
    M("Installation", "self-hosted/latest/installation"),
    M("Configuration", "self-hosted/latest/configuration"),
    M("Administration", "self-hosted/latest/administration"),
    M("Troubleshooting", "self-hosted/latest/troubleshooting"),
    M("Updating", "self-hosted/latest/updating"),
    M("Releases", "self-hosted/latest/releases"),
  ]),
  M("References", "references", [
    M(".gitpod.yml", "references/gitpod-yml"),
    M("Command Line Interface", "command-line-interface"),
    // M("Custom Docker image", "references/gitpod-dockerfile"),
    // M("Architecture", "references/architecture"),
    M("Languages & Framework", "languages-and-frameworks"),
    M("Roadmap", "references/roadmap"),
  ]),
  M("Contribute", "contribute", [
    M("Documentation", "contribute/documentation"),
    M("Features & Patches", "contribute/features-and-patches"),
  ]),
  M("Troubleshooting", "troubleshooting", []),
];

export interface MenuContext {
  prev?: MenuEntry;
  thisEntry?: MenuEntry;
  next?: MenuEntry;
}

export function getMenuContext(
  slug: string,
  menu: MenuEntry[] = MENU,
  context: MenuContext = {}
): MenuContext {
  for (const e of menu) {
    if (context.next) {
      return context;
    }
    if (context.thisEntry) {
      context.next = e;
      return context;
    } else if (e.path === slug) {
      context.thisEntry = e;
    } else {
      context.prev = e;
    }
    if (e.subMenu) {
      getMenuContext(slug, e.subMenu, context);
    }
  }
  return context;
}
