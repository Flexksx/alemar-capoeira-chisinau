<script lang="ts">
	import { Language, type Verse } from '$lib/resources/song/types';
	import { getVerseForLanguage } from '$lib/resources/song/utils';
	import VerseBlock from './VerseBlock.svelte';

	interface Props {
		structure: string[];
		verses: Record<string, Verse[]>;
		selectedLanguage: Language;
	}

	let { structure, verses, selectedLanguage }: Props = $props();
</script>

<div class="flex-1 min-h-0 overflow-y-scroll px-2">
	<div class="space-y-3 py-4">
		{#each structure as verseId, index (`${verseId}-${index}`)}
			{@const variants = verses[verseId]}
			{@const verse = getVerseForLanguage(variants, selectedLanguage) ?? getVerseForLanguage(variants, Language.Portuguese)}
			{#if verse}
				<VerseBlock {verse} />
			{/if}
		{/each}
	</div>
</div>
