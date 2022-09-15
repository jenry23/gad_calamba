module.exports = {
    globDirectory: 'public/',
    globPatterns: [
        '**/*.{css,js,ico,jpeg,jpg,png,json}'
    ],
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ],
    swDest: 'public/sw.js'
};
