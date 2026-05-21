<script lang="ts">
	import { setLanguageStore, type Language } from '$lib/i18n.svelte';

	let { data, children } = $props();

	const store = setLanguageStore(data.lang as Language);

	$effect(() => {
		store.set(data.lang as Language);
	});
</script>

{@render children()}
