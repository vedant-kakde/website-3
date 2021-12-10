<script lang="ts">
  import TwitterFollowButton from "../t-button.svelte";
</script>

<style lang="postcss">
  header {
    @apply mb-0 !important;
  }

  header h1 + p {
    @apply text-p-medium;
  }
</style>

<header class="mb-0">
  <h1>DevX Digest</h1>
  <p class="mb-x-small">
    Our newsletter where we cover everything about Developer Experience
  </p>
  <div class="buttons-wrapper justify-center">
    <a
      class="btn-primary"
      href="https://gitpod.io/notifications"
      target="_blank"
      >Signup for the Newsletter
    </a>
    <TwitterFollowButton class="btn-secondary" />
  </div>
</header>
