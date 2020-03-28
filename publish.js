/**
 * Given the following directory structure:
 *
 *   build/
 *     index.html
 *     js/
 *       site.js
 *
 * The usage below will create a `master` branch that looks like this:
 *
 *   index.html
 *   js/
 *     site.js
 *
 */
let ghpages = require('gh-pages');
ghpages.publish('build', {branch: 'master'}, () => console.log('Published contents of `./build` to `https://github.com/dcp-covid19/dcp-covid19.github.io/tree/master`.'));