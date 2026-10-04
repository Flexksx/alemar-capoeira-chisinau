<script lang="ts">
	import { languagesOf, LANGUAGE_LABELS, type Language, type Song } from '@alemar/songs';
	import { ToggleGroup, ToggleGroupItem } from '@alemar/ui/toggle-group';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Music from '@lucide/svelte/icons/music';
	import Speech from '@lucide/svelte/icons/speech';
	import Languages from '@lucide/svelte/icons/languages';
	import type { Component } from 'svelte';
	import CategoryBadge from './CategoryBadge.svelte';
	import SongVerses from './SongVerses.svelte';
	import { songNumber } from './category';

	interface Props {
		song: Song;
		index: number;
		previous?: Song;
		next?: Song;
		selectedLanguage: Language;
	}

	let { song, index, previous, next, selectedLanguage = $bindable() }: Props = $props();

	const languageIcons: Record<Language, Component> = {
		pt: Music,
		ro: Speech,
		'ro-translation': Languages
	};

	const songLanguages = $derived(languagesOf(song));
	const hasMultipleLanguages = $derived(songLanguages.length > 1);
</script>

<article class="h-full overflow-y-auto overscroll-contain">
	<div class="mx-auto w-full max-w-2xl px-4 pt-6 pb-10 lg:px-8 lg:pt-14">
		<header class="mb-8 lg:mb-12">
			<div class="mb-4 flex items-center gap-3">
				<span class="font-display text-xl leading-none text-muted-foreground">
					{songNumber(index)}
				</span>
				<CategoryBadge category={song.category} />
				{#if song.author}
					<span class="text-label text-muted-foreground">{song.author}</span>
				{/if}
			</div>

			<h1
				class="font-display text-5xl leading-[0.92] text-balance uppercase sm:text-6xl lg:text-7xl"
			>
				{song.title}
			</h1>

			{#if song.tags.length > 0}
				<p class="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-label text-muted-foreground">
					{#each song.tags as tag (tag)}
						<span>{tag}</span>
					{/each}
				</p>
			{/if}

			{#if hasMultipleLanguages}
				<ToggleGroup
					type="single"
					class="mt-6 grid w-full grid-cols-3 sm:inline-flex sm:w-fit"
					aria-label="Limba versurilor"
					bind:value={
						() => selectedLanguage,
						(v) => {
							// A single toggle group clears its value when the active item is pressed again.
							if (v) selectedLanguage = v as Language;
						}
					}
				>
					{#each songLanguages as language (language)}
						{@const Icon = languageIcons[language]}
						<ToggleGroupItem value={language} tone="brand" class="px-2 sm:px-3">
							<Icon />
							{LANGUAGE_LABELS[language].label}
						</ToggleGroupItem>
					{/each}
				</ToggleGroup>
			{/if}
		</header>

		<SongVerses structure={song.structure} verses={song.verses} {selectedLanguage} />

		<nav
			class="mt-14 grid grid-cols-2 border-t border-border"
			aria-label="Cântecul anterior și următor"
		>
			{#if previous}
				<a
					href="/songs/{previous.id}"
					class="group flex flex-col gap-1 py-4 pr-4 transition-colors hover:text-foreground"
				>
					<span class="flex items-center gap-1.5 text-label text-muted-foreground">
						<ArrowLeft class="size-3.5" /> Anterior
					</span>
					<span
						class="line-clamp-2 font-semibold underline-offset-4 group-hover:underline group-hover:decoration-primary group-hover:decoration-2"
						>{previous.title}</span
					>
				</a>
			{/if}
			{#if next}
				<a
					href="/songs/{next.id}"
					class="group col-start-2 flex flex-col items-end gap-1 py-4 pl-4 text-right transition-colors"
				>
					<span class="flex items-center gap-1.5 text-label text-muted-foreground">
						Următor <ArrowRight class="size-3.5" />
					</span>
					<span
						class="line-clamp-2 font-semibold underline-offset-4 group-hover:underline group-hover:decoration-primary group-hover:decoration-2"
						>{next.title}</span
					>
				</a>
			{/if}
		</nav>
	</div>
</article>
