<script lang="ts">
	import { useLanguageStore } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { audiences, type Audience } from '$lib/audiences';
	import { audiencePhotos } from '$lib/audiencePhotos';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let { exclude, title }: { exclude?: Audience; title?: string } = $props();

	const lang = useLanguageStore();

	const shown = $derived(audiences.filter((audience) => audience !== exclude));
</script>

<!-- Each card links to the page for one audience, so that search engines and visitors find it from the home page. -->
<section class="light bg-background py-24 text-foreground md:py-32" id="audiences">
	<div class="mx-auto max-w-6xl px-5 md:px-10">
		<div use:reveal>
			<h2 class="title-lg">{title ?? lang.t.audiences.title}</h2>
			{#if !exclude}
				<p class="mt-4 text-lg font-medium text-foreground/80">{lang.t.audiences.subtitle}</p>
			{/if}
		</div>

		<ul
			class="mt-14 grid gap-8 md:gap-6 {shown.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}"
		>
			{#each shown as audience, i (audience)}
				{@const card = lang.t.audiences.cards[audience]}
				<li use:reveal={{ delay: i * 100 }}>
					<a href="/{lang.current}/{audience}" class="group flex h-full flex-col">
						<img
							src={audiencePhotos[audience]}
							alt=""
							loading="lazy"
							class="aspect-[4/3] w-full object-cover"
						/>
						<h3 class="mt-5 font-display text-3xl leading-none uppercase md:text-4xl">
							{card.title}
						</h3>
						<p class="mt-3 flex-1 text-base leading-relaxed text-foreground/80">{card.body}</p>
						<span class="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold underline-link">
							{lang.t.audiences.more}
							<ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
