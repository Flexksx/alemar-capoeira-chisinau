<script lang="ts">
	import { useLanguageStore } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { Button } from '@alemar/ui/button';
	import Phone from '@lucide/svelte/icons/phone';
	import MapPin from '@lucide/svelte/icons/map-pin';

	const lang = useLanguageStore();

	const contacts = $derived([
		{ label: lang.t.contact.instructor, value: 'Sergiu Melnic', href: undefined },
		{ label: lang.t.contact.phone, value: '079 70 70 72', href: 'tel:+37379707072' },
		{
			label: lang.t.contact.facebook,
			value: '@capoeiramd',
			href: 'https://www.facebook.com/capoeiramd/'
		},
		{
			label: lang.t.contact.instagram,
			value: '@capoeira.moldova',
			href: 'https://www.instagram.com/capoeira.moldova/'
		}
	]);
</script>

<section class="dark bg-background py-24 text-foreground md:py-36" id="contact">
	<div class="mx-auto max-w-6xl px-5 md:px-10">
		<div use:reveal>
			<h2 class="title-xl">{lang.t.contact.title}</h2>
			<p class="mt-4 text-lg text-muted-foreground">{lang.t.contact.subtitle}</p>
		</div>

		<dl class="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
			{#each contacts as contact, i (contact.label)}
				<div class="bg-background p-5" use:reveal={{ delay: i * 80 }}>
					<dt class="text-label text-muted-foreground">{contact.label}</dt>
					<dd class="mt-1 text-lg font-semibold">
						{#if contact.href}
							<a
								href={contact.href}
								target={contact.href.startsWith('http') ? '_blank' : undefined}
								rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
								class="inline-flex min-h-11 items-center underline-link"
							>
								{contact.value}
							</a>
						{:else}
							{contact.value}
						{/if}
					</dd>
				</div>
			{/each}
		</dl>

		<div
			class="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
			use:reveal={{ delay: 150 }}
		>
			<p class="flex items-center gap-2 text-muted-foreground">
				<MapPin class="size-4 shrink-0" />
				{lang.t.contact.address}
			</p>
			<Button href="tel:+37379707072" size="lg">
				<Phone />
				{lang.t.contact.cta}
			</Button>
		</div>
	</div>
</section>

<footer class="dark border-t border-border bg-background py-10 text-foreground">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-end md:justify-between md:px-10"
	>
		<div>
			<p class="font-display text-2xl leading-none uppercase">Alemar Capoeira Chișinău</p>
			<p class="mt-2 text-sm text-muted-foreground">{lang.t.footer.since}</p>
		</div>
		<p class="text-sm text-muted-foreground">{lang.t.footer.tagline}</p>
		<a href="/songs" class="inline-flex min-h-11 items-center text-sm font-semibold underline-link">
			{lang.t.nav.songs}
		</a>
	</div>
</footer>
