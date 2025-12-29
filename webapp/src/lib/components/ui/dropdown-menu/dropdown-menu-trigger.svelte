<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { Menu as MenuPrimitive } from "bits-ui";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: MenuPrimitive.TriggerProps = $props();
</script>

<MenuPrimitive.Trigger
	bind:ref
	data-slot="dropdown-menu-trigger"
	class={cn("", className)}
	{...restProps}
/>

