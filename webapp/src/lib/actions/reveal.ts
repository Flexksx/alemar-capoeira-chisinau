import type { Action } from 'svelte/action';

export const reveal: Action<HTMLElement, { delay?: number } | undefined> = (node, params) => {
	const delay = params?.delay ?? 0;

	node.style.transitionDelay = `${delay}ms`;
	node.classList.add('reveal-hidden');

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('revealed');
				observer.disconnect();
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
