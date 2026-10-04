<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
	import { cn } from '../../utils.js';

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: ToggleGroupPrimitive.RootProps = $props();
</script>

<ToggleGroupPrimitive.Root
	bind:ref
	bind:value={value as never}
	data-slot="toggle-group"
	class={cn('inline-flex w-fit items-stretch border border-foreground/55', className)}
	{...restProps}
/>
