import songsData from '$lib/data/songs.json';
import type { Song } from '$lib/types';

export const prerender = true;

export function entries() {
	return (songsData as Song[]).map((s) => ({ id: s.id }));
}
