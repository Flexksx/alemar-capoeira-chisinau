<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/alemar-logo.png';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/state';

	let { children } = $props();

	// The server hook sets the first page's language. Keep it right on client-side navigation.
	$effect(() => {
		document.documentElement.lang = page.params.lang ?? 'ro';
	});
</script>

<ModeWatcher defaultMode="dark" themeColors={{ dark: '#120B0D', light: '#F5EFE4' }} />

<svelte:head>
	<link rel="icon" type="image/png" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<title>Alemar Capoeira - Cântece</title>
</svelte:head>

<div class="bg-background text-foreground">
	{@render children()}
</div>
