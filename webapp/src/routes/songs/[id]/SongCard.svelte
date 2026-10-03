<script lang="ts">
	import { languagesOf, LANGUAGE_LABELS, type Language, type Song } from '@alemar/songs';
	import CategoryBadge from './CategoryBadge.svelte';
	import SongVerses from './SongVerses.svelte';
	import { ToggleGroup, ToggleGroupItem } from '@alemar/ui/toggle-group';
	import Music from '@lucide/svelte/icons/music';
	import Speech from '@lucide/svelte/icons/speech';
	import Languages from '@lucide/svelte/icons/languages';
	import type { Component } from 'svelte';

	interface Props {
		song: Song;
		selectedLanguage: Language;
	}

	let { song, selectedLanguage = $bindable() }: Props = $props();

	const languageIcons: Record<Language, Component> = {
		pt: Music,
		ro: Speech,
		'ro-translation': Languages
	};

	const songLanguages = $derived(languagesOf(song));
	const hasMultipleLanguages = $derived(songLanguages.length > 1);
</script>

<article class="h-full overflow-y-auto overscroll-contain">
	<div class="mx-auto w-full max-w-2xl px-4 pt-6 pb-16 lg:px-8 lg:pt-12">
		<header class="mb-6 lg:mb-10">
			<div class="mb-3 flex items-center gap-3">
				<CategoryBadge category={song.category} size="sm" />
				{#if song.author}
					<span class="label-xs">{song.author}</span>
				{/if}
			</div>

			<h1
				class="font-impact text-4xl leading-[0.95] tracking-[0.03em] text-balance text-foreground lg:text-6xl"
			>
				{song.title}
			</h1>

			{#if song.tags.length > 0}
				<p class="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
					{#each song.tags as tag (tag)}
						<span>#{tag}</span>
					{/each}
				</p>
			{/if}

			{#if hasMultipleLanguages}
				<ToggleGroup
					type="single"
					class="mt-5"
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
						<ToggleGroupItem value={language}>
							<Icon />
							{LANGUAGE_LABELS[language].label}
						</ToggleGroupItem>
					{/each}
				</ToggleGroup>
			{/if}
		</header>

		<SongVerses structure={song.structure} verses={song.verses} {selectedLanguage} />
	</div>
</article>
