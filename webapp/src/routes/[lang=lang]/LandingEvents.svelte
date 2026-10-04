<script lang="ts">
	import { useLanguageStore } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import eventsData from '$lib/data/events.json';
	import MapPin from '@lucide/svelte/icons/map-pin';

	const lang = useLanguageStore();

	interface LandingEvent {
		id: string;
		date: string;
		title: { ro: string; ru: string; en: string };
		description?: { ro: string; ru: string; en: string };
		location?: string;
	}

	const events = eventsData as LandingEvent[];

	// eslint-disable-next-line svelte/prefer-svelte-reactivity
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const isPast = (iso: string) => {
		return new Date(iso) < today;
	};

	const locale = $derived(
		lang.current === 'ro' ? 'ro-RO' : lang.current === 'ru' ? 'ru-RU' : 'en-GB'
	);
</script>

<section class="light bg-background text-foreground" id="events">
	<div class="mx-auto max-w-6xl px-5 md:px-10">
		{#if events.length === 0}
			<!-- Nothing planned: one compact row instead of a full section. -->
			<div
				class="flex flex-col gap-4 border-t border-border py-16 md:flex-row md:items-end md:justify-between md:py-20"
				use:reveal
			>
				<h2 class="title-lg">{lang.t.events.title}</h2>
				<p class="max-w-md text-lg md:pb-2 md:text-right">
					<span class="font-semibold">{lang.t.events.noEvents}</span>
					<span class="text-muted-foreground">{lang.t.events.stayTuned}</span>
				</p>
			</div>
		{:else}
			<div class="border-t border-border pt-20 md:pt-28" use:reveal>
				<h2 class="title-xl">{lang.t.events.title}</h2>
				<p class="mt-4 text-lg text-muted-foreground">{lang.t.events.subtitle}</p>
			</div>
			<ol class="mt-12 pb-24 md:pb-36">
				{#each events as event, i (event.id)}
					{@const past = isPast(event.date)}
					{@const date = new Date(event.date)}
					<li
						class="grid grid-cols-[5.5rem_1fr] gap-5 border-b border-border py-7 md:grid-cols-[8rem_1fr] md:gap-10 {past
							? 'text-muted-foreground'
							: ''}"
						use:reveal={{ delay: i * 80 }}
					>
						<time
							datetime={event.date}
							class="flex flex-col items-center justify-center self-start px-2 pt-3 pb-2 {past
								? 'border border-border'
								: 'bg-foreground text-background'}"
						>
							<span class="font-display text-5xl leading-none md:text-6xl">{date.getDate()}</span>
							<span class="mt-1 text-label">
								{date.toLocaleDateString(locale, { month: 'short' })}
								{date.getFullYear()}
							</span>
						</time>

						<div class="pt-1">
							<h3 class="font-display text-2xl leading-tight uppercase md:text-3xl">
								{event.title[lang.current]}
							</h3>
							{#if event.description}
								<p class="mt-2 max-w-prose leading-relaxed text-foreground/80">
									{event.description[lang.current]}
								</p>
							{/if}
							{#if event.location}
								<p class="mt-3 flex items-center gap-1.5 text-label text-muted-foreground">
									<MapPin class="size-3.5" />
									{event.location}
								</p>
							{/if}
						</div>
					</li>
				{/each}
			</ol>
		{/if}
	</div>
</section>
