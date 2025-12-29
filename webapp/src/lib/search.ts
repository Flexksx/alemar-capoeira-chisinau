import Fuse, { type FuseResultMatch } from 'fuse.js';
import type { Song } from './types';

export interface SearchResult {
	song: Song;
	score: number;
	matches?: readonly FuseResultMatch[];
}

// Flatten song data for searching
function prepareSongForSearch(song: Song) {
	const verseTexts: string[] = [];
	const localizationTexts: string[] = [];

	Object.values(song.verses).forEach((verse) => {
		verseTexts.push(verse.pt);
		if (verse.localizations) {
			Object.values(verse.localizations).forEach((loc) => {
				if (loc.transcription) localizationTexts.push(loc.transcription);
				if (loc.translation) localizationTexts.push(loc.translation);
			});
		}
	});

	return {
		...song,
		verseTexts: verseTexts.join(' '),
		localizationTexts: localizationTexts.join(' '),
		tagsText: song.tags.join(' ')
	};
}

export function createSongSearch(songs: Song[]) {
	const preparedSongs = songs.map(prepareSongForSearch);

	const fuse = new Fuse(preparedSongs, {
		keys: [
			{ name: 'title', weight: 3 },
			{ name: 'author', weight: 1.5 },
			{ name: 'verseTexts', weight: 2 },
			{ name: 'localizationTexts', weight: 1.5 },
			{ name: 'tagsText', weight: 1 }
		],
		threshold: 0.4,
		includeScore: true,
		includeMatches: true,
		ignoreLocation: true,
		minMatchCharLength: 2
	});

	return {
		search(query: string): SearchResult[] {
			if (!query.trim()) return [];

			const results = fuse.search(query);
			return results.map((result) => ({
				song: songs.find((s) => s.id === result.item.id)!,
				score: result.score ?? 1,
				matches: result.matches
			}));
		}
	};
}

