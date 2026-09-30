<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Alemar UI</title>
</svelte:head>

{@render children()}
