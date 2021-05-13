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

In this article, we'll look at the new features introduced in the ECMAScript specifications. We're not going to look at every change and detail. Instead, we'll focus on new syntax, features, built-in global objects and new methods to existing objects. We'll also take a look at some new Web APIs.

The goal of this article isn't to teach you new programming concepts, or even to show you how to use these new JavaScript features, that would take far too long. Instead I'm aiming to show you as many cool new features of JavaScript, so you know about them, and link to the relevant MDN articles so you can learn more about the ones that interest you.

::: c info "Credit" box
The examples in this article are based on and directly quoted from [MDN articles](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference), found from this [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/), with some key differences.

This article is like a curated list of these articles, shortened and spliced for brevity and to only, (*mostly* 🙄), contain features introduced since ES5.

Rather than listing new features of each ECMAScript edition chronologically, I'm grouping related features together. Modern browsers support almost all of the latest ES features. So there's really no reason to make a distinction between the different editions.
:::

## Syntax
Let's start by going through some of the new syntax introduced in ES2015+. These new syntax features make writing JavaScript less tedious and more concise. This isn't a complete list; some new syntax is also presented in other sections, but those features are large enough to warrant their own chapters.

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
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. The function declaration can include normal parameters as well, but only the last parameter can be a rest parameter.

```js ln
function myFun(a, b, ...manyMoreArgs) {
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

let { a, b } = { a: 10, b: 20 };
console.log(a); // 10
console.log(b); // 20

// Renaming variables
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

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
2. We can use destructuring in a function's parameters.
3. We can destructure nested objects/arrays.

Putting all of that together:

::: c center-child wide
```js ln
// We still get `size`, since it has a default value
function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
	console.log(size, coords, radius);
}

drawChart({
	coords: { x: 18, y: 30 },
	radius: 30,
	color: 'red' // We can pass in properties that aren't used
});
```
:::

Note that the right hand assignment of an empty object `= {}`, is so that we could call the function without any parameters and it would still work.

[MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

#### Object literal extensions
With some new syntactic sugar for objects, an object's keys can now be declared using shorthands and computed names.

```js ln
// Shorthand property names
let a = 'foo', b = 42, someObj = {};
let o = { a, b, c }
// Previously { a: a, b: b, someObj: someObj }

// Shorthand method names
let o = { property(parameters) {} }
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

#### Optional chaining (?.)

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

