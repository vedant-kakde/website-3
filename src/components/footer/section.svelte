<script lang="ts">
  export let title: string;
</script>

<style lang="postcss">
  ul {
    @media (max-width: 500px) {
      flex: 0 0 34%;
    }
  }
</style>

<ul class="min-w-min mb-xx-small space-y-macro md:mb-0">
  <li class="font-semibold text-black">{title}</li>
  <slot />
</ul>
