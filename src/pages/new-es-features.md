<route>
{
	meta: {
		title: "New ECMAScript Features",
		description: "A showcase of new features added to JavaScript since the 6th edition of ECMAScript.",
		order: 20,
	}
}
</route>

<Title :title="$route.meta.title" :description="$route.meta.description" />

Now that we know a little bit about the history of JavaScript, we can move onto modern JavaScript. In my mind, modern JavaScript means two things, the new language features released since ES5 and the build tools and frameworks we use these days to create JavaScript applications.

In this article, we'll look at the new features introduced in the ECMAScript specifications. We're not going to look at every change and detail. Instead, we'll focus on new features, syntax, built-in types, and new methods to existing types. We'll also take a look at some new Web APIs. The article will also include some features that were in JavaScript before ES2015, but they're useful for explaining the new concepts.

::: c info "Credit" box
The examples in this article are based on [MDN articles](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference), found from this [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/), with some key differences.

Rather than listing new features chronologically with each version, I'm grouping related features together. Modern browsers support almost all of the latest ES features. Hence, there's no reason to make a distinction between the different editions.
:::

## Syntax
- Default function parameters
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
- Rest parameters
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
- Spread
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- Destructuring
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- Object literal extensions
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#new_notations_in_ecmascript_2015
- Trailing commas
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
- For..of loops
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- Template literals
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
- Optional chaining ?.
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
- Nullish coalescing ??
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
- Logical assignment
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
- Numeric separators
  - Octal and binary literals, hex literals
  - https://github.com/tc39/proposal-numeric-separator
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar

## Bindings
- Const and let
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
- globalThis
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

## Functions
- Arrow functions
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- Generators
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
- Iterators
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#is_a_generator_object_an_iterator_or_an_iterable
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
  - Iterator extensions (ES.Next)
    - https://github.com/tc39/proposal-iterator-helpers
- Async functions
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
  - https://github.com/tc39/proposal-top-level-await
- Promise
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
  - all
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  - allSettled
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
  - any
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
  - race
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
  - Then, Finally, Catch
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
  - Resolve & Reject
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
- new.target
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target
- Classes
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class
  - Super
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
  - Subclassing
    - Array, Regexp, Function, Promise, others...
    - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
  - Class field declarations
    - https://github.com/tc39/proposal-class-fields
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
    - https://github.com/tc39/proposal-private-methods
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

## Built-ins
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

### Reflection
- Proxy
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
- Reflect
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect

### BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

### Symbols
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
- https://developer.mozilla.org/en-US/docs/Glossary/Symbol
  - Well-known symbols


### Collections and structured data
- Indexed collections
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
  - Array
  - Int8Array
  - Uint8Array
  - Uint8ClampedArray
  - Int16Array
  - Uint16Array
  - Int32Array
  - Uint32Array
  - Float32Array
  - Float64Array
  - BigInt64Array
  - BigUint64Array

- Keyed collections
  - Map
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
  - Set
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
  - WeakRef
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef

- Structured data
  - JSON
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
  - ArrayBuffer
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
  - SharedArrayBuffer
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
  - Atomics
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics
  - DataView
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView


## Built-in extensions
Properties, methods, static methods

### Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
- assign
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
- is
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
- defineProperty / defineProperties
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
  - Object.getOwnPropertyDescriptor()
  - Object.getOwnPropertyDescriptors()
  - Object.getOwnPropertyNames()
  - Object.getOwnPropertySymbols()
  - hasOwnProperty()
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
- keys, values, entries
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
- Getter and setter methods
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

### String
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
- raw
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw
- fromCodePoint
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
- codePointAt
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
- normalize
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
- repeat
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
- starts/endsWith
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
- includes
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
- padStart/End
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
- replaceAll
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
- matchAll
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
- trimLeft/Right/Start/End
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd

### Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- includes
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
- from
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
- of
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
- copyWithin
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
- find
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- findIndex
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
- fill
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
- keys
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
- values
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
- entries
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
- flat
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
- flatMap
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
- Something this, that or other about functional style with arrow functions

### Number
- isFinite
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
- isInteger
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
- isSafeInteger
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
- isNaN
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
- parseFloat
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
- parseInt
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
- EPSILON
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
- MIN/MAX_SAFE_INTEGER
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER

### Math
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
- clz32
- imul
- sign
- log10
- log2
- log1p
- expm1
- cosh
- sinh
- tanh
- acosh
- asinh
- atanh
- trunc
- fround
- cbrt
- hypot
- Expontential `**`

## Web APIs

### Internationalization API
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
- Intl
- Intl.Collator
- Intl.DateTimeFormat
- Intl.ListFormat
- Intl.NumberFormat
- Intl.PluralRules
- Intl.RelativeTimeFormat
- Intl.Locale

### Web Workers API
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
- https://developer.mozilla.org/en-US/docs/Web/API/Worker

## WebAssembly
- https://developer.mozilla.org/en-US/docs/WebAssembly
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly
- https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts

- WebAssembly
- WebAssembly.Module
- WebAssembly.Instance
- WebAssembly.Memory
- WebAssembly.Table
- WebAssembly.CompileError
- WebAssembly.LinkError
- WebAssembly.RuntimeError