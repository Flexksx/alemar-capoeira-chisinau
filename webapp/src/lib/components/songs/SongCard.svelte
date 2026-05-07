<script lang="ts">
  import type { Song } from "$lib/types";
  import CategoryBadge from "../CategoryBadge.svelte";
  import SongVerses from "./SongVerses.svelte";
  import User from "@lucide/svelte/icons/user";

  interface Props {
    song: Song;
    language?: string;
  }

  let { song, language = "ro" }: Props = $props();
</script>

<article class="flex h-full flex-col">
  <!-- Song Header -->
  <header class="shrink-0 border-b border-border/40 px-4 pb-4 pt-4">
    <div class="mb-2 flex items-start justify-between gap-3">
      <h1 class="font-impact text-3xl leading-none tracking-[0.04em] text-foreground">
        {song.title}
      </h1>
      <CategoryBadge category={song.category} size="sm" />
    </div>

    {#if song.author}
      <p class="label-xs flex items-center gap-1.5">
        <User class="h-3.5 w-3.5" />
        {song.author}
      </p>
    {/if}

    {#if song.tags.length > 0}
      <div class="mt-2 flex flex-wrap gap-1.5">
        {#each song.tags as tag (tag)}
          <span
            class="tag-chip"
          >
            #{tag}
          </span>
        {/each}
      </div>
    {/if}
  </header>

  <!-- Song Content - Verses -->
  <SongVerses structure={song.structure} verses={song.verses} {language} />
</article>
