import type { Handle } from '@sveltejs/kit';

// Prerendered pages need the real page language on <html>, for screen readers, search and :lang() styles.
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.params.lang ?? 'ro')
	});
