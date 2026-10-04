<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';

	export const badgeVariants = tv({
		base: 'inline-flex w-fit shrink-0 items-center gap-1 leading-none font-semibold tracking-[0.04em] whitespace-nowrap uppercase [&>svg]:pointer-events-none [&>svg]:size-3',
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground',
				secondary: 'bg-secondary text-secondary-foreground',
				outline: 'border border-foreground/30 text-foreground'
			},
			size: {
				sm: 'px-1.5 py-[3px] text-[11px]',
				default: 'px-2 py-1 text-xs'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];
	export type BadgeSize = VariantProps<typeof badgeVariants>['size'];
</script>

<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '../../utils.js';

	let {
		ref = $bindable(null),
		variant = 'default',
		size = 'default',
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLSpanElement>> & {
		variant?: BadgeVariant;
		size?: BadgeSize;
	} = $props();
</script>

<span
	bind:this={ref}
	data-slot="badge"
	class={cn(badgeVariants({ variant, size }), className)}
	{...restProps}
>
	{@render children?.()}
</span>
