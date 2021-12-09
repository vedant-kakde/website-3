<script lang="ts">
  import type { Quote } from "../types/quote.type";

  export let quotes: Quote[];

  let selectedQuote: Quote = quotes[0];
</script>

<style>
  .img {
    max-width: 409px;
  }
</style>

<div class="bg-off-white shadow-normal rounded-5xl p-small">
  <div class="flex justify-around max-w-4xl mx-auto">
    {#each quotes as quote}
      <button
        class="flex justify-center w-28 py-3"
        on:mouseenter={() => (selectedQuote = quote)}
      >
        <img src={quote.companyLogo.src} alt={quote.companyLogo.alt} />
      </button>
    {/each}
  </div>
  <div class="flex items-center mt-small text-left">
    <img src={selectedQuote.img.src} alt={selectedQuote.img.alt} class="img" />
    <div class="flex-1 sm:px-micro lg:pl-small lg:pr-0 text-large">
      <p class="italic">
        &ldquo;{selectedQuote.text}&rdquo;
      </p>

      <p class="font-bold mt-xx-small">
        {selectedQuote.author}, {selectedQuote.jobTitle}
      </p>
    </div>
  </div>
</div>
