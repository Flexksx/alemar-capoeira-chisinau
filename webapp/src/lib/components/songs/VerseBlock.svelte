<script lang="ts">
	import { VerseType, type Verse } from '$lib/resources/song/types';
	import Music from '@lucide/svelte/icons/music';

	interface Props {
		verse: Verse;
	}

	let { verse }: Props = $props();

	const isChorus = $derived(verse.type === VerseType.Chorus);
</script>

<div
	class="relative px-4 py-3 transition-colors {isChorus
		? 'border-l-2 border-primary bg-primary/5'
		: 'hover:bg-muted/30'}"
>
	<div class="mb-2 flex items-center">
		<span class="label-xs flex items-center gap-1.5">
			{#if isChorus}
				<Music class="h-3 w-3 text-primary" />
				Refren
			{:else}
				Vers
			{/if}
		</span>
	</div>

	<p class="whitespace-pre-line text-base leading-relaxed {isChorus ? 'font-medium text-foreground' : 'text-foreground/80'}">
		{verse.text}
	</p>
</div>
