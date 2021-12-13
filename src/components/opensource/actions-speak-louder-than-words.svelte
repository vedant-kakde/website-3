<script lang="ts">
  import type { BlogPost } from "../../types/blog-post.type";

  import { session } from "$app/stores";
  import MoreArticles from "../more-articles.svelte";

  const openSourcePostsSlugs = [
    "i-said-goodbye-to-local-development-and-so-can-you",
    "local-app",
    "continuous-dev-environment-in-devops",
  ];

  const posts = $session.posts.filter((p: BlogPost) =>
    openSourcePostsSlugs.some((slug) => p.slug === slug)
  );
</script>

<MoreArticles
  title="Actions speak louder than words"
  text="It wouldn’t have been possible to create Gitpod without all the amazing open-source work it’s built upon. The industry needs to secure their software supply chain and one of the first steps along the way is acknowledging and supporting the maintainers."
  {posts}
/>
