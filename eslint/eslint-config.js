'use strict';

module.exports = {
	'root': true,
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'script',
	},
	'env': {
		'node': true,
		'browser': true,
		'jasmine': true,
		'es6': true
	},
	'extends': [
		'eslint:all',
	],
	'plugins': ['html'],
	'rules': {
		'no-console': 'off',
		'no-extra-boolean-cast': 'off',
		'no-extra-parens': 'off',
		'no-irregular-whitespace': [
			'error',
			{'skipRegExps': true}
		],
		'no-prototype-builtins': 'off',
		'no-template-curly-in-string': 'off',
		'valid-jsdoc': 'off',
		'array-callback-return': 'off',
		'class-methods-use-this': 'off',
		'consistent-return': 1,
		'guard-for-in': 'off',
		'no-alert': 'off',
		'no-case-declarations': 'off',
		'no-else-return': 'off',
		'no-empty-function': 'off',
		'no-extra-label': 'off',
		'no-implicit-coercion': [
			'error',
			{'boolean': false, 'number': true, 'string': false}
		],
		'no-implicit-globals': 'off',
		'no-invalid-this': 'off',
		'no-loop-func': 'off',
		'no-magic-numbers': 'off',
		'no-new': 'off',
		'no-param-reassign': 'off',
		'no-restricted-properties': 'off',
		'no-return-await': 'off',
		'no-unmodified-loop-condition': 'off',
		'no-unused-labels': 'off',
		'no-useless-concat': 'off',
		'no-useless-escape': 'off',
		'no-warning-comments': 'warn',
		'require-await': 'off',
		'vars-on-top': 'off',
		'wrap-iife': 'off',
		'yoda': [
			'error',
			'never',
			{'onlyEquality': true}
		],
		'init-declarations': 'off',
		'no-restricted-globals': 'off',
		'no-shadow': 'off',
		'no-undef-init': 'off',
		'no-undefined': 'off',
		'no-unused-vars': [
			'error',
			{'vars': 'all', 'args': 'none'}
		],
		'no-use-before-define': 'off',
		'callback-return': 'off',
		'global-require': 'off',
		'no-process-env': 'off',
		'brace-style': [
			'error',
			'1tbs',
			{'allowSingleLine': true}
		],
		'capitalized-comments': 'off',
		'comma-dangle': 'off',
		'comma-spacing': [
			'error',
			{'before': false, 'after': true}
		],
		'consistent-this': [
			'error',
			'self'
		],
		'eol-last': 'off',
		'func-name-matching': 'off',
		'func-names': 'off',
		'func-style': 'off',
		'id-blacklist': 'off',
		'id-length': 'off',
		'indent': [
			'error',
			'tab',
			{
				'FunctionDeclaration': {'parameters': 2},
				'FunctionExpression': {'parameters': 2},
				'CallExpression': {'arguments': 2},
				'flatTernaryExpressions': true
			}
		],
		'jsx-quotes': 'off',
		'key-spacing': [
			'error',
			{'afterColon': true}
		],
		'line-comment-position': 'off',
		'linebreak-style': 'off',
		'lines-around-comment': 'off',
		'lines-around-directive': 'off',
		'max-len': [
			'error',
			{'code': 120, 'tabWidth': 4, 'ignoreComments': true, 'ignoreTrailingComments': true, 'ignoreStrings': true, 'ignoreRegExpLiterals': true, ignoreTemplateLiterals: true}
		],
		'max-lines': 'off',
		'max-params': 'off',
		'max-statements-per-line': 'off',
		'max-statements': [
			'error',
			200
		],
		'multiline-ternary': 'off',
		'new-cap': 'off',
		'newline-after-var': 'off',
		'newline-before-return': 'off',
		'newline-per-chained-call': 'off',
		'no-continue': 'off',
		'no-inline-comments': 'off',
		'no-lonely-if': 'off',
		'no-mixed-operators': 'off',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'off',
		'no-plusplus': 'off',
		'no-restricted-syntax': [
			'error',
			'WithStatement'
		],
		'no-tabs': 'off',
		'no-ternary': 'off',
		'no-trailing-spaces': [
			'error',
			{'skipBlankLines': true}
		],
		'no-underscore-dangle': 'off',
		'object-curly-newline': 'off',
		'object-property-newline': [
			'error',
			{'allowMultiplePropertiesPerLine': true}
		],
		'one-var-declaration-per-line': 'off',
		'one-var': 'off',
		'operator-assignment': 'off',
		'padded-blocks': 'off',
		'quote-props': 'off',
		'require-jsdoc': 'off',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-function-paren': [
			'error',
			'never'
		],
		'spaced-comment': 'off',
		'unicode-bom': 'off',
		'wrap-regex': 'off',
		//
		'multiline-comment-style': [
			'error',
			'separate-lines'
		],
		'strict': [
			'error',
			'global'
		],
		'lines-between-class-members': [
			'error',
			'never'
		],
		'prefer-destructuring': [
			'error',
			{
				'array': false,
				'object': true
			},
			{
				'enforceForRenamedProperties': false
			}
		],
		'no-multi-assign': 'off',
		'quotes': [
			'error',
			'single'
		],
		'array-element-newline': 'off',
		'function-paren-newline': 'off',
		'array-bracket-newline': 'off',

		// ECMAScript 6
		'no-confusing-arrow': 'off',
		'prefer-template': 'off',

	}

};