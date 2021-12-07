<script lang="ts">
  import { ides } from "../../contents/home";
  import Section from "../section.svelte";
  import Toggle from "../toggle.svelte";
  import IdeSwitcher from "./ide-switcher.svelte";
  let selectedIde = "vscode";
  let ideType = "browser";
  let toggleChecked = false;

  $: if (toggleChecked) {
    ideType = "desktop";
  } else {
    ideType = "browser";
  }

  const handleIdeChange = (e: { detail: { text: string } }) => {
    selectedIde = e.detail.text;
  };

  $: idetoRender = ides.find((ide) => ide.name === selectedIde);
</script>

<style lang="postcss">
  p {
    max-width: 638px;
  }
</style>

<Section>
  <div class="row">
    <h2 class="text-center">Your environment, your tools, your craft</h2>
    <div class="max-w-5xl mx-auto">
      <Toggle
        class="mt-x-small mb-macro"
        labelLeft="Desktop"
        labelRight="Browser"
        on:change={(e) => {
          ideType = "desktop";
          // @ts-ignore
          toggleChecked = e.currentTarget.checked;
        }}
      />
      <div class="relative">
        <div class="py-micro md:pr-micro lg:px-xx-small">
          <img
            src="/images/index/{idetoRender.screenshots[ideType]}"
            alt={idetoRender.label}
            class="shadow-brand rounded-lg"
          />
        </div>
        <IdeSwitcher on:message={handleIdeChange} {ides} />
      </div>
    </div>
    <div class="text-center m-auto">
      <h3 class="mt-medium md:mt-x-large">We adapt, so you don't need to</h3>
      <p class="text-large mt-xx-small mb-x-small mx-auto">
        Run a desktop or browser based version of VS Code or any JetBrains IDE
        and customise it to your individual needs - from themes to extensions,
        you have full control.
      </p>
      <a href="/#get-started" class="btn-conversion">Try Now</a>
    </div>
  </div>
</Section>
