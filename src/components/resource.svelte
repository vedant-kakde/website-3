<script lang="ts">
  import { isAnExternalLink } from "../utils/helpers";
  import type { Resource } from "../types/resource.type";
  let clazz = "";
  export { clazz as class };

  export let resource: Resource;
  const { title, text, link, icon } = resource;
  const target = link && isAnExternalLink(link.href) ? "_blank" : undefined;
  export let headingLevel: "h3" | "h2" = "h3";
</script>

<style lang="postcss">
  div {
    max-width: 410px;
  }
</style>

<div
  class="flex flex-col justify-between items-center max-w-xs lg:max-w-sm bg-off-white py-small px-x-small rounded-5xl shadow-normal text-center {clazz}"
>
  <div>
    {#if icon}
      <img
        src={icon.src}
        alt={icon.alt || title}
        class="h-16 w-20 mb-x-small mx-auto"
        style="transform: {icon.transform}"
      />
    {/if}
    {#if headingLevel === "h3"}
      <h3 class="mb-micro h4">{title}</h3>
    {:else}
      <h3 class="mb-micro h4">{title}</h3>
    {/if}
    <p>{@html text}</p>
  </div>
  {#if link}
    <a href={link.href} {target} class="btn-cta mt-x-small">{link.text}</a>
  {/if}
</div>
