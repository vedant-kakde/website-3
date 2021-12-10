<script lang="ts">
  import { goto } from "$app/navigation";
  import MobileMenu from "./mobile-menu/index.svelte";
  import MobileMenuToggle from "./mobile-menu/toggle.svelte";
  import NavItem from "./nav-item.svelte";
  import menuState from "./mobile-menu/state";
  import LoginButton from "./login-button.svelte";
  import SignUpButton from "./sign-up-button.svelte";
  import DashboardButton from "./dashboard-button.svelte";
  import Logo from "../svgs/logo.svelte";
  import { showHideOverflowY } from "../../utils/helpers";
  import SignUpButtonTablet from "./sign-up-button-tablet.svelte";
  import AnnouncementBanner from "../../components/banners/announcement.svelte";
  import ContactLink from "./contact-link.svelte";

  let scroll: number;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const navItems = [
    {
      href: "/screencasts",
      label: "Screencasts",
      isHighlighted: true,
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/docs",
      label: "Docs",
    },
    {
      href: "/changelog",
      label: "Changelog",
    },
    {
      href: "/pricing",
      label: "Pricing",
    },
  ];

  const isLoggedIn =
    typeof document === "undefined"
      ? false
      : !!document.cookie.match("gitpod-user=loggedIn") ||
        !!document.cookie.match("gitpod-user=true");
</script>

<style lang="postcss">
  nav {
    transition: border-color 0.2s linear;
  }

  .nav-items {
    @apply transition-opacity duration-200 ease-linear;
  }

  .bg-open-state {
    @apply bg-off-white !important;
  }

  .wrapper {
    max-width: 1500px;
    @apply h-14;
  }

  .scrolled-out {
    @apply border-divider;
    background: hsl(0 5% 96% / 85%);
    backdrop-filter: saturate(0.5) blur(5px);
  }

  .scrolled-out .nav-items {
    @apply opacity-0 pointer-events-none;
  }

  @media (min-width: 1050px) {
    .wrapper {
      @apply h-20;
    }

    .nav-items,
    .login-wrapper {
      @apply flex;
    }
  }

  button {
    @apply outline-none;
  }

  button::-moz-focus-inner {
    @apply border-0;
  }
</style>

<svelte:window bind:scrollY={scroll} />
<!-- Intersection observer target to trigger the strike through animation. -->
<div id="choose-project-observer-target-top" />
<nav
  class="fixed z-50 mx-auto w-full border-b border-solid border-transparent"
  class:scrolled-out={scroll > 0}
  class:bg-open-state={$menuState}
>
  <AnnouncementBanner />
  <div
    class="wrapper flex items-center justify-between mx-auto h-16 md:h-20 px-4 sm:px-8"
  >
    <button
      on:contextmenu|preventDefault={() => goto("/media-kit")}
      aria-label="Home"
      on:click={() => {
        $menuState = !menuState;
        showHideOverflowY(false);
        goto("/");
        scrollToTop();
      }}
    >
      <Logo class="h-8 w-28 lgx:h-10 lgx:w-32" />
    </button>
    <div
      class="nav-items mx-auto hidden px-2 space-x-6 items-center md:space-x-12"
    >
      {#each navItems as navItem}
        <NavItem on:focus={scrollToTop} {navItem} />
      {/each}
    </div>
    <div class="login-wrapper items-center hidden space-x-x-small">
      <ContactLink />
      {#if isLoggedIn}
        <DashboardButton class="h-8 w-24" />
      {:else}
        <LoginButton />
        <SignUpButton class="h-8 w-20" />
      {/if}
    </div>
    <div class="flex items-center">
      <SignUpButtonTablet />
      <MobileMenuToggle />
    </div>
  </div>
  <MobileMenu {navItems} {isLoggedIn} />
</nav>
