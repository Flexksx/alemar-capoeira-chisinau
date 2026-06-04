import songsData from '$lib/resources/song/songs.json';
import type { Song } from '$lib/resources/song/types';
import { sortSongsByCategory } from '$lib/resources/song/utils';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return (songsData as unknown as Song[]).map((s) => ({ id: s.id }));
}

export function load({ params }: { params: { id: string } }) {
	const songs = sortSongsByCategory(songsData as unknown as Song[]);
	const index = songs.findIndex((s) => s.id === params.id);
	if (index === -1) throw error(404);
	return { song: songs[index], initialIndex: index };
}
