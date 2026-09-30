import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import sveltePlugin from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

const lucideBarrel = {
	name: '@lucide/svelte',
	message: 'Import the icon by its deep path: @lucide/svelte/icons/<name>.'
};

const arrowOnly = {
	selector: 'VariableDeclarator > FunctionExpression',
	message: 'Use an arrow function.'
};

const tsRules = {
	...ts.configs.recommended.rules,
	'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
	'@typescript-eslint/no-explicit-any': 'warn',
	'func-style': ['error', 'expression'],
	'@typescript-eslint/no-use-before-define': ['error', { variables: false, functions: false, classes: false }],
	'no-restricted-syntax': ['error', arrowOnly],
	'no-restricted-imports': ['error', { paths: [lucideBarrel] }]
};

export default [
	js.configs.recommended,
	...sveltePlugin.configs['flat/recommended'],
	{
		files: ['**/*.ts', '**/*.svelte.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				extraFileExtensions: ['.svelte']
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.svelte
			}
		},
		plugins: { '@typescript-eslint': ts },
		rules: tsRules
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.svelte
			},
			parserOptions: {
				parser: tsParser
			}
		},
		plugins: { '@typescript-eslint': ts },
		rules: {
			...tsRules,
			'svelte/no-navigation-without-resolve': 'off'
		}
	},
	{
		files: ['webapp/src/routes/**/*.ts', 'webapp/src/routes/**/*.svelte'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					paths: [lucideBarrel],
					patterns: [
						{
							regex: '^\\.\\./|^\\./[^/]+/',
							message:
								'A route owns the modules in its folder. Move a module that 2 routes need to src/lib.'
						}
					]
				}
			]
		}
	},
	{
		files: ['libs/ui/src/lib/**/*.ts', 'libs/ui/src/lib/**/*.svelte'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					paths: [lucideBarrel],
					patterns: [
						{
							regex: '^\\$lib(/|$)',
							message: 'Use a relative import. In the webapp, $lib resolves to the webapp.'
						},
						{
							regex: '^\\$app/|^@sveltejs/kit$|^@alemar/',
							message: 'libs/ui must not depend on SvelteKit or on other workspace packages.'
						}
					]
				}
			]
		}
	},
	{
		files: ['libs/songs/src/**/*.ts'],
		rules: {
			'no-restricted-syntax': [
				'error',
				arrowOnly,
				{ selector: 'TSEnumDeclaration', message: 'Use an `as const` list and a `type`.' },
				{ selector: 'TSInterfaceDeclaration', message: 'Use a `type`.' }
			],
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							regex: '^svelte($|/)|^\\$app/|^@sveltejs/|^@alemar/|^@lucide/',
							message: 'libs/songs is plain TypeScript. It must not import Svelte or other workspace packages.'
						}
					]
				}
			]
		}
	},
	{
		files: ['libs/ui/src/lib/components/**/*.svelte'],
		rules: {
			'@typescript-eslint/no-unused-vars': 'off'
		}
	},
	prettier,
	{
		ignores: ['**/.svelte-kit/**', '**/build/**', '**/dist/**', '**/node_modules/**']
	}
];
