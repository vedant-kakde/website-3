<script lang="ts">
  import { authorSocialMediaLinks } from "../../contents/authors";

  import type { BlogPost } from "../../types/blog-post.type";
  import Avatars from "../avatars.svelte";

  export let post: BlogPost;
  export let isMostRecent: boolean = false;
  export let type: "blog" | "guides";
  export let layout: "row" | "column" = "column";

  export let headlineOrder: "h3" | "" = "";
</script>

<style lang="postcss">
  .blurb > :first-child {
    @media (min-width: 1280px) {
      flex: 0 0 75%;
    }
  }

  h2,
  h3 {
    @apply text-h4;
  }
  h2 a,
  h3 a {
    @apply no-underline text-black;
  }
  h2 a:focus,
  h3 a:hover,
  h2 a:hover,
  h3 a:focus {
    @apply underline;
  }

  p {
    @apply mt-micro;
  }
</style>

<div
  class:bg-sand-dark={!isMostRecent}
  class="flex flex-col max-w-sm lg:max-w-none {layout === 'column'
    ? ''
    : 'lg:flex-row lg:max-w-6xl mx-auto'} rounded-xl bg-off-white"
  data-analytics={`{"context":"grid","variant":"preview"}`}
>
  {#if isMostRecent}
    <a href="/{type}/{post.slug}" sveltekit:prefetch>
      <div
        role="img"
        aria-label={`${type === "blog" ? "Blog post" : "Guide"}: ${post.title}`}
        class="object-cover m-auto overflow-hidden rounded-t-xl bg-center bg-cover w-full h-64 {layout ===
        'column'
          ? ''
          : 'lg:rounded-l-xl lg:rounded-t-none lg:w-60 lg:h-full'}"
        style={`background-image: url(/images/${type}/${post.slug}/${post.image});`}
      />
    </a>
  {/if}
  <div
    class="blurb {layout === 'column'
      ? 'flex-col h-full flex-nowrap'
      : 'flex-wrap'} flex lg:justify-between p-x-small pt-small"
  >
    <div>
      {#if headlineOrder === "h3"}
        <h3 class="h2">
          <a href="/{type}/{post.slug}" sveltekit:prefetch>
            {post.title}
          </a>
        </h3>
      {:else}
        <h2>
          <a href="/{type}/{post.slug}" sveltekit:prefetch>
            {post.title}
          </a>
        </h2>
      {/if}
      <p>{post.excerpt}</p>
    </div>
    <p>
      <span>
        <Avatars
          usernames={post.author}
          socialMediaLinks={authorSocialMediaLinks}
          socialMediaLinkClasses="hover:drop-shadow"
        />
        <a
          href="/{type}/{post.slug}"
          class="date no-underline text-p-small ml-macro"
          sveltekit:prefetch
        >
          {new Date(Date.parse(post.date)).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </a>
      </span>
    </p>
  </div>
</div>
