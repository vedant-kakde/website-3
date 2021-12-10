<script lang="ts">
  import { onMount } from "svelte";
  import { showHideOverflowY } from "../../../utils/helpers";
  import ContactLink from "../contact-link.svelte";

  import LoginButton from "../login-button.svelte";
  import NavItem from "../nav-item.svelte";
  import SignUpButton from "../sign-up-button.svelte";
  import DashboardButton from "../dashboard-button.svelte";
  import menuState from "./state";

  export let navItems = [];
  export let isLoggedIn: boolean;

  onMount(() => {
    const handleTabletChange = (e: any) => {
      if (e.matches) {
        $menuState = false;
        showHideOverflowY(false);
      }
    };

    let query = window.matchMedia("(min-width: 1050px)");
    query.addEventListener("change", handleTabletChange);
  });

  const toggle = () => {
    $menuState = !$menuState;
    showHideOverflowY(false);
  };
</script>

<style lang="postcss">
  /* Always make sure to keep the media query intact with one specified above in the matchMedia call. */
  @media (min-width: 1050px) {
    .nav-items {
      @apply hidden;
    }
  }
</style>

{#if $menuState}
  <div
    class="nav-items absolute flex flex-col pt-10 pb-16 w-screen items-center bg-off-white space-y-xx-small z-10 shadow-md"
  >
    {#each navItems as navItem}
      <NavItem {navItem} on:click={toggle} />
    {/each}
    <ContactLink on:click={toggle} />
    {#if isLoggedIn}
      <DashboardButton class="text-lg h-8 w-28" />
    {:else}
      <LoginButton />
      <SignUpButton class="text-lg h-8 w-28" />
    {/if}
  </div>
{/if}
