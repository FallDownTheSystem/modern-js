# Modern JavaScript

## The History of JavaScript (The dark times)
- Origin
- Variations
- JavaScript the name
- ECMAScript
- Internet Explorer
- Polyfills
  - Feature checking
  - How to polyfill properly
    - Object property descriptors
  - Services: polyfill.io
- Backwards compatibility
- Can I use
- Up until ES6


## New ECMAScript Features
http://es6-features.org/#Constants
https://madasamy.medium.com/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4
https://betterprogramming.pub/javascript-es2021-features-with-simple-examples-ada723b55355
https://babeljs.io/docs/en/learn#ecmascript-2015-features
https://devhints.io/es6
https://github.com/sudheerj/ECMAScript-features
https://dev.to/sinhapiyush/modern-javascript-1jk3
https://dev.to/sinhapiyush/modern-javascript-ii-2h34

Not all features, just things that enable us to do things in better, more concise and logical ways

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



## Moving past Internet Explorer
- From jQuery to native
	https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/


## Modern JavaScript development
- The old school way - Dinosaurs
  - https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70
- NPM, packages & dependencies
- Build tools
	- Bundlers
		- Rollup, webpack, parcel, esbuild, others (snowpack?)
		- Modules
			- CJS
			- AMD
			- UMD
			- ESM
	- npm scripts
	- npm alternatives
	- CSS, SASS, LESS, POSTCSS
	- BundlePhobia
- Transpilers
	- Babel
	- TypeScript
- Frameworks
	- React
	- Angular
	- Vue
		- Vue CLI
		- Vite
		- Vue ecosystem
	- And a million others


- Example running rollup.js
- Example SKK

================================================================

### History of JavaScript
  - Origin of JavaScript, competing implementations
  - The EcmaScript specification
  - Different version of EcmaScript
  - Stuck in the Dark Ages (Internet Explorer)
  - Moving past IE (Age of Enlightment)
    - Polyfills
    - Transpilers
    - ES6
  - Why does JavaScript suck?
    - Backwards compatibility

### New ES features
  - Extensions to existing types/classes
  - New types
  - Functional style
  - New syntax / language features
  - Syntactic sugar
  - New Web APIs

### Moving on from jQuery to vanilla JS
  - Selectors (querying elements)
  - Handling events
  - Modifying the DOM
    - Changing styles / classes
    - Creating and inserting elements
    - Changing text content
  - AJAX

### Modern JavaScript development (tools)
  - Bundlers
    - Extending functionality
      - Plugins for other files types
    - Modules
      - History
      - Native ES modules
        - How Vite takes advantage of ESM
  - Package management
    - Dependencies
    - Node
    - NPM
      - Scripts
  - Transpilers
    - Babel
    - TypeScript

### Introduction to Vue (and JavaScript frameworks)
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