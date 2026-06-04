import { redirect } from '@sveltejs/kit';
import songsData from '$lib/resources/song/songs.json';
import type { Song } from '$lib/resources/song/types';
import { sortSongsByCategory } from '$lib/resources/song/utils';

export const prerender = true;

export const load = () => {
	const songs = sortSongsByCategory(songsData as unknown as Song[]);
	if (songs.length === 0) {
		throw redirect(302, '/');
	}
	throw redirect(301, `/songs/${songs[0].id}`);
};
