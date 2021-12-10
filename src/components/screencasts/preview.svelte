<script lang="ts">
  import { stringToBeautifiedFragment } from "../../utils/helpers";
  import type { Screencast } from "../../types/screencasts.type";

  export let screencast: Screencast;
  export let screencastNumber: number;
  export let headlineOrder: "h3" | "" = "";

  $: screencastNumberPadded = `${screencastNumber}`.padStart(3, "0");
</script>

<style lang="postcss">
  .cast {
    padding-right: 40%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08),
      0px 5px 20px rgba(0, 0, 0, 0.12);
  }
  .cast:hover::after,
  .cast:hover::before,
  .cast:focus::after,
  .cast:focus::before {
    content: "";
    @apply absolute;
  }
  .cast:hover::after,
  .cast:focus::after {
    @apply top-0 left-0 right-0 bottom-0;
    background: rgba(18, 16, 12, 0.7);
    border-radius: inherit;
  }
  .cast:hover::before,
  .cast:focus::before {
    border: transparent solid;
    border-width: 20px 36px;
    border-left-color: white;
    z-index: 5;
    left: 45%;
    top: 45%;
  }
  .cast h2,
  .cast .h2 {
    @apply m-0 leading-6 flex-1;
    font-size: var(--xx-small);
  }
  .cast > div::after {
    content: "";
    @apply -z-10 absolute right-0 top-2 bottom-2 pointer-events-none;
    background-image: url("/images/screencasts/gitpod-editor.png");
    border-radius: 0.25rem;
    filter: drop-shadow(-2px 2px 5px rgba(0, 0, 0, 0.2));
    background-size: auto 100%;
    width: 150px;

    @media (max-width: 505px) {
      width: 115px;
    }
  }
</style>

<a
  href="/screencasts/{stringToBeautifiedFragment(
    screencast.title.slice(0, -3)
  )}"
  class="cast relative flex flex-col flex-nowrap min-w-full text-left mb-micro py-micro pl-x-small z-10 rounded-xl bg-right h-56"
>
  <div class="flex flex-col h-full">
    <data class="text-dark-grey">Screencast {screencastNumberPadded}</data>
    {#if headlineOrder === "h3"}
      <h3 class="h2">{screencast.title}</h3>
    {:else}
      <h2>{screencast.title}</h2>
    {/if}
    <img
      src="/svg/media-kit/logo-light-theme.svg"
      height="40"
      width="81.6"
      alt="Gitpod"
    />
  </div>
</a>
