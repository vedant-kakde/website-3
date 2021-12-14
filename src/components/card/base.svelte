<script lang="ts">
  import { isAnExternalLink } from "../../utils/helpers";
  import type { Card } from "../../types/card.type";
  let clazz = "";
  export { clazz as class };

  export let card: Card;
  const { title, text, link, icon } = card;
  const target = link && isAnExternalLink(link.href) ? "_blank" : undefined;
  export let headingLevel: "h3" | "h2" = "h3";
  export let titleClassNames: "h4" | "h5" = "h4";
  export let iconClassNames: string = "h-16 w-20";
  export let btnClassNames: string = "btn-cta";
  export let styles: string = "";
</script>

<div
  class="flex flex-col justify-between items-center max-w-sm bg-off-white shadow-normal text-center {clazz}"
  style={styles}
>
  <div>
    {#if icon}
      <img
        src={icon.src}
        alt={icon.alt || title}
        class="{iconClassNames} mb-xx-small mx-auto"
        style="transform: {icon.transform}"
      />
    {/if}
    {#if headingLevel === "h3"}
      <h3 class="mb-micro {titleClassNames}">{title}</h3>
    {:else}
      <h3 class="mb-micro {titleClassNames}">{title}</h3>
    {/if}
    <p>{@html text}</p>
  </div>
  {#if link}
    <a href={link.href} {target} class="{btnClassNames} mt-x-small"
      >{link.text}</a
    >
  {/if}
</div>
