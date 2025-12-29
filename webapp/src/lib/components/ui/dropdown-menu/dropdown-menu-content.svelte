<script lang="ts">
	import { Menu as MenuPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils.js";
	import type { ComponentProps } from "svelte";

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 4,
		align = "start",
		...restProps
	}: MenuPrimitive.ContentProps = $props();
</script>

<MenuPrimitive.Content
	bind:ref
	data-slot="dropdown-menu-content"
	{sideOffset}
	{align}
	class={cn(
		"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-end-2 data-[side=right]:slide-in-from-start-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--bits-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md outline-hidden",
		className
	)}
	{...restProps}
/>

