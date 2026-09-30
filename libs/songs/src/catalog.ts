import songsData from './songs.json';
import { CATEGORIES, type Song } from './types';

export const sortByCategory = (songs: Song[]): Song[] => {
	return CATEGORIES.flatMap((category) => songs.filter((song) => song.category === category));
};

export const songs: Song[] = sortByCategory(songsData as unknown as Song[]);
