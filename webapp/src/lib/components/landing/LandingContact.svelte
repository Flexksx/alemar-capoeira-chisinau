<script lang="ts">
	import { useLanguageStore } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions/reveal';
	import User from '@lucide/svelte/icons/user';
	import Phone from '@lucide/svelte/icons/phone';
	import Facebook from '@lucide/svelte/icons/facebook';
	import MapPin from '@lucide/svelte/icons/map-pin';

	const lang = useLanguageStore();
</script>

<section
	class="relative overflow-hidden py-24 md:py-36"
	id="contact"
	style="background: linear-gradient(135deg, oklch(0.16 0.02 65) 0%, oklch(0.12 0.01 60) 100%)"
>
	<!-- Geo pattern -->
	<div class="absolute inset-0 geo-pattern opacity-[0.06]"></div>

	<!-- Diagonal accent bar -->
	<div
		class="absolute top-0 left-0 h-1 w-full"
		style="background: linear-gradient(90deg, transparent, oklch(0.75 0.15 75), transparent)"
	></div>

	<div class="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
		<div use:reveal>
			<h2
				class="font-impact text-[clamp(3.5rem,11vw,9rem)] leading-none tracking-[0.04em] text-foreground"
			>
				{lang.t.contact.title}
			</h2>

			<p class="mt-6 font-display italic text-xl md:text-2xl text-primary/90">
				{lang.t.contact.subtitle}
			</p>
		</div>

		<div class="my-12 grid gap-8 md:grid-cols-3">
			<div class="flex flex-col items-center gap-2" use:reveal={{ delay: 0 }}>
				<User class="mb-2 h-6 w-6 text-primary" />
				<p class="text-xs tracking-[0.25em] uppercase text-foreground/40">
					{lang.t.contact.instructor}
				</p>
				<p class="font-display text-lg text-foreground">Sergiu Melnic</p>
			</div>

			<div class="flex flex-col items-center gap-2" use:reveal={{ delay: 100 }}>
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

			<div class="flex flex-col items-center gap-2" use:reveal={{ delay: 200 }}>
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

		<p class="mb-10 flex items-center justify-center gap-2 text-sm tracking-[0.15em] uppercase text-foreground/40" use:reveal={{ delay: 150 }}>
			<MapPin class="h-4 w-4 shrink-0 text-primary/60" />
			{lang.t.contact.address}
		</p>

		<div use:reveal={{ delay: 250 }}>
			<a
				href="tel:+37379707072"
				class="pulse-gold inline-block border border-primary px-12 py-5 font-impact text-xl tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
			>
				{lang.t.contact.cta} →
			</a>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-border/20 py-10">
	<div
		class="mx-auto max-w-6xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4"
	>
		<div class="text-center md:text-left">
			<p class="font-impact text-lg tracking-widest uppercase text-foreground/60">
				Alemar Capoeira Chișinău
			</p>
			<p class="text-xs tracking-[0.2em] uppercase text-foreground/30 mt-1">
				{lang.t.footer.since}
			</p>
		</div>

		<p class="font-display italic text-foreground/30 text-sm">
			{lang.t.footer.tagline}
		</p>

		<a
			href="/songs"
			class="text-xs tracking-[0.25em] uppercase text-foreground/30 transition-colors hover:text-primary"
		>
			{lang.t.nav.songs} ♪
		</a>
	</div>
</footer>
