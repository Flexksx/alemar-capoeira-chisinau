<script lang="ts">
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";
  import {
    Category,
    CATEGORY_LABELS,
    CATEGORY_ORDER,
    type Song,
  } from "$lib/resources/song/types";
  import X from "@lucide/svelte/icons/x";
  import House from "@lucide/svelte/icons/house";

  interface Props {
    songs: Song[];
    isOpen: boolean;
    onClose: () => void;
    onSelectSong: (songId: string) => void;
    currentSongId?: string;
  }

  let { songs, isOpen, onClose, onSelectSong, currentSongId }: Props = $props();

  // Group songs by category
  let songsByCategory = $derived.by(() => {
    const grouped: Record<Category, Song[]> = {
      ANGOLA: [],
      REGIONAL: [],
      SAMBA: [],
      UNSPECIFIED: [],
    };
    songs.forEach((song) => {
      grouped[song.category].push(song);
    });
    return grouped;
  });

  function handleSongClick(songId: string) {
    onSelectSong(songId);
    onClose();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Backdrop -->
{#if isOpen}
  <button
    class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
    onclick={onClose}
    aria-label="Close menu"
    tabindex="-1"
  ></button>
{/if}

<!-- Sidebar -->
<aside
  class="fixed top-0 left-0 z-50 h-full w-[85vw] max-w-[320px] transform bg-card shadow-2xl transition-transform duration-300 ease-out {isOpen
    ? 'translate-x-0'
    : '-translate-x-full'}"
>
  <div class="flex h-full flex-col">
    <!-- Header -->
    <header
      class="flex items-center justify-between border-b border-border/40 px-4 py-4 safe-top"
    >
      <div class="flex flex-col gap-1">
        <a
          href="/"
          class="flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase text-muted-foreground transition-colors hover:text-primary"
        >
          <House class="h-3 w-3" />
          Alemar Capoeira
        </a>
        <h2 class="font-impact text-2xl tracking-[0.08em] text-foreground">Cântece</h2>
      </div>
      <button
        onclick={onClose}
        class="btn-icon h-9 w-9"
        aria-label="Close menu"
      >
        <X class="h-5 w-5" />
      </button>
    </header>

    <!-- Song List -->
    <nav
      class="flex-1 overflow-y-auto overscroll-contain px-2 py-2 safe-bottom"
    >
      <Accordion type="multiple" class="w-full">
        {#each CATEGORY_ORDER as category (category)}
          {@const categorySongs = songsByCategory[category]}
          {#if categorySongs.length > 0}
            <AccordionItem value={category} class="border-b-0">
              <AccordionTrigger class="px-2 py-3 hover:no-underline">
                <div class="flex items-center gap-2">
                  <!-- Rotated diamond instead of circle dot -->
                  <span
                    class="inline-block h-2 w-2 rotate-45 {category === 'ANGOLA'
                      ? 'bg-amber-500'
                      : category === 'REGIONAL'
                        ? 'bg-emerald-500'
                        : category === 'SAMBA'
                          ? 'bg-rose-500'
                          : 'bg-slate-400'}"
                  ></span>
                  <span class="label-xs">{CATEGORY_LABELS[category]}</span>
                  <span class="text-xs text-muted-foreground">({categorySongs.length})</span>
                </div>
              </AccordionTrigger>
              <AccordionContent class="pb-2">
                <ul class="space-y-px">
                  {#each categorySongs as song (song.id)}
                    <li>
                      <button
                        onclick={() => handleSongClick(song.id)}
                        class="w-full px-4 py-2.5 text-left text-sm transition-colors border-l-2 {currentSongId === song.id
                          ? 'border-primary bg-primary/10 font-medium text-primary'
                          : 'border-transparent text-foreground/70 hover:bg-muted hover:text-foreground'}"
                      >
                        <span class="block">{song.title}</span>
                        {#if song.tags.length > 0}
                          <div class="mt-1.5 flex flex-wrap gap-1">
                            {#each song.tags as tag (tag)}
                              <span
                                class="tag-chip"
                              >
                                #{tag}
                              </span>
                            {/each}
                          </div>
                        {/if}
                      </button>
                    </li>
                  {/each}
                </ul>
              </AccordionContent>
            </AccordionItem>
          {/if}
        {/each}
      </Accordion>
    </nav>
  </div>
</aside>
