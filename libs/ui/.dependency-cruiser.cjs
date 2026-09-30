const base = require('../../config/dependency-cruiser.base.cjs');

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
	...base,
	options: {
		...base.options,
		tsConfig: { fileName: 'tsconfig.json' }
	}
};
