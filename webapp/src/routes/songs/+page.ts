import { redirect } from '@sveltejs/kit';
import songsData from '$lib/data/songs.json';
import type { Song } from '$lib/types';
import { sortSongsByCategory } from '$lib/utils';

export const prerender = true;

export const load = () => {
	const songs = sortSongsByCategory(songsData as unknown as Song[]);
	if (songs.length === 0) {
		throw redirect(302, '/');
	}
	throw redirect(302, `/songs/${songs[0].id}`);
};
