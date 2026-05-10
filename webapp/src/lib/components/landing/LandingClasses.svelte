<script lang="ts">
	import { useLanguageStore } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { Calendar, Clock, MapPin } from '@lucide/svelte';

	const lang = useLanguageStore();

	const infoCards = $derived([
		{
			label: lang.t.classes.daysLabel,
			value: lang.t.classes.days,
			icon: Calendar
		},
		{
			label: lang.t.classes.timeLabel,
			value: lang.t.classes.time,
			icon: Clock
		},
		{
			label: lang.t.classes.locationLabel,
			value: lang.t.classes.location,
			icon: MapPin
		}
	]);
</script>

<section
	class="relative py-24 md:py-36"
	id="classes"
	style="background: linear-gradient(135deg, oklch(0.14 0.015 60) 0%, oklch(0.12 0.01 60) 100%)"
>
	<div class="mx-auto max-w-5xl px-6 md:px-10">
		<div class="mb-16 text-center" use:reveal>
			<h2
				class="font-impact text-[clamp(3rem,9vw,7rem)] leading-none tracking-[0.04em] text-foreground"
			>
				{lang.t.classes.title}
			</h2>
			<p class="mt-4 text-sm tracking-[0.2em] uppercase text-foreground/50">
				{lang.t.classes.subtitle}
			</p>
		</div>

		<!-- Info cards -->
		<div class="grid gap-px md:grid-cols-3" style="background: oklch(0.28 0.02 55)">
			{#each infoCards as card, i (card.label)}
			{@const Icon = card.icon}
				<div
					class="flex flex-col gap-4 p-8 md:p-10"
					style="background: oklch(0.14 0.015 60)"
					use:reveal={{ delay: i * 100 }}
				>
					<Icon size={28} class="text-primary" />
					<p class="text-xs font-medium tracking-[0.25em] uppercase text-foreground/40">
						{card.label}
					</p>
					<p class="font-display text-xl text-foreground leading-snug">
						{card.value}
					</p>
				</div>
			{/each}
		</div>

		<!-- CTA area -->
		<div class="mt-16 flex flex-col items-center gap-6" use:reveal={{ delay: 200 }}>
			<div class="flex items-center gap-4">
				<span class="h-px w-8 bg-primary/40"></span>
				<p class="font-display italic text-lg text-primary">
					{lang.t.classes.free}
				</p>
				<span class="h-px w-8 bg-primary/40"></span>
			</div>

			<a
				href="#contact"
				class="inline-block border border-primary px-10 py-4 font-impact text-lg tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
			>
				{lang.t.classes.cta} →
			</a>
		</div>
	</div>
</section>
