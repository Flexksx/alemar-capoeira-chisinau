<script lang="ts">
	import type { Language, Verse } from '@alemar/songs';
	import VerseBlock from './VerseBlock.svelte';

	interface Props {
		structure: string[];
		verses: Record<string, Verse[]>;
		selectedLanguage: Language;
	}

	let { structure, verses, selectedLanguage }: Props = $props();

	const visibleLanguage = (variants: Verse[]): Language => {
		return variants.some((v) => v.language === selectedLanguage) ? selectedLanguage : 'pt';
	};

	// Number each solo verse occurrence. The refrain has no number.
	const verseNumbers = $derived.by(() => {
		let count = 0;
		return structure.map((id) => (verses[id][0].type === 'chorus' ? undefined : ++count));
	});
</script>

<div class="space-y-5">
	{#each structure as verseId, index (`${verseId}-${index}`)}
		{@const variants = verses[verseId]}
		{@const visible = visibleLanguage(variants)}
		{#each variants as variant (variant.language)}
			<div class={variant.language === visible ? '' : 'hidden'}>
				<VerseBlock verse={variant} number={verseNumbers[index]} />
			</div>
		{/each}
	{/each}
</div>
