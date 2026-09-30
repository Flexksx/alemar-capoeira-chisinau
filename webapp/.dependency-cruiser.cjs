const base = require('../config/dependency-cruiser.base.cjs');

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
	...base,
	forbidden: [
		...base.forbidden,
		{
			name: 'no-single-use-lib-component',
			comment: 'A component in src/lib must have 2 or more importers. Put a single-use component next to its route.',
			severity: 'error',
			from: {},
			module: { path: '^src/lib/.+\\.svelte$', numberOfDependentsLessThan: 2 }
		}
	],
	options: {
		...base.options,
		tsConfig: { fileName: 'tsconfig.json' }
	}
};
