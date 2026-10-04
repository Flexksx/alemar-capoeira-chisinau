<script lang="ts">
	import { cn } from '../../utils.js';
	import { DropdownMenu as MenuPrimitive } from 'bits-ui';

	let { ref = $bindable(null), class: className, ...restProps }: MenuPrimitive.ItemProps = $props();
</script>

<MenuPrimitive.Item
	bind:ref
	data-slot="dropdown-menu-item"
	class={cn(
		'focus:bg-foreground focus:text-background data-[disabled]:pointer-events-none data-[disabled]:opacity-50 relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-hidden transition-colors',
		className
	)}
	{...restProps}
/>
