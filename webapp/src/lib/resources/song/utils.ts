import { CATEGORY_ORDER, type Category, type Language, type Song } from './types';

export function getSongLanguages(song: Song): Language[] {
	const languages = new Set<Language>();
	Object.values(song.verses).forEach((variants) => {
		variants.forEach((v) => languages.add(v.language));
	});
	return Array.from(languages);
}

export function hasSongLanguage(song: Song, language: Language): boolean {
	return Object.values(song.verses).some((variants) =>
		variants.some((v) => v.language === language)
	);
}

export function sortSongsByCategory(songs: Song[]): Song[] {
	const categoryGroups: Record<Category, Array<{ song: Song; originalIndex: number }>> = {
		ANGOLA: [],
		REGIONAL: [],
		SAMBA: [],
		UNSPECIFIED: []
	};

	songs.forEach((song, index) => {
		categoryGroups[song.category].push({ song, originalIndex: index });
	});

	Object.keys(categoryGroups).forEach((category) => {
		categoryGroups[category as Category].sort((a, b) => a.originalIndex - b.originalIndex);
	});

	const sorted: Song[] = [];
	CATEGORY_ORDER.forEach((category) => {
		sorted.push(...categoryGroups[category].map((item) => item.song));
	});

	return sorted;
}
