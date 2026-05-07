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
	class="group relative px-4 py-3 transition-colors {isChorus
		? 'border-l-2 border-primary bg-primary/5'
		: 'hover:bg-muted/30'}"
>
	<!-- Verse type indicator -->
	<div class="mb-2 flex items-center justify-between">
		<span class="label-xs flex items-center gap-1.5">
			{#if isChorus}
				<Music class="h-3 w-3 text-primary" />
				Refren
			{:else}
				Vers
			{/if}
		</span>

		{#if hasLocalization}
			<Popover bind:open={popoverOpen}>
				<PopoverTrigger>
					<button
						class="btn-icon h-7 w-7"
						aria-label="Change language"
					>
						<Languages class="h-4 w-4" />
					</button>
				</PopoverTrigger>
				<PopoverContent class="w-44 p-1 rounded-none" align="end">
					<div class="flex flex-col gap-0.5">
						<button
							onclick={() => selectMode('original')}
							class="flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors {showMode === 'original'
								? 'bg-primary/10 text-primary'
								: 'hover:bg-muted'}"
						>
							<span class="text-xs">🇧🇷</span>
							Original
						</button>
						{#if hasTranscription}
							<button
								onclick={() => selectMode('transcription')}
								class="flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors {showMode === 'transcription'
									? 'bg-primary/10 text-primary'
									: 'hover:bg-muted'}"
							>
								<span class="text-xs">📖</span>
								Transcriere
							</button>
						{/if}
						{#if hasTranslation}
							<button
								onclick={() => selectMode('translation')}
								class="flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors {showMode === 'translation'
									? 'bg-primary/10 text-primary'
									: 'hover:bg-muted'}"
							>
								<span class="text-xs">🇷🇴</span>
								Traducere
							</button>
						{/if}
					</div>
				</PopoverContent>
			</Popover>
		{/if}
	</div>

	<!-- Verse text -->
	<p class="whitespace-pre-line text-base leading-relaxed {isChorus ? 'font-medium text-foreground' : 'text-foreground/80'}">
		{displayText}
	</p>

	<!-- Mode indicator -->
	{#if showMode !== 'original'}
		<div class="label-xs mt-2">
			{showMode === 'transcription' ? '📖 Transcriere' : '🇷🇴 Traducere'}
		</div>
	{/if}
</div>
