import type { Language } from '$lib/i18n.svelte';

export const prerender = true;

export const load = ({ params }: { params: { lang: string } }) => {
	return { lang: params.lang as Language };
};
