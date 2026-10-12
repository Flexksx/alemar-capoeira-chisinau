// Each audience has its own page at /{lang}/{audience}, so that each search intent has one URL.
export const audiences = ['kids', 'adults', 'culture'] as const;

export type Audience = (typeof audiences)[number];
