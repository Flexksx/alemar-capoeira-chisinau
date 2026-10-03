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
</script>

<div class="space-y-6">
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
