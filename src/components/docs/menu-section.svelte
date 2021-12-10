<script lang="ts">
  import docsCurrentSectionStore from "../../stores/docs-current-section";
  import MenuLink from "./menu-link.svelte";

  import type { MenuEntry } from "../../types/menu-entry.type";
  import Pill from "./pill.svelte";
  export let menuItem: MenuEntry;

  $: isActiveSection = $docsCurrentSectionStore
    ? menuItem.path.indexOf(
        /self-hosted\/\d\.\d\.\d/.test($docsCurrentSectionStore)
          ? $docsCurrentSectionStore.replace(/\d\.\d\.\d/, "latest")
          : $docsCurrentSectionStore
      ) >= 0
    : /\/docs\/?$/.test(menuItem.path);
</script>

<style lang="postcss">
  .isActiveSection {
    @apply py-6 bg-white rounded-2xl shadow-normal;
  }
</style>

<li>
  <div
    class:isActiveSection
    class="px-6 inline-block text-p-large leading-x-small"
  >
    <MenuLink href={menuItem.path} class="text-large">{menuItem.title}</MenuLink
    >
    {#if menuItem.subMenu && isActiveSection}
      <ul class="ml-4 mt-4 text-p-medium leading-x-small">
        {#each menuItem.subMenu as sub}
          <li class="flex flex-row items-center">
            <MenuLink href={sub.path}>{sub.title}</MenuLink>
            {#if sub.status}
              <Pill text={sub.status} />
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</li>
