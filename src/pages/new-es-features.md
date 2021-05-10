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

In this article, we'll look at the new features introduced in the ECMAScript specifications. We're not going to look at every change and detail. Instead, we'll focus on new features, syntax, built-in types, and new methods to existing types. We'll also take a look at some new Web APIs. The article also includes some pre ES2015 features since they help explain the new concepts.

::: c info "Credit" box
The examples in this article are based on and directly quoted from [MDN articles](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference), found from this [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/), with some key differences.

This article is like a curated list of these articles, shortened and spliced for brevity and to only (mostly) contain features introduced since ES5.

Rather than listing new features chronologically with each version, I'm grouping related features together. Modern browsers support almost all of the latest ES features. Hence, there's no reason to make a distinction between the different editions.
:::

## Syntax
Let's start by going through some of the new syntax introduced in ES2015+. These new syntax features make writing JavaScript less tedious and more concise. This isn't a complete list; some new syntax is also presented in other sections, but those sections are large enough to warrant their own chapters.

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

Spread syntax `...` looks exactly like rest syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax *" expands "* an array into its elements, while rest syntax collects multiple elements and *" condenses "* them into a single element.

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

Destructuring also works for objects.

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
With some new syntactic sugar for objects, an object's keys can now be declared using shorthands and computed names.

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
The `for...of` statement creates a loop iterating over iterable objects, including Strings, Arrays, and array-like objects (e.g., NodeList).

The `for...of` statement iterates over the **values** of the iterable object.

```js ln
const iterable = [10, 20, 30];

for (const value of iterable) {
	console.log(value);
}
// 10
// 20
// 30

const iterable = 'boo';

for (const value of iterable) {
	console.log(value);
}
// "b"
// "o"
// "o"
```

