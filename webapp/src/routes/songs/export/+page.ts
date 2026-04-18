import songsData from '$lib/data/songs.json';
import type { Song } from '$lib/types';
import { sortSongsByCategory } from '$lib/utils';

export const prerender = true;

export const load = () => {
	return {
		songs: sortSongsByCategory(songsData as Song[])
	};
};
