<script lang="ts">
	import { CATEGORY_LABELS, type Category } from '@alemar/songs';
	import { Badge } from '@alemar/ui/badge';
	import { CATEGORY_FILL } from './category';

	interface Props {
		category: Category;
		size?: 'sm' | 'default';
	}

	let { category, size = 'default' }: Props = $props();
</script>

<Badge {size} class={CATEGORY_FILL[category]}>
	{CATEGORY_LABELS[category]}
</Badge>