`for...of` is different from the `for...in` statement, which [iterates](#iterators) over the **properties**, of an object, i.e., the key rather than the value. This means you often have to take an extra step to access the value.

The problem with `for...in` is that adding properties to `Object` or `Array` 's prototype means that those properties will also be iterated over, even though this is rarely the behavior you want.

```js ln
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
	console.log(i);
	// logs "0", "1", "2", "foo", "arrCustom", "objCustom"

	if (iterable.hasOwnProperty(i)) {
		console.log(i);
		// logs "0", "1", "2", "foo"
	}
}

for (const i of iterable) {
	console.log(i);
	// logs 3, 5, 7
}
```

[MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

#### Template literals

Template literals are string literals that allow embedded expressions. You can use multi-line strings and string interpolation features with them.

```js ln
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`
```

Template literals are enclosed by the backtick (`). Any newline characters inserted in the source are part of the template literal, which isn't possible with normal strings, instead you'd have to use newline characters and string concatenation.

The expressions in a template literal also support nested templates. For more complex use cases, you can read about tagged templates in the following link.

[MDN: Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

#### Optional chaining `?.`

The optional chaining operator `?.` enables you to read the value of a property in an object without having to check that the reference is valid. With nested structures, it is possible to use optional chaining multiple times.

The `?.` operator is like the `.` chaining operator, except that instead of causing an error if a reference is nullish (`null` or `undefined`), the expression short-circuits with a return value of `undefined`.

```js ln
const adventurer = {
	name: 'Alice',
	cat: {
		name: 'Dinah'
	}
};

const dogName = adventurer.dog?.name;
console.log(dogName); // undefined
```

[MDN: Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

#### Nullish coalescing `??`

The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

This can be contrasted with the logical OR (`||`) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined. In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g.," or 0).

```js ln
let myText = '';
// An empty string (which is also a falsy value)

let notFalsyText = myText || 'Hello world';
console.log(notFalsyText);
// Hello world

let preservingFalsy = myText ?? 'Hi neighborhood';
console.log(preservingFalsy);
// '' (as myText is neither undefined nor null)
```

[] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator


#### `const` and `let`

Traditionally JavaScript variables were declared using the `var` statement, which declares a function-scoped or globally-scoped variable. The major difference between `var` and `const` or `let` is that `var` variables are function-scoped, where as `let` and `const` are block-scoped, and `var` declarations are [hoisted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting).

The difference between `const` and `let` is that the value of a constant can't be changed through reassignment, and it can't be redeclared.

Note that `const` does not make the value itself immutable, just that the variable identifier cannot be reassigned.

```js ln
function varTest() {
	var x = 1;
	{
		var x = 2; // same variable
		console.log(x); // 2
	}
	console.log(x); // 2
}

function letTest() {
	let x = 1;
	{
		let x = 2; // different variable
		console.log(x); // 2
	}
	console.log(x); // 1
}
```

The nature of `var` makes it unpredictable in some cases. For example:

```js ln
for (var i = 0; i < 5; ++i) {
	setTimeout(function () {
		console.log(i);
	}, 1000);
}
// prints '5' five times
```

This will call the `setTimeout` function five time immediately, and a second later all five callbacks are called with the same value of `i', rather than creating a new lexical environment with each iteration.

[MDN: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
[MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
[MDN: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

## Functions

ECMAScript has had a lot of addition to functions. These come in the form of arrow functions, generators, async functions and classes. We'll be going through all of these and seeing how these new additions work.

### Arrow functions

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

```js ln
// Traditional Function
function (a){
	return a + 100;
}

// Arrow Function
a => a + 100;
```

The main difference is that arrow functions do not have their own scope, meaning they don't bind their own `this`. This means it's not a good idea to use them as methods, as you won't be able to refer to the other properties of the object. On the other hand, arrow functions are well suited for callbacks, since you often want to access the scope where the callback was defined, and not the scope of the function you're passing the callback into.

Let's take a closer look at the concise syntax of arrow functions. Arrow functions can omit paranthesis around the parameters, if there's only one parameter. They can also omit the brackets around the body of the function, and the return statement, in which case the return is implicit.

Here's the above arrow function in it's full form

```js
(a) => {
	return a + 100;
}
```

Arrow functions, just like regular functions, are expressions and can be assigned to a variable.

```js
let max = (a, b) => a > b ? a : b;
```

This short syntax makes arrow functions excellent in use as arguments in higher-order functions, such as `filter`, `find`, or `map`.

```js
const numbers = [1, 4, 9, 16];
const multiplied = numbers.map(x => x * 2);
```

vs.

```js
const numbers = [1, 4, 9, 16];
const multiplied = numbers.map(function(x) { return x * 2 });
```

[MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Iterators and generators

Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of `for...of` loops.

In JavaScript an **iterator** is an object which defines a sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the [Iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) by having a `next()` method that returns an object with two properties:

`value`
The next value in the iteration sequence.

`done`
This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.
Once created, an iterator object can be iterated explicitly by repeatedly calling `next()`. Iterating over an iterator is said to consume the iterator, because it is generally only possible to do once. After a terminating value has been yielded additional calls to `next()` should continue to return `{ done: true }`.

The most common iterator in JavaScript is the `Array` iterator, which returns each value in the associated array in sequence.

Note that iterators are not equivalent to arrays. Iterators are consumed only as necessary. Because of this, iterators can express sequences of unlimited size, such as the range of integers between 0 and Infinity.

Here is an example which can do just that. It allows creation of a simple range iterator which defines a sequence of integers from `start` to `end`, spaced `step` apart. Its final return value is the size of the sequence it created, tracked by the variable `iterationCount`.

::: c wide center-child
```js ln
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
	let nextIndex = start;
	let iterationCount = 0;

	const rangeIterator = {
		next: function() {
			let result;
			if (nextIndex < end) {
				result = { value: nextIndex, done: false }
				nextIndex += step;
				iterationCount++;
				return result;
			}
			return { value: iterationCount, done: true }
		}
	};
	return rangeIterator;
}
```
:::
Using the iterator then looks like this:
``` js ln
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
	console.log(result.value); // 1 3 5 7 9
	result = it.next();
}
```

#### Generator functions
While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the `function*` syntax.

When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's `next` method, the Generator function executes until it encounters the `yield` keyword.

The function can be called as many times as desired, and returns a new Generator each time. Each Generator may only be iterated once.

We can now adapt the example from above. The behavior of this code is identical, but the implementation is much easier to write and read.

```js ln
function* makeRangeIterator(start = 0, end = 100, step = 1) {
	let iterationCount = 0;
	for (let i = start; i < end; i += step) {
		iterationCount++;
		yield i;
	}
	return iterationCount;
}
```

#### Iterables
An object is iterable if it defines its iteration behavior, i.e. what values are looped over in a `for...of` construct. Some built-in types, such as `Array` or `Map`, have a default iteration behavior, while other types (such as `Object`) do not.

In order to be iterable, an object must implement the `@@iterator` method. This means that the object (or one of the objects up its prototype chain) must have a property with a `Symbol.iterator` key.

::: c note Note box
`@@` describes what's called a well-known [symbol](#symbols). These symbols are typically used as keys of properties that extend the functionality of objects.
:::

It may be possible to iterate over an iterable more than once, or only once. It is up to the programmer to know which is the case.

Iterables which can iterate only once (such as Generators) customarily return `this` from their `@@iterator` method, whereas iterables which can be iterated many times must return a new iterator on each invocation of `@@iterator`.

You can make your own iterables like this:
```js ln
const myIterable = {
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
		yield 3;
	}
}

