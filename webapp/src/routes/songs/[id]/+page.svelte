<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "$lib/components/ui/carousel";
  import { type CarouselAPI } from "$lib/components/ui/carousel/context";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import SongCard from "$lib/components/songs/SongCard.svelte";
  import SearchModal from "$lib/components/SearchModal.svelte";
  import songsData from "$lib/data/songs.json";
  import type { Song } from "$lib/types";
  import { sortSongsByCategory } from "$lib/utils";
  import Menu from "@lucide/svelte/icons/menu";
  import Search from "@lucide/svelte/icons/search";
  import FileDown from "@lucide/svelte/icons/file-down";
  import ChevronLeft from "@lucide/svelte/icons/chevron-left";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  const songs: Song[] = sortSongsByCategory(songsData as unknown as Song[]);

  let sidebarOpen = $state(false);
  let searchOpen = $state(false);
  let carouselApi = $state<CarouselAPI>();
  let currentIndex = $state(0);
  let canScrollPrev = $state(false);
  let canScrollNext = $state(false);

  function setApi(api: CarouselAPI | undefined) {
    carouselApi = api;
    if (api) {
      api.on("select", () => {
        currentIndex = api.selectedScrollSnap();
        canScrollPrev = api.canScrollPrev();
        canScrollNext = api.canScrollNext();
        const snapId = songs[currentIndex]?.id;
        if (snapId && snapId !== page.params.id) {
          void goto(`/songs/${snapId}`, {
            replaceState: true,
            noScroll: true,
            keepFocus: true,
          });
        }
      });
      currentIndex = api.selectedScrollSnap();
      canScrollPrev = api.canScrollPrev();
      canScrollNext = api.canScrollNext();
    }
  }

  function selectSong(songId: string) {
    void goto(`/songs/${songId}`);
  }

  function scrollPrev() {
    carouselApi?.scrollPrev();
  }

  function scrollNext() {
    carouselApi?.scrollNext();
  }

  function exportSongbookPdf() {
    void goto("/songs/export");
  }

  const currentSong = $derived(songs[currentIndex]);

  $effect(() => {
    const id = page.params.id;
    const api = carouselApi;
    if (!id || !api || songs.length === 0) return;

    const index = songs.findIndex((s) => s.id === id);
    if (index === -1) {
      void goto(`/songs/${songs[0].id}`, {
        replaceState: true,
        noScroll: true,
        keepFocus: true,
      });
      return;
    }

    if (api.selectedScrollSnap() !== index) {
      api.scrollTo(index);
    }
  });
</script>

<svelte:head>
  <title>
    {currentSong ? `Alemar — ${currentSong.title}` : "Alemar Capoeira - Cântece"}
  </title>
</svelte:head>

<!-- Header -->
<header
  class="fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border safe-top"
>
  <div class="flex items-center justify-between px-2 py-2">
    <button
      onclick={() => (sidebarOpen = true)}
      class="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent"
      aria-label="Open menu"
    >
      <Menu class="h-6 w-6" />
    </button>

    <!-- Song indicator -->
    <div class="flex items-center gap-2">
      <button
        onclick={scrollPrev}
        disabled={!canScrollPrev}
        class="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30"
        aria-label="Previous song"
      >
        <ChevronLeft class="h-5 w-5" />
      </button>
      <span
        class="min-w-[4rem] text-center text-sm font-medium text-muted-foreground"
      >
        {currentIndex + 1} / {songs.length}
      </span>
      <button
        onclick={scrollNext}
        disabled={!canScrollNext}
        class="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30"
        aria-label="Next song"
      >
        <ChevronRight class="h-5 w-5" />
      </button>
    </div>

    <div class="flex items-center gap-1">
      <button
        onclick={exportSongbookPdf}
        class="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent"
        aria-label="Export songs as PDF"
      >
        <FileDown class="h-5 w-5" />
      </button>
      <ThemeToggle />
    </div>
  </div>
</header>

<!-- Main Content -->
<main
  class="h-dvh overflow-hidden pt-[calc(60px+env(safe-area-inset-top))] pb-[80px] safe-bottom"
>
  <Carousel
    class="h-full"
    opts={{
      align: "start",
      loop: false,
      dragFree: false,
    }}
    {setApi}
  >
    <CarouselContent class="h-full -ml-0">
      {#each songs as song (song.id)}
        <CarouselItem class="h-full pl-0">
          <SongCard {song} />
        </CarouselItem>
      {/each}
    </CarouselContent>
  </Carousel>
</main>

<!-- Search FAB -->
<button
  onclick={() => (searchOpen = true)}
  class="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 safe-bottom"
  aria-label="Search songs"
>
  <Search class="h-6 w-6" />
</button>

<!-- Sidebar -->
<Sidebar
  {songs}
  isOpen={sidebarOpen}
  onClose={() => (sidebarOpen = false)}
  onSelectSong={selectSong}
  currentSongId={currentSong?.id}
/>

<!-- Search Modal -->
<SearchModal
  {songs}
  isOpen={searchOpen}
  onClose={() => (searchOpen = false)}
  onSelectSong={selectSong}
/>
