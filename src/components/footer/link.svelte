<script lang="ts">
  export let href: string;
  export let rel: string = "";
  export let target: string = "";

  let clazz: string = "";
  export { clazz as class };
</script>

<a
  {href}
  {rel}
  {target}
  on:click
  class="
    text-dark-grey
    no-underline
    focus:text-black
    hover:text-black
    {clazz}
  "
>
  <slot />
</a>
