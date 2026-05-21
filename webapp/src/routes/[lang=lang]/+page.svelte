<script lang="ts">
	import { useLanguageStore } from '$lib/i18n.svelte';
	import LandingNav from '$lib/components/landing/LandingNav.svelte';
	import LandingHero from '$lib/components/landing/LandingHero.svelte';
	import LandingAbout from '$lib/components/landing/LandingAbout.svelte';
	import LandingClasses from '$lib/components/landing/LandingClasses.svelte';
	import LandingGallery from '$lib/components/landing/LandingGallery.svelte';
	import LandingEvents from '$lib/components/landing/LandingEvents.svelte';
	import LandingContact from '$lib/components/landing/LandingContact.svelte';

	let { data } = $props();
	const lang = useLanguageStore();

	const SITE = 'https://capoeira.md';

	const ogLocale = $derived(
		data.lang === 'ru' ? 'ru_MD' : data.lang === 'en' ? 'en_US' : 'ro_MD'
	);

	const schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'SportsClub',
		name: 'Alemar Capoeira Chisinau',
		description: lang.t.meta.landingDescription,
		url: SITE,
		telephone: '+37379707072',
		foundingDate: '2003',
		image: `${SITE}/photos/hero.jpg`,
		sport: 'Capoeira',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Calea Iesilor 10, et. 5',
			addressLocality: 'Chisinau',
			addressRegion: 'Chisinau',
			addressCountry: 'MD'
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Wednesday', 'Friday'],
				opens: '18:30',
				closes: '20:30'
			}
		],
		sameAs: ['https://www.facebook.com/capoeiramd/'],
		offers: {
			'@type': 'Offer',
			name: 'First class free',
			price: '0',
			priceCurrency: 'MDL'
		}
	});
</script>

<svelte:head>
	<title>{lang.t.meta.landingTitle}</title>
	<meta name="description" content={lang.t.meta.landingDescription} />
	<link rel="canonical" href="{SITE}/{data.lang}" />

	<link rel="alternate" hreflang="ro" href="{SITE}/ro" />
	<link rel="alternate" hreflang="ru" href="{SITE}/ru" />
	<link rel="alternate" hreflang="en" href="{SITE}/en" />
	<link rel="alternate" hreflang="x-default" href="{SITE}/ro" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content="{SITE}/{data.lang}" />
	<meta property="og:title" content={lang.t.meta.landingTitle} />
	<meta property="og:description" content={lang.t.meta.landingDescription} />
	<meta property="og:image" content="{SITE}/photos/hero.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:site_name" content="Alemar Capoeira Chisinau" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={lang.t.meta.landingTitle} />
	<meta name="twitter:description" content={lang.t.meta.landingDescription} />
	<meta name="twitter:image" content="{SITE}/photos/hero.jpg" />

	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<div class="dark bg-background text-foreground">
	<LandingNav />
	<LandingHero />
	<LandingAbout />
	<LandingClasses />
	<LandingGallery />
	<LandingEvents />
	<LandingContact />
</div>
