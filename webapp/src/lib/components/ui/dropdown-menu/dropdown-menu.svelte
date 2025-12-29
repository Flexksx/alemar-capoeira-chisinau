<script lang="ts">
	import { Menu as MenuPrimitive } from "bits-ui";

	let { open = $bindable(false), ...restProps }: MenuPrimitive.RootProps = $props();
</script>

<MenuPrimitive.Root bind:open {...restProps} />

