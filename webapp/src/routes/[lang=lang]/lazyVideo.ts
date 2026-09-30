import type { Action } from 'svelte/action';

export const lazyVideo: Action<HTMLVideoElement, { src: string }> = (node, params) => {
	node.preload = 'none';

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.src = params.src;
				node.load();
				node.play().catch(() => {});
				observer.disconnect();
			}
		},
		{ threshold: 0.1 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
