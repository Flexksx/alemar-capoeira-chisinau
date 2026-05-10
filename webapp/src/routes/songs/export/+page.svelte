<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { CATEGORY_LABELS } from '$lib/resources/song/types';

	let { data }: { data: PageData } = $props();

	onMount(() => {
		const timer = window.setTimeout(() => window.print(), 250);
		return () => window.clearTimeout(timer);
	});
</script>

<svelte:head>
	<title>Alemar Songbook Export</title>
</svelte:head>

<main class="mx-auto max-w-4xl px-6 py-8 print:max-w-none print:px-0 print:py-0">
	<header class="mb-8 border-b border-border pb-4 print-songbook-header">
		<h1 class="font-display text-3xl font-bold text-foreground">Alemar Capoeira Songbook</h1>
		<p class="mt-2 text-sm text-muted-foreground">
			{data.songs.length} songs - generated from the current library
		</p>
		<div class="mt-4 no-print">
			<button
				type="button"
				onclick={() => window.print()}
				class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
			>
				Print / Save as PDF
			</button>
		</div>
	</header>

	<section class="songbook-grid grid gap-6 md:grid-cols-2 print:grid-cols-2 print:gap-5">
		{#each data.songs as song, songIndex (song.id)}
			<article class="songbook-song rounded-xl border border-border bg-card p-6">
				<header class="mb-4 border-b border-border pb-3">
					<p class="text-xs uppercase tracking-wide text-muted-foreground">
						#{songIndex + 1} - {CATEGORY_LABELS[song.category]}
					</p>
					<h2 class="font-display text-2xl font-semibold text-card-foreground">{song.title}</h2>
					{#if song.author}
						<p class="mt-1 text-sm text-muted-foreground">By {song.author}</p>
					{/if}
					{#if song.tags.length > 0}
						<p class="mt-2 text-xs text-muted-foreground">Tags: {song.tags.join(', ')}</p>
					{/if}
				</header>

				<div class="space-y-4">
					{#each song.structure as verseId, index (`${song.id}-${verseId}-${index}`)}
						{@const variants = song.verses[verseId]}
						{@const verse = variants?.find(v => v.language === 'pt')}
						{#if verse}
							<section class="songbook-verse">
								<p
									class="whitespace-pre-line leading-relaxed text-card-foreground"
									class:font-semibold={verse.type === 'chorus'}
								>
									{verse.text}
								</p>
							</section>
						{/if}
					{/each}
				</div>
			</article>
		{/each}
	</section>

	<div class="print-page-number" aria-hidden="true"></div>
</main>
