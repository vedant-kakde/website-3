<script lang="ts">
  import type { Quote } from "../types/quote.type";
  export let quotes: Quote[];
  let selectedQuote: Quote = quotes[0];
</script>

<style lang="postcss">
  .quote {
    height: 330px;

    @media (max-width: 1040px) {
      height: 250px;
    }

    @media (max-width: 890px) {
      @apply block;
      height: auto;
    }
  }

  .quote div {
    @media (max-width: 890px) {
      height: 230px;
    }

    @media (max-width: 630px) {
      height: 270px;
    }

    @media (max-width: 430px) {
      height: 300px;
    }
  }
</style>

<div
  class="quotes bg-off-white shadow-normal rounded-2xl sm:rounded-5xl pt-micro sm:px-xx-small sm:pt-x-small sm:pb-micro lg:p-small"
>
  <div class="flex justify-around flex-wrap max-w-xl mx-auto">
    {#each quotes as quote}
      <button
        class="flex justify-center py-3 group mx-micro"
        on:mouseenter={() => (selectedQuote = quote)}
        on:click={() => (selectedQuote = quote)}
      >
        <img
          src={quote.companyLogo.src}
          alt={quote.companyLogo.alt}
          class="transition opacity-60 group-hover:opacity-100 group-focus:opacity-100"
        />
      </button>
    {/each}
  </div>
  <div class="flex mt-micro sm:mt-xx-small lg:mt-small text-left quote">
    <img
      src={selectedQuote.img.src}
      alt={selectedQuote.img.alt}
      class="max-w-xs lg:max-w-sm xl:max-w-md w-full mx-auto"
    />
    <div
      class="flex-1 max-w-lg pt-micro px-xx-small sm:pl-x-small lg:pl-small lg:pr-0"
    >
      <p class="text-large">
        &ldquo;{selectedQuote.text}&rdquo;
      </p>

      <p class="font-bold mt-xx-small">
        {selectedQuote.author}, {selectedQuote.jobTitle}
      </p>
    </div>
  </div>
</div>
