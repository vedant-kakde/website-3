<script lang="ts">
  import { page } from "$app/stores";
  import LogoTextless from "../svgs/logo-textless.svelte";

  const BASE_PATH =
    "https://gitpod.io#https://github.com/gitpod-io/website/tree/main/src/routes";
  const currentPage =
    $page.path === "/docs" ? `${$page.path}/index` : $page.path;
  const href = `${BASE_PATH}${currentPage}.md`;
</script>

<div class="flex justify-end mb-micro">
  <a
    {href}
    target="_blank"
    class="inline-flex py-macro px-4 items-center justify-center bg-white rounded-2xl text-btn-small text-black shadow-sm font-semibold hover:bg-off-white focus:bg-off-white"
    rel="noopener"
    data-analytics={`{"variant":"open_in_gitpod"}`}
  >
    <span>
      <LogoTextless />
    </span> <span class="ml-macro">Edit in Gitpod</span>
  </a>
</div>
