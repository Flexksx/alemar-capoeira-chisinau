<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
	import { cn } from '../../utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: ToggleGroupPrimitive.ItemProps = $props();
</script>

<!-- Items join into one outline button group: shared borders, outer corners only. -->
<ToggleGroupPrimitive.Item
	bind:ref
	data-slot="toggle-group-item"
	class={cn(
		'-ml-px inline-flex h-9 items-center justify-center gap-2 rounded-none border bg-background px-3 text-sm font-medium whitespace-nowrap text-muted-foreground transition-all outline-none first:ml-0 first:rounded-l-md last:rounded-r-md dark:border-input dark:bg-input/30',
		'hover:bg-accent hover:text-accent-foreground dark:hover:bg-input/50',
		'focus-visible:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
		'disabled:pointer-events-none disabled:opacity-50',
		'data-[state=on]:z-10 data-[state=on]:border-primary/50 data-[state=on]:bg-primary/10 data-[state=on]:text-primary dark:data-[state=on]:border-primary/50 dark:data-[state=on]:bg-primary/15',
		'[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
		className
	)}
	{...restProps}
/>
