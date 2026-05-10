<script lang="ts">
	import { useLanguageStore, type Language } from '$lib/i18n.svelte';
	import alemArLogo from '$lib/assets/alemar-logo.png';

	const lang = useLanguageStore();

	let menuOpen = $state(false);
	let activeSection = $state('hero');

	const languages: Language[] = ['ro', 'ru', 'en'];

	const navLinks = $derived([
		{ href: '#classes', label: lang.t.nav.classes, id: 'classes' },
		{ href: '#events', label: lang.t.nav.events, id: 'events' },
		{ href: '#contact', label: lang.t.nav.contact, id: 'contact' }
	]);

	function closeMenu() {
		menuOpen = false;
	}

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

<nav
	class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10"
	style="background: linear-gradient(to bottom, rgba(15,10,5,0.95) 0%, rgba(15,10,5,0) 100%)"
>
	<a href="/">
		<img src={alemArLogo} alt="Alemar Capoeira" class="h-10 w-auto rounded-sm" />
	</a>

	<!-- Desktop nav -->
	<div class="hidden items-center gap-8 md:flex">
		{#each navLinks as link (link.id)}
			<a
				href={link.href}
				class="relative text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary {activeSection === link.id ? 'text-primary' : 'text-foreground/70'}"
			>
				{link.label}
				{#if activeSection === link.id}
					<span class="absolute -bottom-1 left-0 h-px w-full bg-primary"></span>
				{/if}
			</a>
		{/each}
		<a
			href="/songs"
			class="border border-primary/60 px-4 py-1.5 font-impact text-sm tracking-[0.15em] uppercase text-primary transition-all hover:bg-primary hover:text-primary-foreground"
		>
			{lang.t.nav.songs} ♪
		</a>

		<div class="flex items-center gap-1 border border-border/40 rounded-sm px-1 py-0.5">
			{#each languages as l (l)}
				<button
					onclick={() => lang.set(l)}
					class="px-2 py-0.5 text-xs font-bold tracking-widest uppercase rounded-sm transition-colors cursor-pointer {lang.current === l
						? 'bg-primary text-primary-foreground'
						: 'text-foreground/50 hover:text-foreground'}"
				>
					{l}
				</button>
			{/each}
		</div>
	</div>

	<!-- Mobile: lang toggle + hamburger -->
	<div class="flex items-center gap-3 md:hidden">
		<div class="flex items-center gap-1 border border-border/40 rounded-sm px-1 py-0.5">
			{#each languages as l (l)}
				<button
					onclick={() => lang.set(l)}
					class="px-1.5 py-0.5 text-xs font-bold tracking-wider uppercase rounded-sm transition-colors cursor-pointer {lang.current === l
						? 'bg-primary text-primary-foreground'
						: 'text-foreground/50 hover:text-foreground'}"
				>
					{l}
				</button>
			{/each}
		</div>

		<button
			onclick={() => (menuOpen = !menuOpen)}
			class="flex flex-col gap-1.5 p-1 cursor-pointer"
			aria-label="Toggle menu"
		>
			<span
				class="block h-px w-6 bg-foreground transition-transform duration-300 {menuOpen
					? 'translate-y-2.5 rotate-45'
					: ''}"
			></span>
			<span
				class="block h-px w-6 bg-foreground transition-opacity duration-300 {menuOpen
					? 'opacity-0'
					: ''}"
			></span>
			<span
				class="block h-px w-6 bg-foreground transition-transform duration-300 {menuOpen
					? '-translate-y-2.5 -rotate-45'
					: ''}"
			></span>
		</button>
	</div>
</nav>

<!-- Mobile menu overlay -->
{#if menuOpen}
	<div
		class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
		style="background: rgba(15,10,5,0.97)"
	>
		{#each navLinks as link (link.id)}
			<a
				href={link.href}
				onclick={closeMenu}
				class="font-impact text-4xl tracking-widest uppercase transition-colors hover:text-primary {activeSection === link.id ? 'text-primary' : 'text-foreground/80'}"
			>
				{link.label}
			</a>
		{/each}
		<a
			href="/songs"
			onclick={closeMenu}
			class="font-impact text-4xl tracking-widest uppercase text-foreground/80 transition-colors hover:text-primary"
		>
			{lang.t.nav.songs} ♪
		</a>
	</div>
{/if}
