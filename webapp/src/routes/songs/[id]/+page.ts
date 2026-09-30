import { songs } from '@alemar/songs';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const entries = () => {
	return songs.map((s) => ({ id: s.id }));
};

export const load = ({ params }: { params: { id: string } }) => {
	const index = songs.findIndex((s) => s.id === params.id);
	if (index === -1) throw error(404);
	return { song: songs[index], initialIndex: index };
};
