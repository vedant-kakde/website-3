<script lang="ts">
  export let title: string;
  export let body: string;
</script>

<div class="flex relative pb-12 ">
  <div class="h-full w-8 absolute inset-0 flex items-center justify-center">
    <div class="h-full w-1 bg-sand-dark pointer-events-none" />
  </div>
  <div
    class="flex-shrink-0 w-8 h-8 rounded-full bg-sand-dark inline-flex items-center justify-center text-white relative z-10"
  />
  <div class="flex-grow pl-4">
    <h3
      class="font-medium title-font text-base text-gray-900 mb-1 tracking-wider text-p-medium"
    >
      {title}
    </h3>
    <p class="rounded-2xl leading-relaxed">
      {@html body}
    </p>
  </div>
</div>
