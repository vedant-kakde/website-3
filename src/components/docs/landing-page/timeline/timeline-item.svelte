<script lang="ts">
  export let title: string;
  export let body: string;
</script>

<div class="flex relative pb-12 ">
  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
    <div class="h-full w-1 bg-dark-grey pointer-events-none" />
  </div>
  <div
    class="flex-shrink-0 w-10 h-10 rounded-full bg-gitpod-kumquat-gradient inline-flex items-center justify-center text-white relative z-10"
  />
  <div class="flex-grow pl-4">
    <h2
      class="font-medium title-font text-base text-gray-900 mb-1 tracking-wider"
    >
      <h6>
        {title}
      </h6>
    </h2>
    <p
      class="rounded-2xl leading-relaxed h-40 overflow-hidden overflow-ellipsis"
    >
      {@html body}
    </p>
  </div>
</div>
