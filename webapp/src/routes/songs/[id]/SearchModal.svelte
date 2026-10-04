<script lang="ts">
	import { createSongSearch, type Song } from '@alemar/songs';
	import { Dialog, DialogContent, DialogTitle } from '@alemar/ui/dialog';
	import { Input } from '@alemar/ui/input';
	import Search from '@lucide/svelte/icons/search';
	import CategoryBadge from './CategoryBadge.svelte';
	import { songNumber } from './category';

	interface Props {
		songs: Song[];
		isOpen: boolean;
		onClose: () => void;
		onSelectSong: (songId: string) => void;
	}

	let { songs, isOpen, onClose, onSelectSong }: Props = $props();

	let query = $state('');

	const searcher = $derived(createSongSearch(songs));
	const indexOf = $derived(new Map(songs.map((song, index) => [song.id, index])));
	const results = $derived(
		query.trim() ? searcher.search(query).map((result) => result.song) : songs
	);

	// Highlighted result for keyboard use. A new query starts again from the top result.
	let active = $derived.by(() => {
		void query;
		return 0;
	});

	$effect(() => {
		document
			.getElementById(`search-result-${results[active]?.id}`)
			?.scrollIntoView({ block: 'nearest' });
	});

	const handleSelect = (songId: string) => {
		query = '';
		onSelectSong(songId);
		onClose();
	};

	const handleInputKeydown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			active = Math.min(active + 1, results.length - 1);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			active = Math.max(active - 1, 0);
		} else if (e.key === 'Enter' && results[active]) {
			e.preventDefault();
			handleSelect(results[active].id);
		}
	};

	const handleOpenChange = (open: boolean) => {
		if (!open) {
			query = '';
			onClose();
		}
	};
</script>

<Dialog open={isOpen} onOpenChange={handleOpenChange}>
	<DialogContent class="p-0" closeLabel="Închide căutarea">
		<div class="border-b border-border p-4 pr-14">
			<DialogTitle class="mb-3">Caută cântece</DialogTitle>
			<div class="relative">
				<Search class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
				<Input
					bind:value={query}
					onkeydown={handleInputKeydown}
					type="search"
					placeholder="Titlu, autor sau vers"
					class="pl-9"
				/>
			</div>
		</div>

		<div class="min-h-0 flex-1 overflow-y-auto overscroll-contain">
			{#if results.length === 0}
				<p class="px-4 py-10 text-center text-muted-foreground">
					Niciun cântec găsit pentru: {query}
				</p>
			{:else}
				<ol>
					{#each results as song, i (song.id)}
						<li>
							<button
								id="search-result-{song.id}"
								onclick={() => handleSelect(song.id)}
								class="flex w-full items-center gap-3 border-b border-border px-4 py-3 text-left transition-colors hover:bg-foreground/5 focus-visible:bg-foreground/10 focus-visible:outline-none {i ===
								active
									? 'bg-foreground/10'
									: ''}"
							>
								<span class="w-5 shrink-0 font-display text-sm tabular-nums">
									{songNumber(indexOf.get(song.id) ?? 0)}
								</span>
								<span class="min-w-0 flex-1">
									<span class="block truncate font-medium">{song.title}</span>
									{#if song.author}
										<span class="block truncate text-xs opacity-70">{song.author}</span>
									{/if}
								</span>
								<CategoryBadge category={song.category} size="sm" />
							</button>
						</li>
					{/each}
				</ol>
			{/if}
		</div>
	</DialogContent>
</Dialog>
