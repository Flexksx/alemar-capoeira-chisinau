<script lang="ts">
	import { useLanguageStore } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import groupPhoto from '$lib/assets/photos/20250815_195516.jpg';
	import Quote from '@lucide/svelte/icons/quote';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	const lang = useLanguageStore();
</script>

<section class="light bg-background py-24 text-foreground md:py-36" id="about">
	<div class="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-12 md:gap-10 md:px-10">
		<div class="md:col-span-7" use:reveal>
			<h2 class="title-lg">
				{lang.t.about.title}
			</h2>

			<blockquote class="mt-10 flex gap-4">
				<Quote class="size-9 shrink-0 fill-current text-muted-foreground" aria-hidden="true" />
				<p class="text-2xl leading-snug font-medium text-balance md:text-3xl">
					{lang.t.about.quote}
				</p>
			</blockquote>

			<p class="mt-8 max-w-prose text-lg leading-relaxed text-foreground/80">
				{lang.t.about.body}
			</p>

			<p class="mt-8 text-lg font-semibold">{lang.t.about.highlight}</p>

			<a
				href="/{lang.current}/about"
				class="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold underline-link"
			>
				{lang.t.about.more}
				<ArrowRight class="size-4" />
			</a>
		</div>

		<div class="md:col-span-5 md:pt-24" use:reveal={{ delay: 150 }}>
			<!-- Offset colour block behind the photo, like a layered print. -->
			<div class="relative">
				<div
					class="absolute inset-0 translate-x-3 translate-y-3 bg-sun-orange md:translate-x-5 md:translate-y-5"
				></div>
				<img
					src={groupPhoto}
					alt="Alemar Capoeira Chișinău"
					class="relative aspect-[4/5] w-full object-cover object-center"
				/>
			</div>
		</div>
	</div>
</section>
