<script lang="ts">
  import type { Ide } from "../../types/ide.type";
  import { createEventDispatcher } from "svelte";
  export let ides: Ide[];

  const dispatch = createEventDispatcher();

  const hasNoScreenshots = (name: string) =>
    ides.find((ide) => ide.name === name).screenshots === undefined;

  const handleMouseEnter = (e: MouseEvent, name: string) => {
    // @ts-ignore
    const [iconDiv, soonSpan]: HTMLElement[] = Array.from(
      (e.target as HTMLElement).children
    );
    // the following if block is temporary and it should be removed when screenshots for the other ides are added.
    if (!hasNoScreenshots(name)) {
      return;
    }
    if (hasNoScreenshots(name)) {
      iconDiv.classList.remove("grayed");
      soonSpan.style.display = "flex";
    } else {
      iconDiv.classList.add("grayed");
    }

    if (!hasNoScreenshots(name)) {
      dispatch("message", {
        text: name,
      });
    }
  };

  const handleMouseLeave = (e: MouseEvent, name: string) => {
    // @ts-ignore
    const [iconDiv, soonSpan]: HTMLElement[] = Array.from(
      (e.target as HTMLElement).children
    );
    if (hasNoScreenshots(name)) {
      iconDiv.classList.add("grayed");
      soonSpan.style.display = "none";
    } else {
      iconDiv.classList.remove("grayed");
    }
  };
</script>

<style lang="postcss">
  button {
    @apply outline-none;
  }

  .icon-box {
    height: 71px;
    width: 71px;

    @media (max-width: 1140px) {
      height: 60px;
      width: 60px;
    }

    @media (max-width: 520px) {
      height: 45px;
      width: 45px;
      border-radius: 10px;
    }
  }

  .icon {
    height: 42px;
    width: 42px;

    @media (max-width: 1140px) {
      height: 36px;
      width: 36px;
    }

    @media (max-width: 520px) {
      height: 26px;
      width: 26px;
    }
  }

  .grayed {
    filter: grayscale(100%);
    @apply hover:bg-white;
  }
</style>

<div
  class="mt-macro md:mt-0 md:absolute md:top-0 md:-right-1 lgx:-right-2 flex space-x-1 sm:space-x-2 md:space-x-0 justify-center md:w-min md:block space-y-0 md:space-y-2"
>
  {#each ides as { name, availibility, label, icon, screenshots }}
    <button
      class="block relative cursor-pointer"
      on:mouseenter={(e) => {
        handleMouseEnter(e, name);
      }}
      on:mouseleave={(e) => {
        handleMouseLeave(e, name);
      }}
    >
      <div
        class="relative icon-box flex items-center justify-center bg-off-white rounded-lg md:rounded-xl lgx:rounded-2xl shadow-lg transition duration-200 linear"
        class:grayed={!screenshots}
      >
        <img src="/svg/index/{icon}" alt={label} class="icon" />
      </div>
      {#if availibility}
        <div
          class="hidden absolute -top-3 md:-top-1 left-1/2 -translate-x-1/2 md:transform-none md:-left-10 lg:left-3/4 items-center justify-center h-4 w-10 sm:h-5 sm:w-14 text-xs font-semibold text-gray-900 rounded-md sm:rounded-lg shadow-light"
          class:bg-pink-900={availibility === "soon"}
          class:bg-orange-700={availibility === "beta"}
        >
          {availibility.charAt(0).toUpperCase() + availibility.slice(1)}
        </div>
      {/if}
    </button>
  {/each}
</div>
