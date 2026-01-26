<script lang="ts">
	import type { Verse } from '$lib/types';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover';
	import Languages from '@lucide/svelte/icons/languages';
	import Music from '@lucide/svelte/icons/music';

	interface Props {
		verse: Verse;
		verseId: string;
		language?: string;
	}

	let { verse, verseId, language = 'ro' }: Props = $props();

	let showMode: 'original' | 'transcription' | 'translation' = $state('original');
	let popoverOpen = $state(false);

	const localization = $derived(verse.localizations?.[language]);
	const hasLocalization = $derived(!!localization);
	const hasTranscription = $derived(!!localization?.transcription);
	const hasTranslation = $derived(!!localization?.translation);

	function selectMode(mode: 'original' | 'transcription' | 'translation') {
		showMode = mode;
		popoverOpen = false;
	}

	const displayText = $derived.by(() => {
		if (showMode === 'transcription' && hasTranscription) {
			return localization!.transcription!;
		}
		if (showMode === 'translation' && hasTranslation) {
			return localization!.translation!;
		}
		return verse.pt;
	});

	const isChorus = $derived(verse.type === 'chorus');
</script>

<div
	class="group relative rounded-xl px-4 py-3 transition-colors {isChorus
		? 'bg-primary/5 border-l-4 border-primary/40'
		: 'hover:bg-muted/50'}"
>
	<!-- Verse type indicator -->
	<div class="mb-2 flex items-center justify-between">
		<span class="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
			{#if isChorus}
				<Music class="h-3 w-3" />
				Refren
			{:else}
				Vers
			{/if}
		</span>

		{#if hasLocalization}
			<Popover bind:open={popoverOpen}>
				<PopoverTrigger>
					<button
						class="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
						aria-label="Change language"
					>
						<Languages class="h-4 w-4" />
					</button>
				</PopoverTrigger>
				<PopoverContent class="w-48 p-1" align="end">
					<div class="flex flex-col gap-0.5">
						<button
							onclick={() => selectMode('original')}
							class="flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors {showMode ===
							'original'
								? 'bg-primary/10 text-primary'
								: 'hover:bg-accent'}"
						>
							<span class="flex h-5 w-5 items-center justify-center rounded text-xs font-bold">🇧🇷</span>
							Original
						</button>
						{#if hasTranscription}
							<button
								onclick={() => selectMode('transcription')}
								class="flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors {showMode ===
								'transcription'
									? 'bg-primary/10 text-primary'
									: 'hover:bg-accent'}"
							>
								<span class="flex h-5 w-5 items-center justify-center rounded text-xs font-bold">📖</span>
								Transcriere
							</button>
						{/if}
						{#if hasTranslation}
							<button
								onclick={() => selectMode('translation')}
								class="flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors {showMode ===
								'translation'
									? 'bg-primary/10 text-primary'
									: 'hover:bg-accent'}"
							>
								<span class="flex h-5 w-5 items-center justify-center rounded text-xs font-bold">🇷🇴</span>
								Traducere
							</button>
						{/if}
					</div>
				</PopoverContent>
			</Popover>
		{/if}
	</div>

	<!-- Verse text -->
	<p class="whitespace-pre-line text-base leading-relaxed {isChorus ? 'font-medium' : ''}">
		{displayText}
	</p>

	<!-- Mode indicator -->
	{#if showMode !== 'original'}
		<div class="mt-2 text-xs text-muted-foreground">
			{showMode === 'transcription' ? '📖 Transcriere' : '🇷🇴 Traducere'}
		</div>
	{/if}
</div>

