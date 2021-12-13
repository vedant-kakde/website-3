<script lang="ts">
  import type { Resource } from "../types/resource.type";
  import Resources from "./resources.svelte";
  import SectionCommon from "./section-common.svelte";
  export let title = "Program benefits";
  export let text: string = "";
  export let resources: Resource[];
</script>

<SectionCommon {title} {text}>
  <Resources {resources} slot="content" />
</SectionCommon>
