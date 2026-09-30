<script lang="ts">
	import { setLanguageStore } from '$lib/i18n';

	let { data, children } = $props();

	setLanguageStore(() => data.lang);
</script>

{@render children()}
