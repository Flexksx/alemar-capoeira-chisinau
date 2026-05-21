import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	return ['ro', 'ru', 'en'].includes(param);
};
