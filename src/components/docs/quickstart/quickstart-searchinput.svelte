<script lang="ts">
  import { searchQuery } from "../../../stores/quickstarts";
</script>

<div class="w-full">
  <div class="bg-white w-full shadow-normal py-2 rounded-2xl my-4">
    <div class="flex justify-items-start items-center relative">
      <label for="quickstart-searchinput" class="sr-only">Search</label>
      <img
        class="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none h-xx-small w-xx-small"
        src="/svg/mag-glass.svg"
        alt="Search"
        aria-hidden="true"
      />
      <input
        bind:value={$searchQuery}
        type="search"
        placeholder="Search Templates"
        id="quickstart-searchinput"
        class="box-border block w-full text-p-medium h-small pl-11 pr-3 py-2 border border-transparent leading-5 text-gray-600 placeholder-gray-500 focus:outline-none focus:bg-none focus:border-white focus:ring-white focus:text-gray-900 "
      />
    </div>
  </div>
</div>
