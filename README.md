[![Build Status](https://travis-ci.org/maykinmedia/bem.js.svg?branch=1.0)](https://travis-ci.org/maykinmedia/bem.js)
[![Coverage Status](https://coveralls.io/repos/github/maykinmedia/bem.js/badge.svg?branch=master)](https://coveralls.io/github/maykinmedia/bem.js?branch=master)
[![Code Climate](https://codeclimate.com/github/maykinmedia/bem.js/badges/gpa.svg)](https://codeclimate.com/github/maykinmedia/bem.js)
[![Lintly](https://lintly.com/gh/maykinmedia/bem.js/badge.svg)](https://lintly.com/gh/maykinmedia/bem.js/)

[![NPM](https://nodei.co/npm/bem.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bem.js/)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/bemjs.svg)](https://saucelabs.com/u/bemjs)


# bem.js

> DOM selection and manipulation using BEM (Block, Element, Modifier).

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i bem.js --save
```

## Usage 

*Code examples in es6, library is es5 compatible.*
*See [doc](doc/) for full API documentation.*


**Selecting an element**

```js
import BEM from 'bem.js';


// Returns HTMLElement matching .block
BEM.getBEMNode('block');

// Returns HTMLElement matching .block--modifier
BEM.getBEMNode('block', false, 'modifier');

// Returns HTMLElement matching .block__element
BEM.getBEMNode('block', 'element');

// Returns HTMLElement matching .block__element--modifier
BEM.getBEMNode('block', 'element', 'modifier');

// Returns NodeList with HTMLElements matching .block__element--modifier
BEM.getBEMNodes('block', 'element', 'modifier');

// Returns HTMLElement matching .block__element--modifier, child of node
BEM.getChildBEMNode(node, 'block', 'element', 'modifier');

// Returns NodeList with HTMLElements matching .block__element--modifier, children of node
BEM.getChildBEMNodes(node, 'block', 'element', 'modifier');
```


**Building BEM class names**

```js
import BEM from 'bem.js';


// Returns '.block'
BEM.getBEMSelector('block');

// Returns '.block.block--modifier'
BEM.getBEMSelector('block', false, 'modifier');

// Returns '.block__element'
BEM.getBEMSelector('block', 'element');

// Returns '.block__element.block__element--modifier'
BEM.getBEMSelector('block', 'element', 'modifier');


// Returns 'block'
BEM.getBEMClassName('block');

// Returns 'block--modifier'
BEM.getBEMClassName('block', false, 'modifier');

// Returns 'block__element'
BEM.getBEMClassName('block', 'element');

// Returns 'block__element--modifier'
BEM.getBEMClassName('block', 'element', 'modifier');
```


**Adding/removing modifiers**

```js
import BEM from 'bem.js';


// Adding a modifier
let node = BEM.getBEMClassName('foo');
BEM.addModifier(node, 'bar');  // node.className is now 'foo foo--bar'

// Adding an additional modifier
BEM.addModifier(node, 'baz');  // node.className is now 'foo foo--bar foo--baz'

// Removing a modifier
BEM.removeModifier(node, 'bar');  // node.className is now 'foo foo--baz'

// Toggle a modifier
BEM.toggleModifier(node, 'bar');

// Add/remove modifier based on expression
BEM.toggleModifier(node, 'bar', exp);  // If exp is true, add, remove otherwise
BEM.addModifier(node, 'bar', exp);  // Only add if exp is true
BEM.removeModifier(node, 'bar');  // Only remove if exp is true
```


**Check if HTMLElement has a modifier**

```js
import BEM from 'bem.js';


let node = BEM.getBEMNode('foo');  // <article class="foo foo--bar"></article>
BEM.hasModifier(node, 'bar')  // true
BEM.hasModifier(node, 'baz')  // false

let node = BEM.getBEMNode('foo');  // <article class="foo"></article>
BEM.hasModifier(node, 'bar')  // false
```



## Running tests

```sh
$ gulp build  // Make sure you test against the latest build
$ gulp lint   // Check for linting errors
$ gulp test   // Run the tests
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/maykinmedia/bem.js/issues).

## Author

**Maykin Media**

* [maykinmedia.nl](https://www.maykinmedia.nl/)
* [github/maykinmedia](https://github.com/maykinmedia)
* [twitter/maykinmedia](http://twitter.com/maykinmedia)

## License

Copyright © 2016 [Maykin Media](https://www.maykinmedia.nl/)
Licensed under the MIT license.
