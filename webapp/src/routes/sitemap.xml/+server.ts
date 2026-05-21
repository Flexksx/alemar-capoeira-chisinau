import songsData from '$lib/resources/song/songs.json';
import type { Song } from '$lib/resources/song/types';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

const SITE_URL = 'https://capoeira.md';
const LANGS = ['ro', 'ru', 'en'];

export const GET: RequestHandler = () => {
	const songs = songsData as unknown as Song[];

	const langUrls = LANGS.flatMap((lang) => [
		`
  <url>
    <loc>${SITE_URL}/${lang}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`,
		`
  <url>
    <loc>${SITE_URL}/${lang}/about</loc>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`
	]);

	const songUrls = songs.map(
		(song) => `
  <url>
    <loc>${SITE_URL}/songs/${song.id}</loc>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>`
	);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${langUrls.join('')}${songUrls.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
