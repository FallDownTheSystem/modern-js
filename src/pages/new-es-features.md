<route>
{
	meta: {
		title: "New ECMAScript Features",
		description: "A showcase of new features added to JavaScript since the 6th edition of ECMAScript.",
		order: 20,
		layout: "article"
	}
}
</route>

<Title :title="$route.meta.title" :description="$route.meta.description" />

Now that we know a little bit about the history of JavaScript, we can move onto modern JavaScript. In my mind, modern JavaScript means two things, the new language features released since ES5 and the build tools and frameworks we use these days to create JavaScript applications.

In this article, we'll look at the new features introduced in the ECMAScript specifications. We're not going to look at every change and detail. Instead, we'll focus on new features, syntax, built-in types, and new methods to existing types. We'll also take a look at some new Web APIs.

:::: c info "Credit" box
The examples in this article are based on [MDN articles](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference), found from this [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/), with some key differences.
::: c tag more
Rather than listing new features chronologically with each version, I'm going to group related features together. Modern browsers support almost all of the latest ES features (even some that aren't technically in the spec yet). Hence, there's no reason to make a distinction between the different editions.
:::
::::

## Syntax
- Default function parameters
- Rest parameters
  - For object properties also
- Destructuring
- Spread
  - For object properties also
- Object literal extensions
- For..of loops
- Octal and binary literals
- Template literals
- Trailing commas
- Logical assignment
- Numeric separators
- Optional chaining ?.
- Nullish coalescing ??

## Bindings
- Const and let
- Block-level function declaration?
- globalThis

## Functions
- Arrow functions
- Generators
  - Iterators
    - Iterator extensions (ES.Next)
- Async functions
- Promise
  - all
  - race
  - any
  - finally
  - allSettled

## Classes
- Class
- Super
- Subclassing
  - Array, Regexp, Function, Promise, others...
- Instance class fields
- Static class fields
- Private methods

## Built-ins

### Map and Set
- Weak variations

### Proxy and Reflect

### BigInt

### TypedArrays, WeakRef, SharedArrayBuffer, Atomics

## Built-in extensions
Properties, methods, static methods

### Object
- assign
- is
- getOwnPropertySymbols
- setPrototypeOf
- values
- entries
- getOwnPropertyDescriptors
- getter and setter methods

### String
- raw
- fromCodePoint
- codePointAt
- normalize
- repeat
- starts/endsWith
- includes
- padStart/End
- replaceAll
- matchAll
- trimLeft/Right/Start/End

### Array
- includes
- from
- of
- copyWithin
- find
- findIndex
- fill
- keys
- values
- entries
- flat
- flatMap

### Number
- isFinite
- isInteger
- isSafeInteger
- isNan
- parseFloat
- parseInt
- EPSILON
- MIN/MAX_SAFE_INTEGER

### Math
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

### RegExp?

## Misc

## Web APIs
- Intl

## WebAssembly