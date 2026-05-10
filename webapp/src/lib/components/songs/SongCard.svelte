<script lang="ts">
    import {
        Language,
        LANGUAGE_LABELS,
        type Song,
    } from "$lib/resources/song/types";
    import { getSongLanguages } from "$lib/resources/song/utils";
    import CategoryBadge from "../CategoryBadge.svelte";
    import SongVerses from "./SongVerses.svelte";
    import User from "@lucide/svelte/icons/user";

    interface Props {
        song: Song;
    }

    let { song }: Props = $props();

    let selectedLanguage = $state<Language>(Language.Portuguese);

    const songLanguages = $derived(getSongLanguages(song));
    const hasMultipleLanguages = $derived(songLanguages.length > 1);
</script>

<article class="flex h-full flex-col">
    <header class="shrink-0 border-b border-border/40 px-4 pb-3 pt-4">
        <div class="mb-2 flex items-start justify-between gap-3">
            <h1
                class="font-impact text-3xl leading-none tracking-[0.04em] text-foreground"
            >
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
                    <span class="tag-chip">#{tag}</span>
                {/each}
            </div>
        {/if}

        {#if hasMultipleLanguages}
            <div class="mt-3 flex gap-1">
                {#each songLanguages as language (language)}
                    {@const label = LANGUAGE_LABELS[language]}
                    <button
                        onclick={() => (selectedLanguage = language)}
                        class="flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors {selectedLanguage ===
                        language
                            ? 'bg-primary/15 text-primary font-medium'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
                    >
                        <span>{label.flag}</span>
                        {label.label}
                    </button>
                {/each}
            </div>
        {/if}
    </header>

    <SongVerses
        structure={song.structure}
        verses={song.verses}
        {selectedLanguage}
    />
</article>
