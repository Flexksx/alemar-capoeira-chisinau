<script lang="ts">
	import { useLanguageStore, type Language } from '$lib/i18n.svelte';
	import { goto } from '$app/navigation';
	import { reveal } from '$lib/actions/reveal';
	import { Phone, Facebook, MapPin, User } from '@lucide/svelte';
	import alemArLogo from '$lib/assets/alemar-logo.png';

	let { data } = $props();
	const lang = useLanguageStore();

	const SITE = 'https://capoeira.md';
	const languages: Language[] = ['ro', 'ru', 'en'];

	type CardKey = 'karate' | 'judo' | 'taekwondo' | 'mma';
	const cardKeys: CardKey[] = ['karate', 'judo', 'taekwondo', 'mma'];
</script>

<svelte:head>
	<title>{lang.t.meta.aboutTitle}</title>
	<meta name="description" content={lang.t.meta.aboutDescription} />
	<link rel="canonical" href="{SITE}/{data.lang}/about" />

	<link rel="alternate" hreflang="ro" href="{SITE}/ro/about" />
	<link rel="alternate" hreflang="ru" href="{SITE}/ru/about" />
	<link rel="alternate" hreflang="en" href="{SITE}/en/about" />
	<link rel="alternate" hreflang="x-default" href="{SITE}/ro/about" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="{SITE}/{data.lang}/about" />
	<meta property="og:title" content={lang.t.meta.aboutTitle} />
	<meta property="og:description" content={lang.t.meta.aboutDescription} />
	<meta property="og:image" content="{SITE}/photos/group.jpg" />
	<meta property="og:site_name" content="Alemar Capoeira Chisinau" />
</svelte:head>

