<script lang="ts">
	import { useLanguageStore, type Language } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { Button } from '@alemar/ui/button';
	import { Dialog, DialogContent, DialogTitle } from '@alemar/ui/dialog';
	import { ToggleGroup, ToggleGroupItem } from '@alemar/ui/toggle-group';
	import Menu from '@lucide/svelte/icons/menu';
	import Music from '@lucide/svelte/icons/music';
	import alemArLogo from '$lib/assets/alemar-logo.png';

	const lang = useLanguageStore();

	let menuOpen = $state(false);
	let scrolled = $state(false);
	let activeSection = $state('hero');

	const languages: Language[] = ['ro', 'ru', 'en'];

	const navLinks = $derived([
		{ href: '#about', label: lang.t.nav.about, id: 'about' },
		{ href: '#classes', label: lang.t.nav.classes, id: 'classes' },
		{ href: '#events', label: lang.t.nav.events, id: 'events' },
		{ href: '#contact', label: lang.t.nav.contact, id: 'contact' }
	]);

	const switchLang = (l: string) => {
		if (l && l !== lang.current) void goto(`/${l}`);
	};

	$effect(() => {
		const sections = ['hero', 'about', 'classes', 'gallery', 'events', 'contact'];
		const observers: IntersectionObserver[] = [];

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						activeSection = id;
					}
				},
				{ threshold: 0.35 }
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	});
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 24)} />

<header
	class="dark fixed inset-x-0 top-0 z-40 text-foreground transition-colors duration-300 {scrolled
		? 'border-b border-border bg-background'
		: 'bg-transparent'}"
>
	<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-10">
		<a href="/{lang.current}" class="shrink-0" aria-label="Alemar Capoeira">
			<img src={alemArLogo} alt="" class="h-10 w-auto" />
		</a>

		<div class="hidden items-center gap-1 md:flex">
			{#each navLinks as link (link.href)}
				{@const active = link.id === activeSection}
				<a
					href={link.href}
					class="inline-flex min-h-11 items-center px-3 text-sm font-semibold transition-colors hover:text-foreground {active
						? 'text-foreground underline decoration-2 underline-offset-8'
						: 'text-foreground/70'}"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-2">
			<!-- Same 36px height as the language switch. The pseudo-element keeps a 44px tap area. -->
			<Button
				href="/songs"
				variant="outline"
				size="sm"
				class="relative hidden h-9 after:absolute after:inset-x-0 after:-inset-y-1 sm:inline-flex"
			>
				<Music />
				{lang.t.nav.songs}
			</Button>
			<ToggleGroup
				type="single"
				value={lang.current}
				onValueChange={switchLang}
				aria-label={lang.t.ui.language}
			>
				{#each languages as l (l)}
					<ToggleGroupItem value={l} class="h-[34px] min-w-11 px-2 text-xs uppercase"
						>{l}</ToggleGroupItem
					>
				{/each}
			</ToggleGroup>
			<Button
				variant="ghost"
				size="icon"
				class="md:hidden"
				onclick={() => (menuOpen = true)}
				aria-label={lang.t.ui.menu}
				aria-expanded={menuOpen}
			>
				<Menu class="size-5" />
			</Button>
		</div>
	</nav>
</header>

<Dialog bind:open={menuOpen}>
	<DialogContent
		closeLabel={lang.t.ui.close}
		class="dark top-0 left-0 h-dvh max-h-none w-full max-w-none translate-x-0 border-0 px-5 pt-20 pb-10"
	>
		<DialogTitle class="sr-only">{lang.t.ui.menu}</DialogTitle>
		<nav class="flex flex-col">
			{#each [...navLinks, { href: '/songs', label: lang.t.nav.songs, id: 'songs' }] as link (link.href)}
				<a
					href={link.href}
					onclick={() => (menuOpen = false)}
					class="border-b border-border py-4 font-display text-4xl leading-none uppercase transition-colors hover:text-foreground/70"
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</DialogContent>
</Dialog>
