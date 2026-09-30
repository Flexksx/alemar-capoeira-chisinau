import { songs } from '@alemar/songs';

export const prerender = true;

export const load = () => {
	return {
		songs
	};
};
