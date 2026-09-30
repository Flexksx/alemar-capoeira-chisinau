import { redirect } from '@sveltejs/kit';
import { songs } from '@alemar/songs';

export const prerender = true;

export const load = () => {
	if (songs.length === 0) {
		throw redirect(302, '/');
	}
	throw redirect(301, `/songs/${songs[0].id}`);
};
