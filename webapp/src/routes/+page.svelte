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
	<title>Alemar Capoeira Chișinău</title>
	<meta
		name="description"
		content="Capoeira in Chișinău — martial art, dance, music. Classes Mon/Wed/Fri at 18:30. First class free."
	/>
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
