<script lang="ts" context="module">
  declare global {
    type docsearchParamType = {
      apiKey: string;
      indexName: string;
      inputSelector: string;
      debug: boolean;
    };
    interface Window {
      docsearch: (param: docsearchParamType) => void;
    }
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import topicsState from "./states/topics-state";
  import { page } from "$app/stores";
  let clazz = "";
  export { clazz as class };
  export let containerClasses = "";
  export let iconClasses = "";
  export let placeholder = "Quick search";

  const docSearchJSVersion = "2.6.3";
  const docSearchInputSelector = "search-doc-input";

  let docSearchInput: HTMLInputElement;
  let docSearchScript: HTMLScriptElement;
  let docSearchScriptLoaded = false;
  let isSupportPage = $page.path.includes("support");

  $: if (docSearchInput && (docSearchScript || docSearchScriptLoaded)) {
    window.docsearch &&
      window.docsearch({
        apiKey: "1a880f3060e9ff81ff84087fc90878fc",
        indexName: "gitpod",
        inputSelector: `#${docSearchInputSelector}`,
        // Set debug to true to inspect the dropdown
        debug: false,
      });
  }

  const processDocSearchScriptLoadEvent = () => {
    docSearchScriptLoaded = true;
  };

  const handleBodyKeyDown = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      docSearchInput.focus();
    }
  };

  onMount(() => {
    if (!navigator.userAgent.toLowerCase().match(/mobile/i)) {
      const platformKey = /(Mac)/i.test(navigator.userAgent) ? "⌘" : "Ctrl";
      placeholder += ` ${platformKey}+K`;
    }
  });
</script>

<style lang="postcss">
  .input-container {
    @media (max-width: 768px) {
      @apply mb-4;

      &:not(.topics-active) {
        display: none;
      }
    }
  }

  :global(.algolia-autocomplete) {
    display: block !important; /* DocSearch adds inline styles, !important helps us take control */
  }

  :global(div
      .algolia-autocomplete.algolia-autocomplete-left
      .ds-dropdown-menu),
  :global(div
      .algolia-autocomplete.algolia-autocomplete-right
      .ds-dropdown-menu) {
    left: 0 !important; /* DocSearch adds inline styles, !important helps us take control */
    min-width: unset;
    max-width: unset;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.css"
  />
  <script
    on:load={processDocSearchScriptLoadEvent}
    bind:this={docSearchScript}
    src="https://cdn.jsdelivr.net/npm/docsearch.js@{docSearchJSVersion}/dist/cdn/docsearch.min.js"></script>
</svelte:head>

<svelte:body on:keydown={handleBodyKeyDown} />

<div
  class={`input-container relative bg-white rounded-xl w-full shadow-normal mb-12 ${
    $topicsState || isSupportPage ? "topics-active" : ""
  } ${containerClasses}`}
>
  <label for={docSearchInputSelector} class="sr-only">Search</label>
  <img
    class="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none h-xx-small w-xx-small lef {iconClasses}"
    src="/svg/mag-glass.svg"
    alt="Search"
    aria-hidden="true"
  />
  <input
    bind:this={docSearchInput}
    type="search"
    {placeholder}
    id={docSearchInputSelector}
    class="box-border block w-full text-p-medium h-small pl-11 pr-3 py-2 border border-transparent leading-5 text-gray-600 placeholder-gray-500 focus:outline-none focus:bg-none focus:border-white focus:ring-white focus:text-gray-900 {clazz}"
  />
</div>
