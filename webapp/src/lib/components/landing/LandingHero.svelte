<script lang="ts">
	import { useLanguageStore } from '$lib/i18n.svelte';
	import groupPhoto from '$lib/assets/photos/20250815_195516.jpg';

	const lang = useLanguageStore();
</script>

<section
	class="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden"
	id="hero"
>
	<!-- Background photo -->
	<div
		class="absolute inset-0 bg-cover bg-center bg-no-repeat"
		style="background-image: url('{groupPhoto}')"
	></div>

	<!-- Dark gradient overlay -->
	<div
		class="absolute inset-0"
		style="background: linear-gradient(160deg, rgba(10,7,3,0.85) 0%, rgba(10,7,3,0.6) 50%, rgba(10,7,3,0.9) 100%)"
	></div>

	<!-- Geo pattern overlay -->
	<div class="absolute inset-0 geo-pattern opacity-30"></div>

	<!-- Content -->
	<div class="relative z-10 flex flex-col items-center px-6 text-center">
		<p
			class="mb-8 text-xs font-medium tracking-[0.35em] uppercase text-primary/80 font-display italic"
		>
			{lang.t.hero.tagline}
		</p>

		<h1 class="font-impact leading-none tracking-[0.04em]">
			<span class="block text-[clamp(4.5rem,16vw,14rem)] text-foreground">
				{lang.t.hero.line1}
			</span>
			<span
				class="block text-[clamp(2.5rem,9vw,8rem)] text-primary"
				style="-webkit-text-stroke: 1px currentColor"
			>
				{lang.t.hero.line2}
			</span>
		</h1>

		<div class="my-10 flex items-center gap-4">
			<span class="h-px w-12 bg-primary/40"></span>
			<span class="inline-block h-2 w-2 rotate-45 bg-primary"></span>
			<span class="h-px w-12 bg-primary/40"></span>
		</div>

		<a
			href="#contact"
			class="group relative inline-block border border-primary px-10 py-4 font-impact text-lg tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
		>
			{lang.t.hero.cta}
		</a>

		<p class="mt-8 text-xs tracking-[0.3em] uppercase text-foreground/40">
			{lang.t.hero.since}
		</p>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
		<div class="h-10 w-px bg-gradient-to-b from-primary/0 to-primary/50"></div>
	</div>
</section>
