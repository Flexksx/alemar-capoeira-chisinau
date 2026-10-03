export const CATEGORIES = ['ANGOLA', 'REGIONAL', 'SAMBA', 'UNSPECIFIED'] as const;
export type Category = (typeof CATEGORIES)[number];

export const LANGUAGES = ['pt', 'ro', 'ro-translation'] as const;
export type Language = (typeof LANGUAGES)[number];

export type VerseType = 'verse' | 'chorus';

export type Verse = {
	type: VerseType;
	text: string;
	language: Language;
};

export type Song = {
	id: string;
	title: string;
	author?: string;
	category: Category;
	tags: string[];
	verses: Record<string, Verse[]>;
	structure: string[];
};

export const CATEGORY_LABELS: Record<Category, string> = {
	ANGOLA: 'Angola',
	REGIONAL: 'Regional',
	SAMBA: 'Samba de Roda',
	UNSPECIFIED: 'Outras'
};

export const LANGUAGE_LABELS: Record<Language, { label: string }> = {
	pt: { label: 'Original' },
	ro: { label: 'Transcriere' },
	'ro-translation': { label: 'Traducere' }
};
