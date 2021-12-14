<script lang="ts">
  export let href: string;
  export let onClick: svelte.JSX.MouseEventHandler<HTMLAnchorElement>;
  export let showIcon: boolean = false;
</script>

<li class="mb-0">
  <a {href} class="flex min-h-13 items-center" on:click={onClick}>
    <div class="flex-auto"><slot /></div>
    {#if showIcon}
      <div class="ml-4 flex-initial" aria-hidden="true">
        <img
          class="-rotate-90"
          src="/arrow.svg"
          alt="See more"
          width="12"
          height="7"
        />
      </div>
    {/if}
  </a>
</li>
