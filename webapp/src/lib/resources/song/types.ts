export enum Category {
	Angola = 'ANGOLA',
	Regional = 'REGIONAL',
	Samba = 'SAMBA',
	Unspecified = 'UNSPECIFIED'
}

export enum VerseType {
	Verse = 'verse',
	Chorus = 'chorus'
}

export enum Language {
	Portuguese = 'pt',
	RomanianTranscription = 'ro',
	RomanianTranslation = 'ro-translation'
}

export interface Verse {
	type: VerseType;
	text: string;
	language: Language;
}

export interface Song {
	id: string;
	title: string;
	author?: string;
	category: Category;
	tags: string[];
	verses: Record<string, Verse[]>; // verseId -> all language variants
	structure: string[]; // Ordered verseIds, shared across all languages
}

export const CATEGORY_LABELS: Record<Category, string> = {
	[Category.Angola]: 'Angola',
	[Category.Regional]: 'Regional',
	[Category.Samba]: 'Samba de Roda',
	[Category.Unspecified]: 'Outras'
};

export const CATEGORY_ORDER: Category[] = [
	Category.Angola,
	Category.Regional,
	Category.Samba,
	Category.Unspecified
];

export const LANGUAGE_LABELS: Record<Language, { label: string; flag: string }> = {
	[Language.Portuguese]: { label: 'Original', flag: '🇧🇷' },
	[Language.RomanianTranscription]: { label: 'Transcriere', flag: '📖' },
	[Language.RomanianTranslation]: { label: 'Traducere', flag: '🇷🇴' }
};
