<script lang="ts">
	import { useLanguageStore } from '$lib/i18n';
	import { Button } from '@alemar/ui/button';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowDown from '@lucide/svelte/icons/arrow-down';
	import Pause from '@lucide/svelte/icons/pause';
	import Play from '@lucide/svelte/icons/play';
	import { onMount } from 'svelte';
	import video1 from '$lib/assets/videos/559186123_31809521748693885_2546781122121030783_n.mp4';

	const lang = useLanguageStore();

	let video = $state<HTMLVideoElement>();
	let paused = $state(false);

	// Moving video is decoration: respect the system setting for less motion.
	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			video?.pause();
		}
	});

	const toggleVideo = () => {
		if (!video) return;
		if (video.paused) void video.play();
		else video.pause();
	};
</script>

<section class="dark relative flex min-h-dvh flex-col overflow-hidden bg-background" id="hero">
	<video
		bind:this={video}
		bind:paused
		src={video1}
		poster="/photos/hero.jpg"
		autoplay
		muted
		loop
		playsinline
		preload="metadata"
		aria-label="Capoeira training session"
		class="absolute inset-0 h-full w-full object-cover object-center"
	></video>
	<!-- The action sits low in the frame, so the title and its shade sit at the top. -->
	<div
		class="absolute inset-x-0 top-0 h-3/4 bg-gradient-to-b from-ink/85 via-ink/45 to-transparent"
	></div>
	<div
		class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/85 to-transparent md:h-40"
	></div>

	<div
		class="content-enter relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pt-24 pb-6 md:px-10 md:pt-28 md:pb-8"
	>
		<p class="mb-5 text-sm font-medium text-foreground/85 md:text-base">{lang.t.hero.tagline}</p>

		<!-- Outlined letters: the video shows through, so the word stays loud without hiding the action. -->
		<h1 class="font-display leading-[0.82] uppercase">
			<span
				class="-ml-[0.04em] block pt-[0.08em] text-[clamp(4.5rem,19vw,16rem)] text-transparent [-webkit-text-stroke:2px_var(--foreground)] md:[-webkit-text-stroke:3px_var(--foreground)]"
			>
				{lang.t.hero.line1}
			</span>
			<span
				class="mt-[0.3em] inline-block -rotate-[1.5deg] bg-primary px-[0.2em] pt-[0.2em] pb-[0.14em] text-[clamp(1.75rem,4.5vw,3.25rem)] text-primary-foreground"
			>
				{lang.t.hero.line2}
			</span>
		</h1>

		<!-- Z reading order: title top-left, navigation top-right, actions bottom-right. -->
		<div
			class="mt-auto flex flex-col-reverse gap-5 border-t border-foreground/25 pt-4 md:flex-row md:items-end md:justify-between"
		>
			<div class="flex items-center gap-2 text-sm text-foreground/85">
				<Button
					variant="ghost"
					size="icon"
					onclick={toggleVideo}
					aria-label={paused ? lang.t.ui.playVideo : lang.t.ui.pauseVideo}
					class="-ml-3"
				>
					{#if paused}<Play class="size-4" />{:else}<Pause class="size-4" />{/if}
				</Button>
				<span>{lang.t.hero.since}</span>
				<a
					href="#about"
					class="ml-4 inline-flex min-h-11 items-center gap-1.5 transition-colors hover:text-foreground"
				>
					{lang.t.nav.about}
					<ArrowDown class="bounce-down size-3.5" />
				</a>
			</div>
			<div class="flex flex-wrap items-center gap-2 md:gap-3">
				<Button
					href="#classes"
					size="lg"
					variant="outline"
					class="h-11 flex-1 bg-ink/40 px-4 md:h-12 md:flex-none md:px-6"
				>
					{lang.t.nav.classes}
				</Button>
				<Button href="#contact" size="lg" class="h-11 flex-1 px-4 md:h-12 md:flex-none md:px-6">
					{lang.t.hero.cta}
					<ArrowRight />
				</Button>
			</div>
		</div>
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
		animation: content-enter 0.9s ease-out both;
	}
</style>
