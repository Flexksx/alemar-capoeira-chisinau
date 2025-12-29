import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Song, Category } from "./types";
import { CATEGORY_ORDER } from "./types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

/**
 * Sorts songs by category order according to CATEGORY_ORDER,
 * maintaining the original order within each category.
 */
export function sortSongsByCategory(songs: Song[]): Song[] {
	// Create a map to track original order within each category
	const categoryGroups: Record<Category, Array<{ song: Song; originalIndex: number }>> = {
		ANGOLA: [],
		REGIONAL: [],
		SAMBA: [],
		UNSPECIFIED: []
	};

	// Group songs by category, preserving original index
	songs.forEach((song, index) => {
		categoryGroups[song.category].push({ song, originalIndex: index });
	});

	// Sort each category group by original index to maintain order within category
	Object.keys(categoryGroups).forEach((category) => {
		categoryGroups[category as Category].sort((a, b) => a.originalIndex - b.originalIndex);
	});

	// Flatten according to CATEGORY_ORDER
	const sorted: Song[] = [];
	CATEGORY_ORDER.forEach((category) => {
		sorted.push(...categoryGroups[category].map((item) => item.song));
	});

	return sorted;
}
