<script lang="ts">
  import type { GetStartedItem } from "../../../types/get-started.type";
  export let getStartedItem: GetStartedItem;
</script>

<div class="text-center bg-off-white rounded-4xl shadow-normal p-8">
  <div class="flex justify-center">
    <img
      class="shadow-normal mb-8"
      src={getStartedItem.icon}
      alt={getStartedItem.title}
    />
  </div>
  <h4 class="mt-4">{getStartedItem.title}</h4>
  <p class="mb-4 md:h-20">{getStartedItem.description}</p>
  <a class="btn-cta mb-2" href={getStartedItem.path}
    >{getStartedItem.buttonLabel}</a
  >
</div>
