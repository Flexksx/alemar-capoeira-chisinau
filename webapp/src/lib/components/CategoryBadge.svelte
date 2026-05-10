<script lang="ts">
	import { Category, CATEGORY_LABELS } from '$lib/resources/song/types';

	interface Props {
		category: Category;
		size?: 'sm' | 'md';
	}

	let { category, size = 'md' }: Props = $props();

	const categoryColors: Record<Category, string> = {
		[Category.Angola]: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
		[Category.Regional]: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
		[Category.Samba]: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
		[Category.Unspecified]: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30'
	};
</script>

<span
	class="inline-flex items-center border font-medium tracking-wider uppercase {categoryColors[category]} {size === 'sm'
		? 'px-2 py-0.5 text-[10px]'
		: 'px-2.5 py-1 text-xs'}"
>
	{CATEGORY_LABELS[category]}
</span>
