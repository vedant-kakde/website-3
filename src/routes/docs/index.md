---
section:
title: Introduction
---

<script context="module">
  import {changelogEntriesStore} from "../../stores/changelog"
  export const prerender = true;
   export async function load({ session }) {
    const changelogEntries = session.changelogEntries;
    changelogEntriesStore.set(changelogEntries)
    return { props: { changelogEntries } };
  }
</script>

<script lang="ts">
  import GetStarted from "../../components/docs/landing-page/get-started.svelte";
  import Timeline from "../../components/docs/landing-page/timeline/timeline.svelte";

</script>

# Welcome!

Learn how to spin up fresh, automated dev environments for each task, in the cloud, in seconds.

## How would you like to get started with Gitpod?

<GetStarted />

## Latest updates

<Timeline />

To see all updates view our [changelog](/changelog)
