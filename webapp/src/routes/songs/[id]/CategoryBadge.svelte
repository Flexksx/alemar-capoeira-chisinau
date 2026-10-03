<script lang="ts">
	import { CATEGORY_LABELS, type Category } from '@alemar/songs';
	import { Badge } from '@alemar/ui/badge';

	interface Props {
		category: Category;
		size?: 'sm' | 'default';
	}

	let { category, size = 'default' }: Props = $props();

	const categoryColors: Record<Category, string> = {
		ANGOLA: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
		REGIONAL: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
		SAMBA: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
		UNSPECIFIED: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30'
	};
</script>

<Badge variant="outline" {size} class={categoryColors[category]}>
	{CATEGORY_LABELS[category]}
</Badge>
