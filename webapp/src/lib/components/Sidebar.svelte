<script lang="ts">
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$lib/components/ui/accordion';
	import { CATEGORY_LABELS, CATEGORY_ORDER, type Category, type Song } from '$lib/types';
	import X from '@lucide/svelte/icons/x';

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
			UNSPECIFIED: []
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
		if (e.key === 'Escape') {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Backdrop -->
{#if isOpen}
	<button
		class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
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
		<header class="flex items-center justify-between border-b border-border px-4 py-4 safe-top">
			<h2 class="font-display text-xl font-bold text-foreground">Cântece</h2>
			<button
				onclick={onClose}
				class="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
				aria-label="Close menu"
			>
				<X class="h-5 w-5" />
			</button>
		</header>

		<!-- Song List -->
		<nav class="flex-1 overflow-y-auto overscroll-contain px-2 py-2 safe-bottom">
			<Accordion type="multiple" class="w-full">
				{#each CATEGORY_ORDER as category}
					{@const categorySongs = songsByCategory[category]}
					{#if categorySongs.length > 0}
						<AccordionItem value={category} class="border-b-0">
							<AccordionTrigger class="px-2 py-3 hover:no-underline">
								<div class="flex items-center gap-2">
									<span
										class="h-2 w-2 rounded-full {category === 'ANGOLA'
											? 'bg-amber-500'
											: category === 'REGIONAL'
												? 'bg-emerald-500'
												: category === 'SAMBA'
													? 'bg-rose-500'
													: 'bg-slate-400'}"
									></span>
									<span class="font-medium">{CATEGORY_LABELS[category]}</span>
									<span class="text-xs text-muted-foreground">({categorySongs.length})</span>
								</div>
							</AccordionTrigger>
							<AccordionContent class="pb-2">
								<ul class="space-y-1">
									{#each categorySongs as song}
										<li>
											<button
												onclick={() => handleSongClick(song.id)}
												class="w-full rounded-lg px-4 py-2.5 text-left text-sm transition-colors {currentSongId ===
												song.id
													? 'bg-primary/10 font-medium text-primary'
													: 'text-foreground hover:bg-accent'}"
											>
												{song.title}
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

