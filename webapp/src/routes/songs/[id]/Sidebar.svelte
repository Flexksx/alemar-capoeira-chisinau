<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '@alemar/ui/accordion';
	import { CATEGORIES, CATEGORY_LABELS, type Category, type Song } from '@alemar/songs';
	import X from '@lucide/svelte/icons/x';
	import House from '@lucide/svelte/icons/house';
	import { Button } from '@alemar/ui/button';

	interface Props {
		songs: Song[];
		isOpen: boolean;
		onClose: () => void;
		onSelectSong: (songId: string) => void;
		currentSongId?: string;
	}

	let { songs, isOpen, onClose, onSelectSong, currentSongId }: Props = $props();

	const currentCategory = $derived(songs.find((s) => s.id === currentSongId)?.category);

	// Open the current song's category. The user can still open or close others.
	let openCategories = $derived<string[]>(currentCategory ? [currentCategory] : []);

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

	const handleSongClick = (songId: string) => {
		onSelectSong(songId);
		onClose();
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose();
		}
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<button
		class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden"
		onclick={onClose}
		aria-label="Close menu"
		tabindex="-1"
	></button>
{/if}

<aside
	class="fixed top-0 left-0 z-50 h-full w-[85vw] max-w-[320px] transform bg-card transition-transform duration-300 ease-out lg:z-30 lg:w-72 lg:translate-x-0 lg:border-r lg:border-border/60 lg:shadow-none {isOpen
		? 'translate-x-0 shadow-2xl'
		: '-translate-x-full'}"
>
	<div class="flex h-full flex-col">
		<header
			class="flex items-center justify-between border-b border-border/60 px-4 py-4 safe-top lg:h-[calc(3.5rem+1px)] lg:py-0"
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
			<Button
				variant="ghost"
				size="icon"
				onclick={onClose}
				class="lg:hidden"
				aria-label="Închide lista"
			>
				<X class="h-5 w-5" />
			</Button>
		</header>

		<nav class="flex-1 overflow-y-auto overscroll-contain px-2 py-2 safe-bottom">
			<Accordion
				type="multiple"
				class="w-full"
				bind:value={() => openCategories, (v) => (openCategories = v)}
			>
				{#each CATEGORIES as category (category)}
					{@const categorySongs = songsByCategory[category]}
					{#if categorySongs.length > 0}
						<AccordionItem value={category} class="border-b-0">
							<AccordionTrigger class="px-2 py-3 hover:no-underline">
								<div class="flex items-center gap-2">
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
											<a
												href="/songs/{song.id}"
												aria-current={currentSongId === song.id ? 'page' : undefined}
												onclick={(e) => {
													e.preventDefault();
													handleSongClick(song.id);
												}}
												class="block w-full px-4 py-2.5 text-left text-sm transition-colors border-l-2 {currentSongId ===
												song.id
													? 'border-primary bg-primary/10 font-medium text-primary'
													: 'border-transparent text-foreground/70 hover:bg-muted hover:text-foreground'}"
											>
												{song.title}
											</a>
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
