<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/alemar-logo.png';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />

<svelte:head>
	<link rel="icon" type="image/png" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
	<meta name="theme-color" content="#1a1a1a" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<title>Alemar Capoeira - Cântece</title>
	{@html `<script>
		// Set dark mode as default if no preference is stored
		if (!localStorage.getItem('mode-watcher-mode')) {
			document.documentElement.classList.add('dark');
		}
	</script>`}
</svelte:head>

<div class="bg-background text-foreground">
	{@render children()}
</div>
