<script lang="ts">
  import type { BlogPost } from "../../types/blog-post.type";

  import { session } from "$app/stores";
  import MoreArticles from "../more-articles.svelte";

  const posts: BlogPost[] = [
    $session.posts.find(
      (p: BlogPost) => p.slug === "gitpod-open-source-sustainability-fund"
    ),
    {
      title: "Open-Source Funding during DevX Conf",
      excerpt:
        "It's time to start giving back. Participants could vote for their favourite nominated open-source projects and we distributed USD $10,000 between these projects.",
      image: "/images/opensource/devxconf.png",
      isNotAnActualPost: true,
      url: "https://devxconf.org/opensource",
    },
    {
      title: "Platform to Foster OSS Contributions",
      excerpt:
        "We created contribute.dev to showcase open-source project with an automated developer environment. Here new contributors can easily find new projects for frictionless open-source contributions.",
      image: "/images/opensource/contribute.dev.png",
      isNotAnActualPost: true,
      url: "https://contribute.dev",
    },
  ];
</script>

<MoreArticles
  title="Actions speak louder than words"
  text="It wouldn’t have been possible to create Gitpod without all the amazing open-source work it’s built upon. The industry needs to secure their software supply chain and one of the first steps along the way is acknowledging and supporting the maintainers."
  {posts}
/>
