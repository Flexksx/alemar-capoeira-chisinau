import Fuse, { type FuseResultMatch } from 'fuse.js';
import type { Song } from './types';

export type SearchResult = {
	song: Song;
	score: number;
	matches?: readonly FuseResultMatch[];
};

const prepareSongForSearch = (song: Song) => {
	const verseTexts: string[] = [];

	Object.values(song.verses).forEach((variants) => {
		variants.forEach((verse) => {
			verseTexts.push(verse.text);
		});
	});

	return {
		...song,
		verseTexts: verseTexts.join(' '),
		tagsText: song.tags.join(' ')
	};
};

export const createSongSearch = (songs: Song[]) => {
	const preparedSongs = songs.map(prepareSongForSearch);

	const fuse = new Fuse(preparedSongs, {
		keys: [
			{ name: 'title', weight: 3 },
			{ name: 'author', weight: 1.5 },
			{ name: 'verseTexts', weight: 2 },
			{ name: 'tagsText', weight: 1 }
		],
		// 0.3 still forgives a typo ("parna" finds "Paraná"), but a short word no longer matches
		// almost every song's lyrics. Diacritics are ignored, so "mae" finds "mãe".
		threshold: 0.3,
		ignoreDiacritics: true,
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
};
