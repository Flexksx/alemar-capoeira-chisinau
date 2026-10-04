import type { Category } from '@alemar/songs';

/** Fill colour for each song category. Amber is reserved for actions, so no category uses it. */
export const CATEGORY_FILL: Record<Category, string> = {
	ANGOLA: 'bg-foreground text-background',
	REGIONAL: 'bg-sun-yellow text-ink',
	SAMBA: 'bg-sun-orange text-ink',
	UNSPECIFIED: 'bg-muted text-foreground'
};

export const songNumber = (index: number) => String(index + 1).padStart(2, '0');