[MDN: Optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

#### Nullish coalescing (??)

The nullish coalescing operator `??` is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

This can be contrasted with the logical OR `||` operator, which returns the right-hand side operand if the left operand is any falsy value.

```js ln
let myText = '';
// An empty string (which is also a falsy value)

let notFalsyText = myText || 'Hello world';
console.log(notFalsyText);
// Hello world

let preservingFalsy = myText ?? 'Hi neighborhood';
console.log(preservingFalsy);
// ''
```

[MDN: Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)


#### Exponentiation (**)

The exponentiation operator `**` returns the result of raising the first operand to the power of the second operand. It is equivalent to `Math.pow`, except it also accepts [BigInts](#bigint) as operands.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation

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

#### Object getter and setter

The `get` syntax binds an object property to a function that will be called when that property is looked up.
The `set` syntax binds an object property to a function to be called when there is an attempt to set that property.

```js ln
const language = {
	name: '',
	dialects: ['a', 'b', 'c'],
	previousLanguages: [],
	get firstDialect() {
		if (dialects.length) {
			return this.dialects[0];
		}
		return undefined;
	},
	set current(name) {
		this.name = name;
		this.previousLanguages.push(name);
	}
};

language.current = 'EN';
language.current = 'FA';
console.log(language.log); // Array ["EN", "FA"]
console.log(language.firstDialect); // "a"
console.log(language.name); // "FA"
```

[MDN: get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
[MDN: set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

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

Here's the above arrow function in it's full form.

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

// Regular function style
const multiplied = numbers.map(function(x) { return x * 2 });
```

[MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Iterators and generators

Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of `for...of` loops.

#### Iterators

In JavaScript an **iterator** is an object which defines a sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the [Iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) by having a `next()` method that returns an object with the `value` and `done` properties.

Here is an example of an iterator. It allows creation of a simple range iterator which defines a sequence of integers from `start` to `end`.

```js ln
function makeRangeIterator(start = 0, end = Infinity) {
	let nextIndex = start;

	const rangeIterator = {
		next() {
			if (nextIndex < end) {
				nextIndex++;
				return { value: nextIndex, done: false };
			}
			return { done: true }
		}
	};
	return rangeIterator;
}
```

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

When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a `Generator`. When a value is consumed by calling the generator's `next` method, the Generator function executes until it encounters the `yield` keyword.

The function can be called as many times as desired, and returns a new Generator each time. Each Generator may only be iterated once.

Generators compute their yielded values on demand, which allows them to efficiently represent sequences that are expensive to compute (or even infinite sequences).

```js ln
function* fibonacci() {
	let current = 0;
	let next = 1;
	while (true) {
		yield current;
		[current, next] = [next, next + current];
	}
}

const sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
```

[MDN: Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

#### Iterables

An iterable is an object that defines a method that returns an iterator. This method is the `@@iterator` method and is defined as a property with a `Symbol.iterator` as the key.

::: c note Note box
`@@` describes what's called a well-known [symbol](#symbols). These symbols are typically used as keys of properties that extend the functionality of objects.
:::

For example we, can access the iterators of built-in objects like this:

```js
const someString = 'hi';
const iterator = someString[Symbol.iterator]();

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

You can also use the `Symbol.iterator` to create your own iterables. Here's an example, using a generator function:

```js ln
const myIterable = {
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
		yield 3;
	}
}

// Using the spread syntax will also consume the iterator
const iterated = [...myIterable]; // Array [1, 2, 3]
```

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

Besides the `then` and `catch` methods, there's a third one called `finally`. The finally method's callback is executed when the promise is settled, i.e. either fulfilled or rejected.

Here's an example of how to wrap an old-style callback-based function, `setTimeout` with a promise.

::: c wide center-child
```js
const wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

wait(10*1000)
	.then(() => saySomething("10 seconds"))
	.catch(failureCallback);
```
:::

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

An async function is a function declared with the `async` keyword, and the `await` keyword is permitted within them. The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

::: c info Info box
There's a proposal to allow using `await` at the top-level of modules, enabling modules to act as big async functions.

[TC39: Top-level await](https://github.com/tc39/proposal-top-level-await)
:::

```js ln
function resolveAfter2Seconds() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}

async function asyncCall() {
	console.log('calling');
	const result = await resolveAfter2Seconds();
	console.log(result);
	// expected output: "resolved"
}

asyncCall();
```

Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.


[MDN: Async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

#### for await...of

The `for await...of` statement creates a loop iterating over async iterable objects as well as on sync iterables. Note that this statement can also only be used inside an async function.

```js
for await (variable of iterable) {
	// statement
}
```

The `for await...of` statement can be used with async iterables (iterables defined with `Symbol.asyncIterator`) and async generators, e.g:

```js ln
async function* asyncGenerator() {
	let i = 0;
	while (i < 3) {
		yield i++;
	}
}
```

[MDN: for...await of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)

### Classes

Classes are "special functions", they're built on prototypes. Before ES2015, there was no `class` keyword, instead functions would be used to construct "classes". Functions were a good substitute for classes since they had their own scope, meaning access to `this` and JavaScript's object prototypes allowed for adding class-like "methods" to functions.

```js ln
function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

Person.prototype.getName = function() {
	return this.name;
};
```

In modern JavaScript we have the `class` keyword, which is syntactic sugar for the same prototypical behavior, but makes it much easier to deal with classes.

To declare a class, you use the `class` keyword with the name of the class:

```js
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	// Static property
	static displayName = "Rect";
	// Getter
	get area() {
		return this.calcArea();
	}
	// Method
	calcArea() {
		return this.height * this.width;
	}
	// Static method
	static distance(a, b) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;
		return Math.hypot(dx, dy);
	}
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

:::: c info Info box
There's a proposal to add public and private fields to classes.

This would allow for defining properties ahead of time, rather than in the constructor and marking them as private.

[TC39: Class fields](https://github.com/tc39/proposal-class-fields)

::: c tag more
```js
class Rectangle {
	height = 0;
	width;
	#color = 'red';
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}
```
:::
::::

Classes can be inherited with the `extends` key word.

```js ln
class Cat {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a noise.`);
	}
}

class Lion extends Cat {
	speak() {
		super.speak();
		console.log(`${this.name} roars.`);
	}
}

let l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

[MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## New built-in objects

In this chapter we'll look at new built-in objects in JavaScript. Standard built-in objects are things like `Number`, `Object`, or `Array`. In the next chapter we'll look at additions to existing built-ins, but for now we'll focus on some new additions.

For a full list, see [MDN: Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

### Symbols

Symbols are one of the seven primitive data types in JavaScript, along side with string, number, bigint, boolean, undefined, and null. In other-languages Symbols are referred to as "atoms". The `Symbol` function produces an anonymous, unique value that can be used as an object property. The `Symbol` function can optionally take a description string as an argument.

Here are two symbols with the same description:

```js
let Sym1 = Symbol("Sym")
let Sym2 = Symbol("Sym")

console.log(Sym1 === Sym2) // returns "false"
```

Earlier, in the iterables section, we saw how symbols can be used to extend the functionality of objects by using them as property keys.

JavaScript has quite a few of these well-known symbols. For a full list, refer to [EC39: Well-known symbols](https://tc39.es/ecma262/#sec-well-known-symbols).

[MDN: Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

### Reflection

Reflection is the ability of a process to examine, introspect, and modify its own structure and behavior. JavaScript has two new built-in objects that let us do exactly that. `Proxy` and `Reflect` let us intercept and modify the behavior of objects.

#### Proxy

The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

A Proxy is created with two parameters:

- `target`: the original object which you want to proxy
- `handler`: an object that defines which operations will be intercepted and how to redefine intercepted operations.

For example, here we've provided an implementation of the `get()` handler, which intercepts attempts to access properties in the target:

```js ln
const target = {
	message1: "hello",
	message2: "everyone"
};

const handler = {
	get: function(target, prop, receiver) {
		if (prop === "message2") {
			return "world";
		}
		return target[prop];
	}
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1); // hello
console.log(proxy.message2); // world
```

You can see the full list of proxy handler functions [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy#handler_functions).

[MDN: Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

#### Reflect

Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. `Reflect` is not a function object, so it's not constructible.

The Reflect object provides the following static functions which have the same names as the proxy handler methods. You may be familiar with these methods, since many of them correspond to the methods on `Object`, with some subtle differences.

Here's some examples of Reflect in action:

```js ln
// Detecting whether an object contains certain properties
const duck = {
	name: 'Maurice',
	color: 'white',
	greeting: function() {
		console.log(`Quaaaack! My name is ${this.name}`);
	}
}

Reflect.has(duck, 'color'); // true
Reflect.has(duck, 'haircut'); // false

// Returning the object's own keys
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]

// Adding a new property to the object
Reflect.set(duck, 'eyes', 'black');
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"
```

[MDN: Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

### BigInt

BigInt is a built-in object whose constructor returns a `BigInt` value. BigInt represents whole numbers larger than 2<sup>53</sup> - 1, which is the largest number JavaScript can represent with a `Number` value. BigInt values can be used for arbitrarily large integers.

::: c wide center-child

```js
const previouslyMaxSafeInteger = 9007199254740991n
const alsoHuge = BigInt(9007199254740991)
const hugeString = BigInt("9007199254740991")
const hugeHex = BigInt("0x1fffffffffffff")
const hugeOctal = BigInt("0o377777777777777777")
const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// ↪ 9007199254740991n
```
:::

BigInts can use all the math operator symbols and boolean logic you'd expect, but they are integers, so division will truncate any fractions.

[MDN: BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

### Typed Arrays

Who wants to talk about low-level JavaScript? Great! Let's talk about low-level JavaScript. Namely about ArrayBuffers and TypedArrays.

#### ArrayBuffer and TypedArrays

The `ArrayBuffer` object is used to represent a generic, fixed-length raw binary data buffer.

It is an array of bytes, often referred to in other languages as a "byte array". You cannot directly manipulate the contents of an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer); instead, you create one of the [`TypedArray` objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or a [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

<table class="box">
	<thead>
		<tr>
			<th colspan="17">
				Array buffer (16 bytes)
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td class="border border-gray-800 !pl-[0.75rem]">UInt8Array</td>
			<td class="border border-gray-800 text-center">0</td>
			<td class="border border-gray-800 text-center">1</td>
			<td class="border border-gray-800 text-center">2</td>
			<td class="border border-gray-800 text-center">3</td>
			<td class="border border-gray-800 text-center">4</td>
			<td class="border border-gray-800 text-center">5</td>
			<td class="border border-gray-800 text-center">6</td>
			<td class="border border-gray-800 text-center">7</td>
			<td class="border border-gray-800 text-center">8</td>
			<td class="border border-gray-800 text-center">9</td>
			<td class="border border-gray-800 text-center">10</td>
			<td class="border border-gray-800 text-center">11</td>
			<td class="border border-gray-800 text-center">12</td>
			<td class="border border-gray-800 text-center">13</td>
			<td class="border border-gray-800 text-center">14</td>
			<td class="border border-gray-800 text-center !pr-[0.75rem]">15</td>
		</tr>
		<tr>
			<td class="border border-gray-800 !pl-[0.75rem]">UInt16Array</td>
			<td colspan="2" class="border border-gray-800 text-center">0</td>
			<td colspan="2" class="border border-gray-800 text-center">1</td>
			<td colspan="2" class="border border-gray-800 text-center">2</td>
			<td colspan="2" class="border border-gray-800 text-center">3</td>
			<td colspan="2" class="border border-gray-800 text-center">4</td>
			<td colspan="2" class="border border-gray-800 text-center">5</td>
			<td colspan="2" class="border border-gray-800 text-center">6</td>
			<td colspan="2" class="border border-gray-800 text-center !pr-[0.75rem]">7</td>
		</tr>
		<tr>
			<td class="border border-gray-800 !pl-[0.75rem]">UInt32Array</td>
			<td colspan="4" class="border border-gray-800 text-center">0</td>
			<td colspan="4" class="border border-gray-800 text-center">1</td>
			<td colspan="4" class="border border-gray-800 text-center">2</td>
			<td colspan="4" class="border border-gray-800 text-center !pr-[0.75rem]">3</td>
		</tr>
		<tr>
			<td class="border border-gray-800 !pl-[0.75rem]">Float64Array</td>
			<td colspan="8" class="border border-gray-800 text-center">0</td>
			<td colspan="8" class="border border-gray-800 text-center !pr-[0.75rem]">1</td>
		</tr>
	</tbody>
</table>

There are TypedArrays for signed and unsigned integers, floats and BigInts. So, what about DataViews?

#### DataView

The `DataView` view provides a low-level interface for reading and writing multiple number types in a binary ArrayBuffer, without having to care about the platform's [endianness](https://developer.mozilla.org/en-US/docs/Glossary/Endianness).

Multi-byte number formats are represented in memory differently depending on machine architecture. `DataView` accessors provide explicit control of how data is accessed, regardless of the executing computer's endianness.

So really `DataView` is used in special cases where you need control over the endianness of the data. In most cases you can just use the methods on the `TypedArray` directly.

:::: c box info SharedArrayBuffer
There's also a [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), similar to the ArrayBuffer object. The difference is that SharedArrayBuffers can share memory between the main page and [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

::: c tag more

Since web workes operate in a different thread from the main program, sharing memory introduces concurrency problems. Shared memory can be created and updated simultaneously in workers or the main thread. Depending on the system (the CPU, the OS, the Browser) it can take a while until the change is propagated to all contexts. To synchronize, atomic operations are needed.

The [Atomics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) object provides atomic operations as static methods. Atomic operations make sure that predictable values are written and read, that operations are finished before the next operation starts and that operations are not interrupted.
:::
::::

[MDN: Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)

### Map and Set

We just looked at new indexed collections in JavaScript, now let's take a look at *keyed* collections, `Map` and `Set`.

#### Map

[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) is a new data structure to map values to values. A Map object is a simple key/value map, also known as a dictionary.

Traditionally, objects have been used to map strings to values. Objects allow you to set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Map objects, however, have a few more advantages that make them better maps.

- The keys of an `Object` are `Strings` or `Symbols`, where they can be of any value for a `Map`.
- You can get the size of a `Map` easily, while you have to manually keep track of size for an `Object`.
- The iteration of maps is in insertion order of the elements.
- An `Object` has a prototype, so there are default keys in the map.

The following code shows some basic operations with a Map. You can use a `for...of` loop to return an array of `[key, value]` for each iteration.

```js ln
let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

::: c box info WeakMap

The [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) object is a collection of key/value pairs in which the keys are objects only and the values can be arbitrary values. The object references in the keys are held weakly, meaning that they are a target of garbage collection (GC) if there is no other reference to the object anymore. The WeakMap API is the same as the Map API.

One difference to Map objects is that WeakMap keys are not enumerable (i.e., there is no method giving you a list of the keys). If they were, the list would depend on the state of garbage collection, introducing non-determinism.

:::

#### Set

[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) objects are collections of values. You can iterate its elements in insertion order. A value in a Set may only occur once; it is unique in the Set's collection.

Traditionally, a set of elements has been stored in arrays in JavaScript in a lot of situations. The new Set object, however, has some advantages:

- Deleting Array elements by value `arr.splice(arr.indexOf(val), 1)` is very slow.
- `Set` objects let you delete elements by their value. With an array, you would have to splice based on an element's index.
- The value `NaN` cannot be found with `indexOf` in an array.
- `Set` objects store unique values. You don't have to manually keep track of duplicates.

The following code shows some basic operations with a Set.

```js ln
let mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```

You can create an `Array` from a `Set` using [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) or the [spread syntax](#spread-syntax). Also, the `Set` constructor accepts an `Array` to convert in the other direction.

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

:::: c box info WeakSet

[WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) objects are collections of objects. An object in the `WeakSet` may only occur once. It is unique in the `WeakSet`'s collection, and objects are not enumerable.

::: c tag more

The main differences to the `Set` object are:

- In contrast to Sets, WeakSets are collections of objects only, and not of arbitrary values of any type.
- The WeakSet is weak: References to objects in the collection are held weakly. If there is no other reference to an object stored in the WeakSet, they can be garbage collected. That also means that there is no list of current objects stored in the collection.
WeakSets are not enumerable.
- The use cases of WeakSet objects are limited. They will not leak memory, so it can be safe to use DOM elements as a key and mark them for tracking purposes, for example.
:::
::::

[MDN: Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)

### Internationalization API

We've been saving the best for last. The Internationalization API, that's right, internationalization built straight into JavaScript. The `Intl` object provides language sensitive string comparison, number formatting, date and time formatting, as well as other language sensitive functions.

These are all the constructors under the `Intl` namespace:

- [Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator): Language-sensitive string comparison.
- [DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat): Language-sensitive date and time formatting.
- [RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat): Language-sensitive relative time formatting.
- [ListFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat): Language-sensitive list formatting.
- [Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale): Unicode locale identifiers.
- [NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat): Language-sensitive number formatting.
- [PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) Plural-sensitive formatting and language-specific rules for plurals.

I've found the DateTimeFormat constructor especially useful. Often negating the need for an internationalization or date/time formatting library.

Here's an example of what the DateTimeFormat constructor looks like.

::: c wide center-child
```js ln
const date = new Date(2020, 11, 20, 3, 23, 16, 738);

// Specify date and time format using "style" options (i.e. full, long, medium, short)
new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);
// Expected output "Sunday, December 20, 2020 at 3:23:16 AM GMT+2"
```
:::

The other constructors work more or less the same, you pass in a locale string and an optional options object argument.

Internationalization features have been added outside of the `Intl` object as well. Object's can define a `toLocaleString` method, for example:

```js
const date1 = new Date(2012, 11, 20, 3, 0, 0);
date1.toLocaleString('fi-FI');
// "20.12.2012 klo 3.00.00"

const number1 = 123456.789;
number1.toLocaleString('de-DE');
// "123.456,789"

const array1 = [4, 7, 10];
array1.toLocaleString('fr', { style: 'currency', currency: 'EUR'});
// "4,00 €,7,00 €,10,00 €"
```

[MDN: Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

## Built-in extensions

All the built-in objects have gotten a lot of new additions. Rather than listing all of them here, I'm going to encourage you to checkout the page for the [Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects). Check out the objects you're interested in and see what new methods, static methods and properties they have now-a-days.

The basics are the most interesting ones, [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), and [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

Methods like [`Array.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`Array.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`String.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes), [`String.replaceAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) and [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries), to name a few, are extremely useful.

## Web APIs

We've more or less covered the new features of modern JavaScript. But that's not all there is. The web also has a whole host of new APIs for the DOM and for devices. API's like Fetch, Mutation, Resize, and Intersection (DOM) Observers, Web Workers, File access APIs, or devices API's like notifications, geolocation, or the ambient light sensor API.

These aren't defined in the ECMAScript specification, but rather they're standards that web browsers implement, defined by the World Wide Web Consortium (W3C) and Web Hypertext Application Technology Working Group (WHATWG).

:::: c box info Info
On May 28th, 2019, W3C and the WHATWG have signed a agreement to collaborate on a single, authoritative version of the HTML and DOM specifications, published by WHATWG.

::: c tag more

According to W3C's statement, the two parties have come to the following terms:

- W3C and WHATWG work together on HTML and DOM, in the WHATWG repositories, to produce a Living Standard and Recommendation/Review Draft-snapshots
- WHATWG maintains the HTML and DOM Living Standards
- W3C facilitates community work directly in the WHATWG repositories (bridging communities, developing use cases, filing issues, writing tests, mediating issue resolution)
- W3C stops independent publishing of a designated list of specifications related to HTML and DOM and instead will work to take WHATWG Review Drafts to W3C Recommendations
:::
::::

You can see the full index of Web API's [here](https://developer.mozilla.org/en-US/docs/Web/API). There's a lot of them, so I won't be listing and introducing them here; although we will cover the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) in the next article. Here's a few interesting APIs for you to checkout:

- [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API): Background threads, for running long tasks without blocking.
- [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) Two-way interactive communication session between the browser and a server.
- [File System Access](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API): Interaction with files on a user's local device.
- [Houdini](https://developer.mozilla.org/en-US/docs/Web/Houdini): A set of low-level APIs that exposes parts of the CSS engine.

## WebAssembly

Lastly, let's talk about WebAssembly. WebAssembly is a new type of code that can be run in modern web browsers — it is a low-level assembly-like language with a compact binary format that runs with near-native performance and provides languages such as C/C++, C# and Rust with a compilation target so that they can run on the web. It is also designed to run alongside JavaScript, allowing both to work together.

WebAssembly has huge implications for the web platform — it provides a way to run code written in multiple languages on the web at near native speed, with client apps running on the web that previously couldn’t have done so.

WebAssembly is designed to complement and run alongside JavaScript — using the WebAssembly JavaScript APIs, you can load WebAssembly modules into a JavaScript app and share functionality between the two. This allows you to take advantage of WebAssembly's performance and power and JavaScript's expressiveness and flexibility in the same apps, even if you don't know how to write WebAssembly code.

We're not going to cover how to compile code from another language into WebAssembly, but plenty of languages support WebAssembly as a compilation target. For now, let's just look at how to load and use a `wasm` module.

We can use `Fetch` to load a wasm file, and use the `WebAssembly.instantiateStreaming()` function to compile and instantiate the module directly from the streamed source.

::::: c tag slides wide-box aside

:::: c slide two-col

::: c
> What is the exported function?

Exported functions are basically just JavaScript wrappers for the underlying WebAssembly functions. When you call them the arguments are passed to the function inside your wasm module, the function is invoked, and the result is converted and passed back to JavaScript.

We can access the exported functions through the `WebAssembly.Instance.exports` property.
:::

```js {4}
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObj)
.then(obj => {
	// Call an exported function:
	obj.instance.exports.exported_func();

	// or access the buffer contents of an exported memory:
	var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

	// or access the elements of an exported table:
	var table = obj.instance.exports.table;
	console.log(table.get(0)());
});
```
::::

:::: c slide two-col

::: c
> What is the exported memory buffer?

The wasm modules memory buffer is an array of raw bytes. In JavaScript, a `Memory` instance can be thought of as a resizable `ArrayBuffer`. In the example we access the memory and interpret it as an `Uint32Array`.

A memory created by JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript and WebAssembly.
:::

```js {7}
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObj)
.then(obj => {
	// Call an exported function:
	obj.instance.exports.exported_func();

	// or access the buffer contents of an exported memory:
	var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

	// or access the elements of an exported table:
	var table = obj.instance.exports.table;
	console.log(table.get(0)());
});
```
::::

:::: c slide two-col

::: c
> What is the exported table?

A WebAssembly `Table` is a resizable typed array of (function) references that can be accessed by both JavaScript and WebAssembly code.

While `Memory` provides a resizable typed array of raw bytes, it is unsafe for references to be stored in a Memory since a reference must not be read or written directly for safety reasons.
:::

```js {10}
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObj)
.then(obj => {
	// Call an exported function:
	obj.instance.exports.exported_func();

	// or access the buffer contents of an exported memory:
	var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

	// or access the elements of an exported table:
	var table = obj.instance.exports.table;
	console.log(table.get(0)());
});
```
::::

:::: c slide two-col

::: c
> What the `importObj` object?

So far we've seen **exported** functions, and exported memory and table instances. The `importObject` parameter allows us to import our own functions, and memory and table instances into the WebAssembly instance.

The imported object can be accessed in the web assembly code, and the the imported properties must be declared in the compiled module.
:::

```js {1}
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObj)
.then(obj => {
	// Call an exported function:
	obj.instance.exports.exported_func();

	// or access the buffer contents of an exported memory:
	var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

	// or access the elements of an exported table:
	var table = obj.instance.exports.table;
	console.log(table.get(0)());
});
```
::::

:::::

There's a lot more to WebAssembly, if you're interested check out the full guide at MDN.

[MDN: WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly)

In the next chapter, we'll see how we can use these new features and APIs to replace the functionality that has been provided by jQuery for so long and return to vanilla JavaScript.