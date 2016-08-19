[![Build Status](https://travis-ci.org/maykinmedia/bem.js.svg?branch=1.0)](https://travis-ci.org/maykinmedia/bem.js)

# bem.js

> DOM selection and manipulation using BEM (Block, Element, Modifier).

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i bem.js --save-dev
```

## Usage 

Code examples in es6, library is es5 compatible.


**Selecting an element**

```js
import BEM from 'bem.js';


// HTMLElement matching .block
BEM.getBEMNode('block');

// HTMLElement matching .block--modifier
BEM.getBEMNode('block', false, 'modifier');

// HTMLElement matching .block__element
BEM.getBEMNode('block', 'element');

// HTMLElement matching .block__element--modifier
BEM.getBEMNode('block', 'element', 'modifier');

// NodeList with HTMLElements matching .block__element--modifier
BEM.getBEMNodes('block', 'element', 'modifier');
```


**Building BEM class names**

```js
import BEM from 'bem.js';


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
BEM.addModifier(node, 'bar');  // node.className is now 'foo foo--baz'

// Toggle a modifier
BEM.toggleModifier(node, 'bar');
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
$ gulp test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/maykinmedia/bem.js/issues).

## Author

**Maykin Media**

* [www.maykinmedia.nl](https://www.maykinmedia.nl/)
* [github/maykinmedia](https://github.com/maykinmedia)
* [twitter/maykinmedia](http://twitter.com/maykinmedia)

## License

Copyright © 2016 [Maykin Media](https://www.maykinmedia.nl/)
Licensed under the MIT license.
