<script lang="ts">
  let clazz = "";
  export { clazz as class };

  export let labelLeft: string;
  export let labelRight: string;
  export let isInversed: boolean = false;
</script>

<style lang="postcss">
  .toggle-container {
    height: 28px;
    width: 55px;
    background: linear-gradient(137.41deg, #ffad33 14.37%, #ff8a00 91.32%);
    border-radius: 20px;
  }

  label {
    @apply mb-0 cursor-pointer;
  }

  span {
    height: 22px;
    width: 22px;
    border-radius: 50%;
    left: 3px;
    transition: 0.4s left cubic-bezier(0.16, 1, 0.3, 1);
  }

  span.inversed {
    left: calc(100% - 25px);
  }

  input:checked + span {
    left: calc(100% - 25px);
  }

  input:checked + span.inversed {
    left: 3px;
  }
</style>

<div class="flex justify-center items-center space-x-micro {clazz}">
  <label for="toggle">{labelLeft}</label>
  <div class="toggle-container relative flex items-center cursor-pointer">
    <input id="toggle" type="checkbox" on:change class="h-full w-full" />
    <span
      class="absolute block bg-white pointer-events-none"
      class:inversed={isInversed}
    />
  </div>
  <label for="toggle">{labelRight}</label>
</div>
