<script>
  import Banner from "./base.svelte";

  /**
   * Each announcement must have a unique `storageKey` to ensure people who
   * dismiss announcement A will see a new banner for announcement B.
   * For simplicity, the announcement `storageKey` is the date the announcement
   * was made, in the `yyyy-mm-dd` format.
   */
  const startDate = new Date("2021-11-02");
  const endDate = new Date("2021-11-10");
</script>

<div
  class="border-b border-gray-300 border-solid"
  data-analytics={`{"position":"announcement"}`}
>
  <Banner
    storageKey="announcement-{`${startDate}${endDate}`}"
    let:closeBanner
    class="announcement-banner"
    {startDate}
    {endDate}
  >
    <span class="flex-1 text-lg text-right">🎁</span>
    <p class="flex-2 px-4 md:px-2">
      Introducing Gitpod for Startups | <a
        href="https://www.gitpod.io/blog/gitpod-for-startups">Read blog</a
      >
    </p>
    <div class="flex-1">
      <button on:click={closeBanner} class="align-middle"
        ><svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><title>Close</title>
          <path
            d="M3.00107 3L13 13M12.9989 3L3 13"
            stroke="#12100C"
            stroke-opacity="0.75"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </Banner>
</div>
