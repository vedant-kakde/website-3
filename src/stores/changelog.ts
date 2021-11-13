import { writable } from "svelte/store";
import type { ChangelogEntry as ChangelogEntryType } from "../types/changelog-entry.type";

export const changelogEntriesStore = writable<ChangelogEntryType[]>([]);
