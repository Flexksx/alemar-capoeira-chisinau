<script lang="ts">
	import { Language, type Verse } from '$lib/resources/song/types';
	import VerseBlock from './VerseBlock.svelte';

	interface Props {
		structure: string[];
		verses: Record<string, Verse[]>;
		selectedLanguage: Language;
	}

	let { structure, verses, selectedLanguage }: Props = $props();

	function visibleLanguage(variants: Verse[]): Language {
		return variants.some((v) => v.language === selectedLanguage)
			? selectedLanguage
			: Language.Portuguese;
	}
</script>

<div class="flex-1 min-h-0 overflow-y-scroll px-2">
	<div class="space-y-3 py-4">
		{#each structure as verseId, index (`${verseId}-${index}`)}
			{@const variants = verses[verseId]}
			{@const visible = visibleLanguage(variants)}
			{#each variants as variant (variant.language)}
				<div class={variant.language === visible ? '' : 'hidden'}>
					<VerseBlock verse={variant} />
				</div>
			{/each}
		{/each}
	</div>
</div>
