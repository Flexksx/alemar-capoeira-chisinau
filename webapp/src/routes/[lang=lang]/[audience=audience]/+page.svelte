<script lang="ts">
	import { useLanguageStore, type Language } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { goto } from '$app/navigation';
	import { Button } from '@alemar/ui/button';
	import { ToggleGroup, ToggleGroupItem } from '@alemar/ui/toggle-group';
	import Music from '@lucide/svelte/icons/music';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import alemArLogo from '$lib/assets/alemar-logo.png';
	import ClassesSection from '$lib/components/ClassesSection.svelte';
	import AudiencesSection from '$lib/components/AudiencesSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import { audiencePhotos } from '$lib/audiencePhotos';
	import { content } from './content';

	let { data } = $props();
	const lang = useLanguageStore();

	const SITE = 'https://capoeira.md';
	const languages: Language[] = ['ro', 'ru', 'en'];

	const pageContent = $derived(content[data.lang][data.audience]);
	const url = $derived(`${SITE}/${data.lang}/${data.audience}`);
	const photo = $derived(audiencePhotos[data.audience]);
	const ogLocale = $derived(data.lang === 'ru' ? 'ru_MD' : data.lang === 'en' ? 'en_US' : 'ro_MD');

	const switchLang = (l: string) => {
		if (l && l !== lang.current) void goto(`/${l}/${data.audience}`);
	};

	const schema = $derived([
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Alemar Capoeira Chișinău',
					item: `${SITE}/${data.lang}`
				},
				{ '@type': 'ListItem', position: 2, name: pageContent.title, item: url }
			]
		},
		{
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: pageContent.faq.map((item) => ({
				'@type': 'Question',
				name: item.question,
				acceptedAnswer: { '@type': 'Answer', text: item.answer }
			}))
		}
	]);

	const jsonLd = $derived(
		`<script type="application/ld+json">${JSON.stringify(schema)}<` + '/script>'
	);
</script>

<svelte:head>
	<title>{pageContent.metaTitle}</title>
	<meta name="description" content={pageContent.metaDescription} />
	<link rel="canonical" href={url} />

	{#each languages as l (l)}
		<link rel="alternate" hreflang={l} href="{SITE}/{l}/{data.audience}" />
	{/each}
	<link rel="alternate" hreflang="x-default" href="{SITE}/ro/{data.audience}" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={pageContent.metaTitle} />
	<meta property="og:description" content={pageContent.metaDescription} />
	<meta property="og:image" content="{SITE}{photo}" />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:site_name" content="Alemar Capoeira Chisinau" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageContent.metaTitle} />
	<meta name="twitter:description" content={pageContent.metaDescription} />
	<meta name="twitter:image" content="{SITE}{photo}" />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLd}
</svelte:head>

<div class="bg-background text-foreground">
	<header class="dark sticky top-0 z-40 border-b border-border bg-background text-foreground">
		<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-10">
			<a href="/{lang.current}" class="shrink-0" aria-label="Alemar Capoeira">
				<img src={alemArLogo} alt="" class="h-10 w-auto" />
			</a>
			<div class="flex items-center gap-2">
				<Button
					href="/songs"
					variant="outline"
					size="sm"
					class="relative hidden h-9 after:absolute after:inset-x-0 after:-inset-y-1 sm:inline-flex"
				>
					<Music />
					{lang.t.nav.songs}
				</Button>
				<ToggleGroup
					type="single"
					value={lang.current}
					onValueChange={switchLang}
					aria-label={lang.t.ui.language}
				>
					{#each languages as l (l)}
						<ToggleGroupItem value={l} class="h-[34px] min-w-11 px-2 text-xs uppercase"
							>{l}</ToggleGroupItem
						>
					{/each}
				</ToggleGroup>
			</div>
		</nav>
	</header>

	<section class="dark bg-background py-16 text-foreground md:py-24">
		<div class="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-10">
			<div class="md:col-span-7" use:reveal>
				<!-- The visible trail matches the BreadcrumbList schema. -->
				<nav aria-label="Breadcrumb">
					<ol class="flex items-center gap-1 text-sm text-muted-foreground">
						<li>
							<a href="/{lang.current}" class="inline-flex min-h-11 items-center underline-link">
								{lang.t.audiencePage.home}
							</a>
						</li>
						<li aria-hidden="true"><ChevronRight class="size-4" /></li>
						<li aria-current="page">{pageContent.title}</li>
					</ol>
				</nav>
				<h1 class="mt-6 title-xl">{pageContent.title}</h1>
				<p class="mt-8 max-w-prose text-xl leading-relaxed text-foreground/85">
					{pageContent.lead}
				</p>
			</div>
			<div class="md:col-span-5 md:pt-10" use:reveal={{ delay: 150 }}>
				<div class="relative">
					<div
						class="absolute inset-0 translate-x-3 translate-y-3 bg-sun-orange md:translate-x-5 md:translate-y-5"
					></div>
					<img
						src={photo}
						alt={pageContent.title}
						class="relative aspect-[4/5] w-full object-cover object-center"
					/>
				</div>
			</div>
		</div>
	</section>

	<section class="light bg-background py-24 text-foreground md:py-32">
		<div class="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:gap-x-16 md:px-10">
			{#each pageContent.sections as section, i (section.title)}
				<div use:reveal={{ delay: (i % 2) * 100 }}>
					<h2 class="font-display text-4xl leading-none uppercase md:text-5xl">
						{section.title}
					</h2>
					<p class="mt-5 max-w-prose text-lg leading-relaxed text-foreground/80">
						{section.body}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<ClassesSection />

	<!-- Answers stay visible, so they are in the prerendered HTML that search engines read. -->
	<section class="dark bg-background py-24 text-foreground md:py-32" id="faq">
		<div class="mx-auto max-w-3xl px-5 md:px-10">
			<h2 class="title-lg" use:reveal>{lang.t.audiencePage.faqTitle}</h2>
			<dl class="mt-12 divide-y divide-border border-y border-border">
				{#each pageContent.faq as item (item.question)}
					<div class="py-6">
						<dt class="text-lg font-semibold">{item.question}</dt>
						<dd class="mt-2 text-base leading-relaxed text-foreground/80">{item.answer}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

	<AudiencesSection exclude={data.audience} title={lang.t.audiencePage.otherTitle} />

	<ContactSection />
</div>
