import { audiences } from '$lib/audiences';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
	['ro', 'ru', 'en'].flatMap((lang) => audiences.map((audience) => ({ lang, audience })));

export const load: PageLoad = ({ params }) => ({ audience: params.audience });
