module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,jpg,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};