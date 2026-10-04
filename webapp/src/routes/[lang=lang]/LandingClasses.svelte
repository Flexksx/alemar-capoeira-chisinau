<script lang="ts">
	import { useLanguageStore } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { Button } from '@alemar/ui/button';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	const lang = useLanguageStore();

	const facts = $derived([
		{ label: lang.t.classes.daysLabel, value: lang.t.classes.days },
		{ label: lang.t.classes.timeLabel, value: lang.t.classes.time },
		{ label: lang.t.classes.locationLabel, value: lang.t.classes.location }
	]);
</script>

<!-- The schedule is the most useful block for a new visitor, so it gets the brand colour field. -->
<section class="light bg-primary py-24 text-primary-foreground md:py-32" id="classes">
	<div class="mx-auto max-w-6xl px-5 md:px-10">
		<div use:reveal>
			<h2 class="title-xl">{lang.t.classes.title}</h2>
			<p class="mt-4 text-lg font-medium">{lang.t.classes.subtitle}</p>
		</div>

		<dl class="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
			{#each facts as fact, i (fact.label)}
				<div class="border-t-2 border-current pt-4" use:reveal={{ delay: i * 100 }}>
					<dt class="text-label">{fact.label}</dt>
					<dd class="mt-3 font-display text-3xl leading-none uppercase md:text-4xl">
						{fact.value}
					</dd>
				</div>
			{/each}
		</dl>

		<div
			class="mt-16 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
			use:reveal={{ delay: 200 }}
		>
			<p class="text-xl font-semibold">{lang.t.classes.free}</p>
			<Button href="#contact" variant="secondary" size="lg">
				{lang.t.classes.cta}
				<ArrowRight />
			</Button>
		</div>
	</div>
</section>
