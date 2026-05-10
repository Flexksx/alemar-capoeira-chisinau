import songsData from '$lib/resources/song/songs.json';
import type { Song } from '$lib/resources/song/types';

export const prerender = true;

export function entries() {
	return (songsData as unknown as Song[]).map((s) => ({ id: s.id }));
}