<div class="dark bg-background text-foreground min-h-dvh">
	<!-- Minimal header -->
	<header
		class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10"
		style="background: linear-gradient(to bottom, rgba(15,10,5,0.95) 0%, rgba(15,10,5,0.6) 100%); backdrop-filter: blur(4px)"
	>
		<a href="/{data.lang}">
			<img src={alemArLogo} alt="Alemar Capoeira" class="h-10 w-auto rounded-sm" />
		</a>

		<div class="flex items-center gap-1 border border-border/40 rounded-sm px-1 py-0.5">
			{#each languages as l (l)}
				<button
					onclick={() => goto(`/${l}/about`)}
					class="px-2 py-0.5 text-xs font-bold tracking-widest uppercase rounded-sm transition-colors cursor-pointer {data.lang === l
						? 'bg-primary text-primary-foreground'
						: 'text-foreground/50 hover:text-foreground'}"
				>
					{l}
				</button>
			{/each}
		</div>
	</header>

	<!-- Hero -->
	<section
		class="relative flex min-h-[50vh] flex-col items-center justify-end pb-16 pt-32 overflow-hidden"
		style="background: linear-gradient(135deg, oklch(0.12 0.02 65) 0%, oklch(0.08 0.01 60) 100%)"
	>
		<div class="absolute inset-0 geo-pattern opacity-[0.05]"></div>
		<div
			class="absolute top-0 left-0 h-1 w-full"
			style="background: linear-gradient(90deg, transparent, oklch(0.75 0.15 75), transparent)"
		></div>
		<div class="relative z-10 text-center px-6">
			<h1 class="font-impact text-[clamp(4rem,14vw,11rem)] leading-none tracking-[0.04em] text-foreground">
				{lang.t.aboutPage.pageTitle}
			</h1>
			<p class="mt-4 font-display italic text-lg md:text-xl text-primary/90 max-w-2xl mx-auto">
				{lang.t.aboutPage.subtitle}
			</p>
		</div>
	</section>

	<!-- History -->
	<section class="py-20 md:py-28">
		<div class="mx-auto max-w-3xl px-6 md:px-10" use:reveal>
			<p class="text-foreground/80 text-lg md:text-xl leading-relaxed text-center">
				{lang.t.aboutPage.history}
			</p>
		</div>
	</section>

	<!-- Diamond divider -->
	<div class="flex items-center gap-0 overflow-hidden">
		<div class="h-px flex-1 bg-border/30"></div>
		<div class="flex gap-3 px-6">
			{#each [0, 1, 2] as i (i)}
				<span class="inline-block h-2 w-2 rotate-45 {i === 1 ? 'bg-primary' : 'bg-border/30'}"></span>
			{/each}
		</div>
		<div class="h-px flex-1 bg-border/30"></div>
	</div>

	<!-- For whom -->
	<section class="py-20 md:py-28" id="for-whom">
		<div class="mx-auto max-w-6xl px-6 md:px-10">
			<div class="mb-16 text-center" use:reveal>
				<h2 class="font-impact text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-[0.04em] text-foreground">
					{lang.t.aboutPage.forTitle}
				</h2>
			</div>

			<div class="grid gap-px md:grid-cols-2" style="background: oklch(0.28 0.02 55)">
				<!-- Kids -->
				<div
					class="flex flex-col gap-6 p-8 md:p-12"
					style="background: oklch(0.14 0.015 60)"
					use:reveal={{ delay: 0 }}
				>
					<div class="flex items-center gap-3">
						<span class="inline-block h-2 w-2 rotate-45 bg-primary shrink-0"></span>
						<h3 class="font-impact text-3xl md:text-4xl tracking-[0.06em] text-primary">
							{lang.t.aboutPage.kidsTitle}
						</h3>
					</div>
					<p class="text-foreground/75 text-base leading-relaxed">
						{lang.t.aboutPage.kidsBody}
					</p>
				</div>

				<!-- Adults -->
				<div
					class="flex flex-col gap-6 p-8 md:p-12"
					style="background: oklch(0.14 0.015 60)"
					use:reveal={{ delay: 100 }}
				>
					<div class="flex items-center gap-3">
						<span class="inline-block h-2 w-2 rotate-45 bg-primary shrink-0"></span>
						<h3 class="font-impact text-3xl md:text-4xl tracking-[0.06em] text-primary">
							{lang.t.aboutPage.adultsTitle}
						</h3>
					</div>
					<p class="text-foreground/75 text-base leading-relaxed">
						{lang.t.aboutPage.adultsBody}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Diamond divider -->
	<div class="flex items-center gap-0 overflow-hidden">
		<div class="h-px flex-1 bg-border/30"></div>
		<div class="flex gap-3 px-6">
			{#each [0, 1, 2] as i (i)}
				<span class="inline-block h-2 w-2 rotate-45 {i === 1 ? 'bg-primary' : 'bg-border/30'}"></span>
			{/each}
		</div>
		<div class="h-px flex-1 bg-border/30"></div>
	</div>

	<!-- Why Capoeira -->
	<section class="py-20 md:py-28" style="background: linear-gradient(135deg, oklch(0.14 0.015 60) 0%, oklch(0.12 0.01 60) 100%)">
		<div class="mx-auto max-w-4xl px-6 md:px-10">
			<div class="mb-12 text-center" use:reveal>
				<h2 class="font-impact text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-[0.04em] text-foreground">
					{lang.t.aboutPage.whyTitle}
				</h2>
			</div>

			<ul class="grid gap-4 md:grid-cols-2">
				{#each lang.t.aboutPage.why as item, i (i)}
					<li
						class="flex items-start gap-4 p-5 border border-border/20"
						use:reveal={{ delay: i * 60 }}
					>
						<span class="mt-1 inline-block h-2 w-2 shrink-0 rotate-45 bg-primary"></span>
						<span class="text-foreground/80 text-sm leading-relaxed">{item}</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Compare section -->
	<section class="py-20 md:py-28" id="vs">
		<div class="mx-auto max-w-6xl px-6 md:px-10">
			<div class="mb-16 text-center" use:reveal>
				<h2 class="font-impact text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-[0.04em] text-foreground">
					{lang.t.aboutPage.compareSection.title}
				</h2>
				<p class="mt-4 text-foreground/60 text-base md:text-lg max-w-2xl mx-auto">
					{lang.t.aboutPage.compareSection.subtitle}
				</p>
			</div>

			<div class="grid gap-px md:grid-cols-2" style="background: oklch(0.28 0.02 55)">
				{#each cardKeys as key, i (key)}
					{@const card = lang.t.aboutPage.compareSection.cards[key]}
					<div
						class="flex flex-col gap-5 p-8 md:p-10"
						style="background: oklch(0.14 0.015 60)"
						use:reveal={{ delay: i * 80 }}
					>
						<div>
							<p class="text-xs tracking-[0.3em] uppercase text-foreground/30 mb-2">vs</p>
							<h3 class="font-impact text-4xl md:text-5xl tracking-[0.06em] text-foreground">
								{card.name}
							</h3>
						</div>

						<p class="text-foreground/60 text-sm leading-relaxed">
							{card.desc}
						</p>

						<div class="border-t border-border/20 pt-5 flex flex-col gap-3">
							<p class="text-xs tracking-[0.25em] uppercase text-foreground/35">
								{lang.t.aboutPage.compareSection.capoeiraAdds}
							</p>
							<p class="font-display italic text-base md:text-lg text-primary/90 leading-relaxed">
								{card.contrast}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Diamond divider -->
	<div class="flex items-center gap-0 overflow-hidden">
		<div class="h-px flex-1 bg-border/30"></div>
		<div class="flex gap-3 px-6">
			{#each [0, 1, 2] as i (i)}
				<span class="inline-block h-2 w-2 rotate-45 {i === 1 ? 'bg-primary' : 'bg-border/30'}"></span>
			{/each}
		</div>
		<div class="h-px flex-1 bg-border/30"></div>
	</div>

	<!-- Community -->
	<section class="py-20 md:py-28">
		<div class="mx-auto max-w-3xl px-6 md:px-10 text-center" use:reveal>
			<h2 class="font-impact text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-[0.04em] text-foreground mb-8">
				{lang.t.aboutPage.communityTitle}
			</h2>
			<div class="relative pl-0 mb-0">
				<p class="font-display italic text-xl md:text-2xl text-primary/90 leading-relaxed mb-8">
					{lang.t.aboutPage.communityBody}
				</p>
			</div>
		</div>
	</section>

	<!-- Diamond divider -->
	<div class="flex items-center gap-0 overflow-hidden">
		<div class="h-px flex-1 bg-border/30"></div>
		<div class="flex gap-3 px-6">
			{#each [0, 1, 2] as i (i)}
				<span class="inline-block h-2 w-2 rotate-45 {i === 1 ? 'bg-primary' : 'bg-border/30'}"></span>
			{/each}
		</div>
		<div class="h-px flex-1 bg-border/30"></div>
	</div>

	<!-- Instructor -->
	<section
		class="py-20 md:py-28"
		style="background: linear-gradient(135deg, oklch(0.14 0.015 60) 0%, oklch(0.12 0.01 60) 100%)"
	>
		<div class="mx-auto max-w-3xl px-6 md:px-10 text-center" use:reveal>
			<p class="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4">
				{lang.t.aboutPage.instructorTitle}
			</p>
			<h2 class="font-impact text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-[0.04em] text-foreground mb-6">
				{lang.t.aboutPage.instructorName}
			</h2>
			<div class="mx-auto mb-8 h-px w-16 bg-primary/40"></div>
			<p class="text-foreground/75 text-base md:text-lg leading-relaxed">
				{lang.t.aboutPage.instructorBio}
			</p>
		</div>
	</section>

	<!-- CTA contact -->
	<section
		class="relative overflow-hidden py-20 md:py-28"
		style="background: linear-gradient(135deg, oklch(0.16 0.02 65) 0%, oklch(0.12 0.01 60) 100%)"
	>
		<div class="absolute inset-0 geo-pattern opacity-[0.06]"></div>
		<div
			class="absolute top-0 left-0 h-1 w-full"
			style="background: linear-gradient(90deg, transparent, oklch(0.75 0.15 75), transparent)"
		></div>

		<div class="relative mx-auto max-w-4xl px-6 md:px-10 text-center" use:reveal>
			<div class="my-10 grid gap-8 md:grid-cols-3">
				<div class="flex flex-col items-center gap-2">
					<User class="mb-2 h-6 w-6 text-primary" />
					<p class="text-xs tracking-[0.25em] uppercase text-foreground/40">
						{lang.t.contact.instructor}
					</p>
					<p class="font-display text-lg text-foreground">Sergiu Melnic</p>
				</div>
				<div class="flex flex-col items-center gap-2">
					<Phone class="mb-2 h-6 w-6 text-primary" />
					<p class="text-xs tracking-[0.25em] uppercase text-foreground/40">
						{lang.t.contact.phone}
					</p>
					<a
						href="tel:+37379707072"
						class="font-display text-lg text-foreground transition-colors hover:text-primary"
					>
						079 70 70 72
					</a>
				</div>
				<div class="flex flex-col items-center gap-2">
					<Facebook class="mb-2 h-6 w-6 text-primary" />
					<p class="text-xs tracking-[0.25em] uppercase text-foreground/40">
						{lang.t.contact.facebook}
					</p>
					<a
						href="https://www.facebook.com/capoeiramd/"
						target="_blank"
						rel="noopener noreferrer"
						class="font-display text-lg text-foreground transition-colors hover:text-primary"
					>
						@capoeiramd
					</a>
				</div>
			</div>

			<p class="mb-10 flex items-center justify-center gap-2 text-sm tracking-[0.15em] uppercase text-foreground/40">
				<MapPin class="h-4 w-4 shrink-0 text-primary/60" />
				{lang.t.contact.address}
			</p>

			<a
				href="tel:+37379707072"
				class="inline-block border border-primary px-12 py-5 font-impact text-xl tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
			>
				{lang.t.aboutPage.ctaText} →
			</a>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-border/20 py-10">
		<div class="mx-auto max-w-6xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
			<div class="text-center md:text-left">
				<p class="font-impact text-lg tracking-widest uppercase text-foreground/60">
					Alemar Capoeira Chisinau
				</p>
				<p class="text-xs tracking-[0.2em] uppercase text-foreground/30 mt-1">
					{lang.t.footer.since}
				</p>
			</div>
			<a
				href="/{data.lang}"
				class="text-xs tracking-[0.25em] uppercase text-foreground/30 transition-colors hover:text-primary"
			>
				← {lang.t.aboutPage.backToHome}
			</a>
		</div>
	</footer>
</div>
