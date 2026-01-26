<script lang="ts">
  import type { Verse } from "$lib/types";
  import VerseBlock from "./VerseBlock.svelte";

  interface Props {
    structure: string[];
    verses: Record<string, Verse>;
    language?: string;
  }

  let { structure, verses, language = "ro" }: Props = $props();
</script>

<div
  class="flex-1 min-h-0 overflow-y-scroll px-2"
>
  <div class="space-y-3 py-4">
    {#each structure as verseId, index (`${verseId}-${index}`)}
      {@const verse = verses[verseId]}
      {#if verse}
        <VerseBlock {verse} {verseId} {language} />
      {/if}
    {/each}
  </div>
</div>
