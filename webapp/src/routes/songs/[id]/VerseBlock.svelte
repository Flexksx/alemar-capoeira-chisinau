<script lang="ts">
	import type { Verse } from '@alemar/songs';
	import Repeat from '@lucide/svelte/icons/repeat';

	interface Props {
		verse: Verse;
		/** Position of a solo verse in the song, starting at 1. Not used for the refrain. */
		number?: number;
	}

	let { verse, number }: Props = $props();
</script>

{#if verse.type === 'chorus'}
	<!-- The refrain is what the whole roda sings, so it stands out from the solo verses. -->
	<div class="border-l-4 border-primary bg-primary/15 px-4 py-3 lg:px-5 lg:py-4">
		<span class="mb-1.5 flex items-center gap-1.5 text-label">
			<Repeat class="size-3.5" />
			Refren
		</span>
		<p class="text-lg leading-snug font-semibold whitespace-pre-line lg:text-xl">
			{verse.text}
		</p>
	</div>
{:else}
	<div class="flex gap-3 px-1 lg:gap-4">
		<span
			class="w-6 shrink-0 pt-1 text-right font-display text-sm text-muted-foreground tabular-nums"
			aria-hidden="true"
		>
			{number}
		</span>
		<p class="text-lg leading-relaxed whitespace-pre-line lg:text-xl">
			{verse.text}
		</p>
	</div>
{/if}
