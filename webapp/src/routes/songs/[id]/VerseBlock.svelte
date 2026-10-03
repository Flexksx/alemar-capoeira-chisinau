<script lang="ts">
	import type { Verse } from '@alemar/songs';
	import Repeat from '@lucide/svelte/icons/repeat';

	interface Props {
		verse: Verse;
	}

	let { verse }: Props = $props();

	const isChorus = $derived(verse.type === 'chorus');
</script>

{#if isChorus}
	<div class="border-l-2 border-primary py-1 pl-4">
		<span
			class="mb-1 flex items-center gap-1.5 text-[11px] font-medium tracking-[0.2em] text-primary uppercase"
		>
			<Repeat class="size-3" />
			Refren
		</span>
		<p class="text-lg leading-relaxed font-medium whitespace-pre-line text-foreground lg:text-xl">
			{verse.text}
		</p>
	</div>
{:else}
	<p class="pl-[18px] text-lg leading-relaxed whitespace-pre-line text-foreground/85 lg:text-xl">
		{verse.text}
	</p>
{/if}
