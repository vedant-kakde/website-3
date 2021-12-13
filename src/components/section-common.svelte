<script lang="ts">
  import Section from "./section.svelte";
  export let title: string;
  export let text: string = "";
</script>

<Section class="text-center">
  <h2>{title}</h2>
  {#if text}
    <p class="text-large">
      {@html text}
    </p>
  {/if}
  <slot name="content" />
</Section>
