<script lang="ts">
  import type { ExtensionButton } from "../../types/extension-button.type";
  import Section from "../section.svelte";

  const buttons: ExtensionButton[] = [
    {
      name: "chrome-extension",
      icon: "svg/browsers/chrome.svg",
      text: "Chrome Extension",
      href: "https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki",
    },
    {
      name: "firefox-extension",
      icon: "svg/browsers/firefox.svg",
      text: "Firefox Extension",
      href: "https://addons.mozilla.org/firefox/addon/gitpod/",
    },
  ];
</script>

<Section
  class="flex flex-col max-w-2xl mx-auto lg:max-w-none lg:flex-row items-center bg-off-white shadow-normal px-micro py-small sm:px-small sm:py-medium lg:space-x-small xl:py-24 xl:px-20 xl:space-x-20 rounded-5xl"
>
  <div class="mb-x-small lg:mb-0">
    <img
      src="/images/index/gitpod-browser-extension.png"
      alt="Open in Gitpod button added via the Gitpod Browser Extension"
    />
  </div>
  <div>
    <h3 class="h3">Spin up developer environments with a single click.</h3>
    <p class="mt-xx-small mb-x-small">
      Install the browser extension and add a button to your GitLab, GitHub and
      Bitbucket projects to easily spin up a dev environment with a single
      click.
    </p>
    <div class="buttons-wrapper">
      {#each buttons as { href, icon, text }}
        <a
          {href}
          target="_blank"
          rel="noopener"
          class="btn-otherbrand text-medium"
        >
          <img src={`/${icon}`} alt={text} width="24" height="24" />
          {text}
        </a>
      {/each}
    </div>
  </div>
</Section>
