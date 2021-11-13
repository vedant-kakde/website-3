import { derived, writable } from "svelte/store";
import type { ChangelogEntry as ChangelogEntryType } from "../types/changelog-entry.type";

export const changelogEntriesStore = writable<ChangelogEntryType[]>([]);

export const slicedChangelogEntries = derived(
  changelogEntriesStore,
  ($changelogEntriesStore) => $changelogEntriesStore.slice(0, 5)
);
