<script lang="ts">
	import { useLanguageStore } from '$lib/i18n';
	import LandingNav from './LandingNav.svelte';
	import LandingHero from './LandingHero.svelte';
	import LandingAbout from './LandingAbout.svelte';
	import ClassesSection from '$lib/components/ClassesSection.svelte';
	import LandingGallery from './LandingGallery.svelte';
	import LandingEvents from './LandingEvents.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import AudiencesSection from '$lib/components/AudiencesSection.svelte';
	import groupPhoto from '$lib/assets/photos/20250815_195516.jpg';

	let { data } = $props();
	const lang = useLanguageStore();

	const SITE = 'https://capoeira.md';

	const ogLocale = $derived(data.lang === 'ru' ? 'ru_MD' : data.lang === 'en' ? 'en_US' : 'ro_MD');

	const schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'SportsClub',
		name: 'Alemar Capoeira Chisinau',
		description: lang.t.meta.landingDescription,
		url: SITE,
		telephone: '+37379707072',
		foundingDate: '2003',
		image: `${SITE}${groupPhoto}`,
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

	const jsonLd = $derived(
		`<script type="application/ld+json">${JSON.stringify(schema)}<` + '/script>'
	);
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
	<meta property="og:image" content="{SITE}{groupPhoto}" />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:site_name" content="Alemar Capoeira Chisinau" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={lang.t.meta.landingTitle} />
	<meta name="twitter:description" content={lang.t.meta.landingDescription} />
	<meta name="twitter:image" content="{SITE}{groupPhoto}" />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLd}
</svelte:head>

<div class="bg-background text-foreground">
	<LandingNav />
	<LandingHero />
	<LandingAbout />
	<ClassesSection />
	<AudiencesSection />
	<LandingGallery />
	<LandingEvents />
	<ContactSection />
</div>
