# Modern JavaScript

## History of JavaScript
  - Origin of JavaScript, competing implementations
    - JavaScript the name
  - The EcmaScript specification
  - Different version of EcmaScript
  - Stuck in the Dark Ages (Internet Explorer)
  - Moving past IE (Age of Enlightment)
    - Polyfills
      - Feature checking
      - How to polyfill properly
      - Services: polyfill.io
    - Transpilers
    - ES6
    - Can I use
  - Why does JavaScript suck?
    - Backwards compatibility


## New ES features
  - Extensions to existing types/classes
  - New types
  - Functional style
  - New syntax / language features
  - Syntactic sugar
  - New Web APIs

http://es6-features.org/#Constants
https://madasamy.medium.com/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4
https://betterprogramming.pub/javascript-es2021-features-with-simple-examples-ada723b55355
https://babeljs.io/docs/en/learn#ecmascript-2015-features
https://devhints.io/es6
https://github.com/sudheerj/ECMAScript-features
https://dev.to/sinhapiyush/modern-javascript-1jk3
https://dev.to/sinhapiyush/modern-javascript-ii-2h34



### New methods
Extensions to types, such as arrays, strings, numbers, and objects
- Object.entries, Object.values
- Array includes
- Number.IsNaN?
- String.padLeft / padRight

### New types
- Map
- Set
- WeakMap and WeakSet
- BigInt
- ?

### Functional methods
- map, filter, reduce, forEach

### Object-oriented paradigm
- Classes
  - Static fields and methods
  - Private fields and methods
    - can be combined with static

### New syntax
- Arrow functions
- Operators (Ternany, Nullish Coalescing, Optional Chaining)
  - Operator lookup
- async-await
  - Promises
- let, const, (scopes)
- for ... of & Iterators
- Generators?
  - yield, next()
- Template literals
- destructuring
	- option objects
- Rest/Spread syntax
- Trailing comma
- Optional catch binding
- Modules
  - Dynamic import


### Syntactic sugar?
- Enhanced object literals

### New Web APIs
- JS web APIs
	- Intl
	- BigInt
	- WebSocket
	- Service workers
	- Resize and mutation observers
	- local storage
	- Fetch
	- WASM
	- Mobile device sensors
	- File (File System Access) https://web.dev/file-system-access/
		- https://caniuse.com/native-filesystem-api
		https://web.dev/browser-fs-access/



## Moving on from jQuery to vanilla JS
  - Selectors (querying elements)
  - Handling events
  - Modifying the DOM
    - Changing styles / classes
    - Creating and inserting elements
    - Changing text content
  - AJAX

https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/

## Modern JavaScript development (tools)
  - The old way
    - https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70
  - Bundlers
    - Rollup, webpack, parcel, esbuild, others (snowpack?)
    - Extending functionality
      - Plugins for other files types
      - CSS
        - CSS, SASS, LESS, POSTCSS
    - Modules
      - History
        - CJS
        - AMD
        - UMD
        - ESM
          - How Vite takes advantage of ESM
  - Package management
    - Dependencies
    - Node
    - NPM
      - Scripts
      - Alternative package managers
      - BundlePhobia
  - Transpilers
    - Babel
    - TypeScript
- Example running rollup.js

## Introduction to Vue (and JavaScript frameworks)
  - Frameworks
    - What is a framework? Inversion of Control
  - React
  - Angular
  - Vue
    - Vue CLI
    - Vite
    - Vue ecosystem
  - And a million others
  - Reactive data (declarative rendering)
    - Interpolation
    - Conditionals and loops
  - Components
    - Data flow, binding and events
  - Composition API
  - Single File Components
  - Single Page Applications
    - Routing
    - State management
      - Vuex
        - When to use
        - Vue 3 Composition API to the rescue