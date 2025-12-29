<script lang="ts">
	import { CATEGORY_LABELS, type Category } from '$lib/types';

	interface Props {
		category: Category;
		size?: 'sm' | 'md';
	}

	let { category, size = 'md' }: Props = $props();

	const categoryColors: Record<Category, string> = {
		ANGOLA: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
		REGIONAL: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
		SAMBA: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30',
		UNSPECIFIED: 'bg-slate-500/15 text-slate-600 dark:text-slate-400 border-slate-500/30'
	};
</script>

<span
	class="inline-flex items-center rounded-full border font-medium {categoryColors[category]} {size === 'sm'
		? 'px-2 py-0.5 text-xs'
		: 'px-3 py-1 text-sm'}"
>
	{CATEGORY_LABELS[category]}
</span>

