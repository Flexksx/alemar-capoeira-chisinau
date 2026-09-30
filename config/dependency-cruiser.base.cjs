/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
	forbidden: [
		{
			name: 'no-circular',
			severity: 'error',
			from: {},
			to: { circular: true }
		},
		{
			name: 'no-orphans',
			severity: 'error',
			from: { orphan: true, pathNot: ['\\.d\\.ts$', '/\\+[^/]+$', '\\.(css|json|html)$'] },
			to: {}
		}
	],
	options: {
		doNotFollow: { path: 'node_modules' },
		tsPreCompilationDeps: true,
		enhancedResolveOptions: {
			exportsFields: ['exports'],
			conditionNames: ['svelte', 'import', 'require', 'node', 'default'],
			extensions: ['.ts', '.js', '.svelte', '.json']
		}
	}
};
