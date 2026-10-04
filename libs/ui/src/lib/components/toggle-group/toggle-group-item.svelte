<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
	import { cn } from '../../utils.js';

	let {
		ref = $bindable(null),
		tone = 'ink',
		class: className,
		...restProps
	}: ToggleGroupPrimitive.ItemProps & {
		/** Fill of the selected item: neutral ink, or the amber brand colour. */
		tone?: 'ink' | 'brand';
	} = $props();
</script>

<!-- Items share the group frame. The selected item takes a solid fill. -->
<ToggleGroupPrimitive.Item
	bind:ref
	data-slot="toggle-group-item"
	class={cn(
		'relative inline-flex h-9 items-center justify-center gap-2 border-l border-foreground/55 px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none first:border-l-0',
		// The pseudo-element grows the tap area to at least 44px without changing the look.
		'after:absolute after:inset-x-0 after:-inset-y-1.5',
		'hover:bg-foreground/5 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ring',
		'disabled:pointer-events-none disabled:opacity-40',
		'data-[state=on]:font-semibold',
		tone === 'brand'
			? 'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground'
			: 'data-[state=on]:bg-foreground data-[state=on]:text-background',
		'[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
		className
	)}
	{...restProps}
/>
