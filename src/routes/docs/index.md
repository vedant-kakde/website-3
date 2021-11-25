---
section:
title: Introduction
---

<script lang="ts" context="module">
  export const prerender = true;
  export async function load({ session }) {
    return { props: { changelogEntries: session.changelogEntries } };
  }
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import GetStarted from "../../components/docs/landing-page/get-started.svelte";
  import Timeline, { contextKeyChangelogEntries } from "../../components/docs/landing-page/timeline/timeline.svelte";

  export let changelogEntries;

  setContext(contextKeyChangelogEntries, changelogEntries);
</script>

# Welcome!

Learn how to spin up fresh, automated dev environments for each task, in the cloud, in seconds.

## How would you like to get started with Gitpod?

<GetStarted />

## Latest updates

<Timeline />

To see all updates view our [changelog](/changelog)
