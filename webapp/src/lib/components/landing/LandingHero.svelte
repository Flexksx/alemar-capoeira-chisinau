<script lang="ts">
	import { useLanguageStore } from '$lib/i18n.svelte';
	import bichoBibi from '$lib/assets/photos/bicho_bibi.jpg';
	import serginho from '$lib/assets/photos/serginho.jpg';
	import video1 from '$lib/assets/videos/558934128_24493304180342324_2883331840718687193_n.mp4';

	const lang = useLanguageStore();
</script>

<section
	class="relative flex min-h-dvh flex-col items-center justify-center gap-10 py-12 md:py-20"
	id="hero"
>
	<!-- Subtle geo texture on pure dark canvas -->
	<div class="absolute inset-0 geo-pattern opacity-10"></div>
	<!-- Radial depth vignette -->
	<div
		class="absolute inset-0"
		style="background: radial-gradient(ellipse 80% 70% at 50% 40%, transparent 30%, rgba(10,7,3,0.7) 100%)"
	></div>

	<!-- Cards: 2 square photos stacked left + tall video right -->
	<div class="relative z-10 flex w-full max-w-2xl items-stretch gap-3 px-4 md:gap-4 md:px-6">
		<!-- Left column: 2 square photos, each independently floated -->
		<div class="flex w-[48%] flex-col gap-2 md:gap-3">
			<!-- Photo 1: tilted left, nudged up -->
			<div
				class="card-enter"
				style="animation-delay: 0.1s; transform: rotate(-3deg) translateY(-8px)"
			>
				<div
					class="overflow-hidden rounded-sm border border-primary/25 shadow-2xl"
					style="aspect-ratio: 1/1"
				>
					<img
						src={bichoBibi}
						alt=""
						aria-hidden="true"
						class="h-full w-full object-cover object-center"
					/>
				</div>
			</div>
			<!-- Photo 2: tilted right, nudged down -->
			<div
				class="card-enter"
				style="animation-delay: 0.2s; transform: rotate(2.5deg) translateY(6px)"
			>
				<div
					class="overflow-hidden rounded-sm border border-primary/20 shadow-xl"
					style="aspect-ratio: 1/1"
				>
					<img
						src={serginho}
						alt=""
						aria-hidden="true"
						class="h-full w-full object-cover object-top"
					/>
				</div>
			</div>
		</div>

		<!-- Right column: video spanning full height, lightly tilted the other way -->
		<div
			class="card-enter w-[48%]"
			style="animation-delay: 0s; transform: rotate(-1.5deg) translateY(4px)"
		>
			<div class="relative h-full overflow-hidden rounded-sm border border-primary/50 shadow-2xl">
				<video
					src={video1}
					autoplay
					muted
					loop
					playsinline
					class="h-full w-full object-cover object-center"
				></video>
				<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
				<div class="absolute bottom-2 left-2 flex items-center gap-1.5">
					<span class="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
					<span class="font-impact text-[10px] tracking-[0.2em] uppercase text-white/60"
						>video</span
					>
				</div>
			</div>
		</div>
	</div>

	<!-- Text + CTA -->
	<div class="relative z-10 flex flex-col items-center px-6 text-center">
		<p
			class="mb-6 text-xs font-medium tracking-[0.35em] uppercase text-primary/80 font-display italic"
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

		<div class="my-8 flex items-center gap-4">
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

		<p class="mt-6 text-xs tracking-[0.3em] uppercase text-foreground/40">
			{lang.t.hero.since}
		</p>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
		<div class="h-10 w-px bg-gradient-to-b from-primary/0 to-primary/50"></div>
	</div>
</section>

<style>
	@keyframes card-enter {
		from {
			opacity: 0;
			translate: 0 24px;
		}
		to {
			opacity: 1;
			translate: 0 0;
		}
	}

	.card-enter {
		animation: card-enter 0.7s ease-out both;
	}
</style>
