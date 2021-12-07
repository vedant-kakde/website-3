<script lang="ts">
  import Section from "../section.svelte";
  import Brands from "./brands.svelte";
  let clazz = "";
  export { clazz as class };

  export let title: string;
</script>

<Section class="text-center {clazz}">
  <h2 class="h3">{title}</h2>
  <Brands />
</Section>
