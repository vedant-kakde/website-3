<script lang="ts">
  import { isAnExternalLink } from "../utils/helpers";

  import type { Resource } from "../types/resource.type";
  export let resource: Resource;
  const { title, text, link, icon } = resource;
  const target = isAnExternalLink(link.href) ? "_blank" : undefined;
</script>

<div
  class="flex flex-col justify-between items-center max-w-xs lg:max-w-sm mb-micro md:mb-small bg-off-white py-small px-x-small sm:py-small rounded-4xl shadow-normal text-center"
>
  <div>
    {#if icon}
      <img src={icon} alt={title} class="h-12 mb-x-small mx-auto" />
    {/if}
    <h3 class="mb-micro h4">{title}</h3>
    <p class="text-small">{text}</p>
  </div>
  <a href={link.href} {target} class="btn-cta mt-x-small">{link.text}</a>
</div>
