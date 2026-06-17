<script lang="ts">
	import { useLanguageStore } from '$lib/i18n.svelte';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import video1 from '$lib/assets/videos/559186123_31809521748693885_2546781122121030783_n.mp4';

	const lang = useLanguageStore();

	let videoEl: HTMLVideoElement | undefined = $state();
	let rafId: number;

	function onScroll() {
		cancelAnimationFrame(rafId);
		rafId = requestAnimationFrame(() => {
			if (videoEl) {
				videoEl.style.transform = `translateY(-${window.scrollY * 0.1}px)`;
			}
		});
	}
</script>

<svelte:window onscroll={onScroll} />

<section class="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden" id="hero">
	<!-- Full-bleed video background with parallax -->
	<!-- Video is slightly oversized (110% height) so parallax movement never reveals background -->
	<video
		bind:this={videoEl}
		src={video1}
		poster="/photos/hero.jpg"
		autoplay
		muted
		loop
		playsinline
		preload="metadata"
		aria-label="Capoeira training session"
		class="absolute inset-x-0 h-[120%] w-full object-cover object-center"
		style="top: -10%; will-change: transform"
	></video>

	<!-- Dark scrim: base + gradient -->
	<div class="absolute inset-0 bg-black/40"></div>
	<div
		class="absolute inset-0"
		style="background: linear-gradient(to bottom, rgba(10,7,3,0.05) 0%, rgba(10,7,3,0.55) 100%)"
	></div>

	<!-- Geo texture overlay -->
	<div class="absolute inset-0 geo-pattern opacity-[0.06]"></div>

	<!-- Text + CTA -->
	<div class="content-enter relative z-10 flex flex-col items-center px-6 text-center">
		<p class="mb-6 font-display text-xs font-medium italic tracking-[0.35em] uppercase text-primary/90">
			{lang.t.hero.tagline}
		</p>

		<h1 class="font-impact leading-none tracking-[0.04em]">
			<span class="block text-[clamp(4.5rem,16vw,14rem)] text-white">
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
			class="inline-block border border-primary px-10 py-4 font-impact text-lg tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
		>
			{lang.t.hero.cta}
		</a>

		<p class="mt-6 text-xs tracking-[0.3em] uppercase text-white/40">
			{lang.t.hero.since}
		</p>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
		<div class="h-6 w-px bg-gradient-to-b from-primary/0 to-primary/40"></div>
		<ChevronDown size={18} class="bounce-down text-primary/60" />
	</div>
</section>

<style>
	@keyframes content-enter {
		from {
			opacity: 0;
			translate: 0 20px;
		}
		to {
			opacity: 1;
			translate: 0 0;
		}
	}

	.content-enter {
		animation: content-enter 1s ease-out both;
	}
</style>
