<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { Menu as MenuPrimitive } from "bits-ui";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: MenuPrimitive.ItemProps = $props();
</script>

<MenuPrimitive.Item
	bind:ref
	data-slot="dropdown-menu-item"
	class={cn(
		"focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors",
		className
	)}
	{...restProps}
/>

