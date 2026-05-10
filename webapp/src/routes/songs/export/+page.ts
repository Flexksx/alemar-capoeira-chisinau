import songsData from '$lib/resources/song/songs.json';
import type { Song } from '$lib/resources/song/types';
import { sortSongsByCategory } from '$lib/resources/song/utils';

export const prerender = true;

export const load = () => {
	return {
		songs: sortSongsByCategory(songsData as unknown as Song[])
	};
};
