import type { Language, Song } from './types';

export const languagesOf = (song: Song): Language[] => {
	const languages = new Set<Language>();
	for (const variants of Object.values(song.verses)) {
		for (const verse of variants) languages.add(verse.language);
	}
	return [...languages];
};

export const hasLanguage = (song: Song, language: Language): boolean => {
	return languagesOf(song).includes(language);
};