for (let value of myIterable) {
	console.log(value);
}
// 1
// 2
// 3


// Using the spread operator will also consume the iterator
[...myIterable]; // [1, 2, 3]
```

#### More on generators

Generators compute their yielded values on demand, which allows them to efficiently represent sequences that are expensive to compute (or even infinite sequences, as demonstrated above).

The `next()` method also accepts a value, which can be used to modify the internal state of the generator. A value passed to `next()` will be received by yield.

Note: A value passed to the first invocation of `next()` is always ignored.

Here is the fibonacci generator using `next(x)` to restart the sequence:

```js ln
function* fibonacci() {
	let current = 0;
	let next = 1;
	while (true) {
		let reset = yield current;
		[current, next] = [next, next + current];
		if (reset) {
			current = 0;
			next = 1;
		}
	}
}

const sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
```

You can force a generator to throw an exception by calling its `throw()` method and passing the exception value it should throw. This exception will be thrown from the current suspended context of the generator, as if the yield that is currently suspended were instead a throw value statement.

If the exception is not caught from within the generator, it will propagate up through the call to `throw()`, and subsequent calls to `next()` will result in the done property being true.

Generators have a `return(value)` method that returns the given value and finishes the generator itself.

[MDN: Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

### Asynchronous functions

JavaScript has a new way of dealing with callbacks in asynchronous functions, called Promises, and some new keywords, `async` and `await`, which let us write asynchronous functions in a more readable form.

#### Promise

A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

A `Promise` is in one of these states:
- `pending`: initial state, neither fulfilled nor rejected.
- `fulfilled`: meaning that the operation was completed successfully.
- `rejected`: meaning that the operation failed.

Callbacks are added with `then()`. One of the great things about using promises is chaining. Multiple callbacks may be added by calling `then()` several times. They will be invoked one after another, in the order in which they were inserted. The `then()` function returns a new promise object every time.

Doing several asynchronous operations in a row would lead to the classic callback pyramid of doom:

```js ln
doSomething(function(result) {
	doSomethingElse(result, function(newResult) {
		doThirdThing(newResult, function(finalResult) {
		console.log('Got the final result: ' + finalResult);
		}, failureCallback);
	}, failureCallback);
}, failureCallback);
```

With modern functions, we attach our callbacks to the returned promises instead, forming a promise chain:

```js ln
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
	console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

Besides the `then` and `catch` methods, there's a third one called `finally`. The finally() method's callback is executed when the promise is settled, i.e. either fulfilled or rejected.

Here's an example of how to wrap an old-style callback-based function, `setTimeout` with a promise.

```js
const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

wait(10*1000) // Wait 10 seconds
	.then(() => saySomething("10 seconds"))
	.catch(failureCallback);
```
Note that the `reject` method is left unused here, but generally, you'd wrap an asynchronous function in a try/catch block and reject the promise with some error object if the operation failed.

```js
const myFirstPromise = new Promise((resolve, reject) => {
	// do something asynchronous which eventually calls either:
	// resolve(someValue)		// fulfilled
	// or
	// reject("failure reason")	// rejected
});
```

The `Promise` object contains some built-in static methods that help deal with multiple concurrent promises. See [all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), [allSettled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled), [any](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any), [race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).

[MDN: Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
[MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### Async/await
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
- https://github.com/tc39/proposal-top-level-await

### Classes
- Pre ES6 "classes"
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

#### Exponentiation `**`
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
#### Numeric separators
  - Octal and binary literals, hex literals
  - https://github.com/tc39/proposal-numeric-separator
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar

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