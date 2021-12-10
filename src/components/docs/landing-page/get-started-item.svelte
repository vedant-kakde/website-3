<script lang="ts">
  import type { GetStartedItem } from "../../../types/get-started.type";
  export let getStartedItem: GetStartedItem;
</script>

<div
  class="text-center bg-off-white rounded-4xl shadow-normal p-8 flex flex-col"
>
  <div class="flex justify-center">
    <img
      src={getStartedItem.icon.path}
      style={`transform: ${getStartedItem.icon.transform}`}
      alt={getStartedItem.title}
    />
  </div>
  <div class="flex flex-col">
    <h4 class="mt-4">{getStartedItem.title}</h4>
    <p class="mb-4">{getStartedItem.description}</p>
  </div>
  <div class="mt-auto">
    <a class="btn-cta mb-2" href={getStartedItem.path}
      >{getStartedItem.buttonLabel}</a
    >
  </div>
</div>
