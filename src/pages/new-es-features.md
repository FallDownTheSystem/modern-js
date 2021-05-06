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

Now that we know a bit about the history of JavaScript, we can move onto modern JavaScript. In my mind, modern JavaScript means two things, the new language features released since ES5 and the build tools and frameworks we use these days to create JavaScript applications.

In this article, we'll look at the new features introduced in the ECMAScript specifications. We're not going to look at every change and detail. Instead, we'll focus on new features, syntax, built-in types, and new methods to existing types. We'll also take a look at some new Web APIs. The article also includes some pre ES2015 features since they help explain the new concepts.

::: c info "Credit" box
The examples in this article are based on [MDN articles](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference), found from this [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/), with some key differences.

Rather than listing new features chronologically with each version, I'm grouping related features together. Modern browsers support almost all of the latest ES features. Hence, there's no reason to make a distinction between the different editions.
:::

## Syntax
Let's start by going through some of the new syntax introduced since ES5. These new syntax features make writing JavaScript less tedious and more concise. This isn't a complete list; some new syntax is also presented in other sections, but those sections are large enough to warrant their own chapters.

#### Default function parameters

Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

```js ln
function multiply(a, b = 1) {
	return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5
```

[MDN: Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

#### Rest parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

```js ln
function sum(...theArgs) {
	// theArgs is an array
	return theArgs.reduce((previous, current) => {
		return previous + current;
	});
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
```

The function parameters can include normal parameters, but only the last parameter can be a rest parameter.

```js ln
function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

[MDN: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

#### Spread syntax

Spread syntax `...` looks exactly like rest syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax *"expands"* an array into its elements, while rest syntax collects multiple elements and *"condenses"* them into a single element.

```js ln
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

The spread syntax makes it easy to clone and concatenate arrays and objects.

```js ln
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

// Copies the array, same as arr1.slice()
let arr3 = [...arr1];

// Concatenas the arrays, same as arr1.concat(arr2);
let arr3 = [...arr1, ...arr2];
```

The same works for objects.

```js ln
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

[MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

#### Destructuring assignment

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js ln
let [a, b] = [10, 20];

console.log(a); // 10
console.log(b); // 20
```

We can also combine destructuring with the rest parameters syntax.
```js ln
let [a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // Array [30,40,50]
```

Destruring also works for objects.

```js ln
let { a, b } = { c: 10, d: 20 };
console.log(a); // 10
console.log(b); // 20
```

Note that the property names have to match, but if we want to we can assign them to new variable names.

```js ln
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

A neat trick is to destructure values into existing variables, allowing us to swap the values of variables in a single expression.

```js ln
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

The destructuring syntax is really powerful. Considering that
1. We can include default values in destructuring assignment.
2. We can destructure directly in a function's parameter declaration.
3. We can destructure nested objects/arrays.

It means that we can use destructuring as a way to pass "options" objects as parameters to functions.

::: c center-child wide
```js ln
function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
  console.log(size, coords, radius);
}

drawChart({
  coords: {x: 18, y: 30},
  radius: 30
  color: 'red'
});
```
:::
The passed object can have additional properties, the destructuring will only assign what is defined. In the same sense, the object doesn't need to include all the properties the parameter expects, if default values are provided for them.

::: c note Note box
In the function signature for drawChart above, the destructured left-hand side is assigned to an empty object literal on the right-hand side:
`{size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}`

You could have also written the function without the right-hand side assignment. However, if you leave out the right-hand side assignment, the function will look for at least one argument to be supplied when invoked, whereas in its current form, you can call `drawChart()` without supplying any parameters. The current design is useful if you want to be able to call the function without supplying any parameters, the other can be useful when you want to ensure an object is passed to the function.
:::

[MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

#### Object literal extensions
Objects properties have some new syntax, their keys can be declared using shorthands and using computed names.

```js ln
// Shorthand property names
let a = 'foo', b = 42, someName = {};
let o = { a, b, c }
// Previously { a: a, b: b, someObj: someObj }

// Shorthand method names
let o = {
	property(parameters) {}
}
// Previously { property: function(parameters) {} }

// Computed property names
let prop = 'foo';
let o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
}
```
[MDN: Object inititalizer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#new_notations_in_ecmascript_2015)

Modern JavaScript also allows leaving trailing commas after object properties and function parameters. Previously trailing commas were only valid syntax in arrays.

```js ln
var object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};

function f(p,) {
	console.log(p);
}

// array destructuring with a trailing comma
[a, b,] = [1, 2];
```
[MDN: Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)

#### For..of loops
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
#### Template literals
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
#### Optional chaining ?.
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
#### Nullish coalescing ??
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
#### Logical assignment
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
#### Exponentiation `(**)`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
#### Numeric separators
  - Octal and binary literals, hex literals
  - https://github.com/tc39/proposal-numeric-separator
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar

## Bindings
#### Const and let
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
#### globalThis
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

## Functions
#### Arrow functions
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
#### Generators
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
#### Iterators
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#is_a_generator_object_an_iterator_or_an_iterable
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
  - Iterator extensions (ES.Next)
    - https://github.com/tc39/proposal-iterator-helpers
#### Async functions
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
  - https://github.com/tc39/proposal-top-level-await
#### Promise
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
#### new.target
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target
#### Classes
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

Regular expressions have had a lot of updates as well, but we're not going to cover them in this article.

### Reflection
#### Proxy
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
#### Reflect
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect

### BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

### Symbols
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
- https://developer.mozilla.org/en-US/docs/Glossary/Symbol
  - Well-known symbols


### Collections and structured data
#### Indexed collections
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

#### Keyed collections
  - Map
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
  - Set
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
  - WeakRef
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef

#### Structured data
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