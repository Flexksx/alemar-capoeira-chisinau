export type Category = 'ANGOLA' | 'REGIONAL' | 'SAMBA' | 'UNSPECIFIED';
export type VerseType = 'verse' | 'chorus';

export interface Localization {
	transcription?: string; // Phonetic help for pronunciation
	translation?: string; // Meaning translation
}

export interface Verse {
	type: VerseType;
	pt: string; // Original Portuguese text
	localizations?: Record<string, Localization>; // e.g., { ro: { transcription: '...', translation: '...' } }
}

export interface Song {
	id: string;
	title: string;
	author?: string;
	category: Category;
	tags: string[];
	verses: Record<string, Verse>; // Keyed by verse ID (c1, v1, etc.)
	structure: string[]; // Order of verse IDs to render
}

export const CATEGORY_LABELS: Record<Category, string> = {
	ANGOLA: 'Angola',
	REGIONAL: 'Regional',
	SAMBA: 'Samba de Roda',
	UNSPECIFIED: 'Outras'
};

export const CATEGORY_ORDER: Category[] = ['ANGOLA', 'REGIONAL', 'SAMBA', 'UNSPECIFIED'];

