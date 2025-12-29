<script lang="ts">
	import type { Song } from '$lib/types';
	import CategoryBadge from './CategoryBadge.svelte';
	import VerseBlock from './VerseBlock.svelte';
	import User from '@lucide/svelte/icons/user';

	interface Props {
		song: Song;
		language?: string;
	}

	let { song, language = 'ro' }: Props = $props();
</script>

<article class="flex h-full flex-col">
	<!-- Song Header -->
	<header class="shrink-0 border-b border-border px-4 pb-4 pt-2">
		<div class="mb-2 flex items-start justify-between gap-2">
			<h1 class="font-display text-2xl font-bold leading-tight text-foreground">
				{song.title}
			</h1>
			<CategoryBadge category={song.category} size="sm" />
		</div>

		{#if song.author}
			<p class="flex items-center gap-1.5 text-sm text-muted-foreground">
				<User class="h-3.5 w-3.5" />
				{song.author}
			</p>
		{/if}

		{#if song.tags.length > 0}
			<div class="mt-2 flex flex-wrap gap-1.5">
				{#each song.tags as tag (tag)}
					<span class="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
						#{tag}
					</span>
				{/each}
			</div>
		{/if}
	</header>

	<!-- Song Content - Verses -->
	<div class="flex-1 overflow-y-auto overscroll-contain px-2 py-4">
		<div class="space-y-3">
			{#each song.structure as verseId, index (`${verseId}-${index}`)}
				{@const verse = song.verses[verseId]}
				{#if verse}
					<VerseBlock {verse} {verseId} {language} />
				{/if}
			{/each}
		</div>
	</div>
</article>

