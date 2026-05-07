<script lang="ts">
	import { useLanguageStore } from '$lib/i18n.svelte';
	import eventsData from '$lib/data/events.json';

	const lang = useLanguageStore();

	interface LandingEvent {
		id: string;
		date: string;
		title: { ro: string; ru: string; en: string };
		description?: { ro: string; ru: string; en: string };
		location?: string;
	}

	const events = eventsData as LandingEvent[];

	const formatDate = (iso: string) => {
		const date = new Date(iso);
		return date.toLocaleDateString(
			lang.current === 'ro' ? 'ro-RO' : lang.current === 'ru' ? 'ru-RU' : 'en-GB',
			{ day: 'numeric', month: 'long', year: 'numeric' }
		);
	};
</script>

<section class="py-24 md:py-36" id="events">
	<div class="mx-auto max-w-5xl px-6 md:px-10">
		<div class="mb-16">
			<h2
				class="font-impact text-[clamp(3rem,9vw,7rem)] leading-none tracking-[0.04em] text-foreground"
			>
				{lang.t.events.title}
			</h2>
			<p class="mt-4 text-sm tracking-[0.2em] uppercase text-foreground/50">
				{lang.t.events.subtitle}
			</p>
		</div>

		{#if events.length === 0}
			<div class="border-l-2 border-primary/30 pl-8 py-4">
				<p class="text-foreground/50 text-lg">{lang.t.events.noEvents}</p>
				<p class="mt-2 text-sm tracking-[0.15em] uppercase text-foreground/30">
					{lang.t.events.stayTuned}
				</p>
			</div>
		{:else}
			<div class="flex flex-col gap-0">
				{#each events as event}
					<div
						class="group relative flex gap-8 border-b border-border/20 py-8 transition-colors hover:border-primary/30"
					>
						<!-- Date column -->
						<div class="w-32 shrink-0">
							<time
								datetime={event.date}
								class="font-impact text-4xl leading-none text-primary tracking-[0.04em]"
							>
								{new Date(event.date).getDate()}
							</time>
							<p class="mt-1 text-xs tracking-[0.2em] uppercase text-foreground/40">
								{new Date(event.date).toLocaleDateString(
									lang.current === 'ro' ? 'ro-RO' : lang.current === 'ru' ? 'ru-RU' : 'en-GB',
									{ month: 'long' }
								)}
								{new Date(event.date).getFullYear()}
							</p>
						</div>

						<!-- Content -->
						<div class="flex-1">
							<h3 class="font-display text-xl text-foreground">
								{event.title[lang.current]}
							</h3>
							{#if event.description}
								<p class="mt-2 text-foreground/60 leading-relaxed">
									{event.description[lang.current]}
								</p>
							{/if}
							{#if event.location}
								<p class="mt-3 text-xs tracking-[0.2em] uppercase text-foreground/40">
									{lang.t.events.location}: {event.location}
								</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
