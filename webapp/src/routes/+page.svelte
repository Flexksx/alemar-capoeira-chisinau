<script lang="ts">
	import { setLanguageStore } from '$lib/i18n.svelte';
	import LandingNav from '$lib/components/landing/LandingNav.svelte';
	import LandingHero from '$lib/components/landing/LandingHero.svelte';
	import LandingAbout from '$lib/components/landing/LandingAbout.svelte';
	import LandingClasses from '$lib/components/landing/LandingClasses.svelte';
	import LandingGallery from '$lib/components/landing/LandingGallery.svelte';
	import LandingEvents from '$lib/components/landing/LandingEvents.svelte';
	import LandingContact from '$lib/components/landing/LandingContact.svelte';

	setLanguageStore();
</script>

<svelte:head>
	<title>Alemar Capoeira Chișinău — Artă Marțială Braziliană în Moldova</title>
	<meta
		name="description"
		content="Școală de capoeira în Chișinău, activă din 2003. Artă marțială braziliană, acrobații și muzică pentru toate vârstele. Antrenamente luni, miercuri, vineri 18:30–20:30. Prima lecție gratuită."
	/>
	<link rel="canonical" href="https://capoeira.md" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://capoeira.md" />
	<meta property="og:title" content="Alemar Capoeira Chișinău — Artă Marțială Braziliană" />
	<meta property="og:description" content="Școală de capoeira în Chișinău, activă din 2003. Arte marțiale, acrobații, muzică. Prima lecție gratuită." />
	<meta property="og:image" content="https://capoeira.md/photos/hero.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="ro_MD" />
	<meta property="og:locale:alternate" content="ru_MD" />
	<meta property="og:locale:alternate" content="en_US" />
	<meta property="og:site_name" content="Alemar Capoeira Chișinău" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Alemar Capoeira Chișinău" />
	<meta name="twitter:description" content="Capoeira în Chișinău din 2003. Prima lecție gratuită." />
	<meta name="twitter:image" content="https://capoeira.md/photos/hero.jpg" />

	<!-- LocalBusiness JSON-LD -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "SportsClub",
		"name": "Alemar Capoeira Chișinău",
		"description": "Școală de capoeira în Chișinău, activă din 2003. Artă marțială braziliană combinând tehnici de luptă, acrobații și muzică.",
		"url": "https://capoeira.md",
		"telephone": "+37379707072",
		"foundingDate": "2003",
		"image": "https://capoeira.md/photos/hero.jpg",
		"sport": "Capoeira",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Calea Ieșilor 10, et. 5",
			"addressLocality": "Chișinău",
			"addressRegion": "Chișinău",
			"addressCountry": "MD"
		},
		"openingHoursSpecification": [
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Wednesday", "Friday"],
				"opens": "18:30",
				"closes": "20:30"
			}
		],
		"sameAs": ["https://www.facebook.com/capoeiramd/"],
		"offers": {
			"@type": "Offer",
			"name": "Prima lecție gratuită",
			"price": "0",
			"priceCurrency": "MDL"
		}
	})}</script>`}
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
