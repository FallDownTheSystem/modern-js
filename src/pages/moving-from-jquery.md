<route>
{
	meta: {
		title: "Moving on from jQuery",
		description: "A case for how modern JavaScript has outgrown the need for jQuery.",
		order: 30,
	}
}
</route>

<Title :title="$route.meta.title" :description="$route.meta.description" />

We shortly mentioned jQuery in the first article about the history of JavaScript. Now I'd like to dedicate an entire article to jQuery, and for a good reason, seeing as jQuery has been one of the most popular JavaScript libraries for well over a decade.

Let's start with a recap of what jQuery is:

> [jQuery](https://jquery.com/) is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

jQuery was started in 2006, almost 15 years ago, and it's still in active development. Although the usage has been declining in favor of modern JavaScript frameworks.

According to [W3Techs](https://w3techs.com/technologies/details/js-jquery):
> jQuery is used by 95.7% of all the websites whose JavaScript library we know. This is 77.8% of all websites.

What I find curious is that 50% of jQuery usage is still using version 1 of jQuery. For reference, the current version is 3.6. That means that a lot of sites are using a jQuery version from 2016 or earlier. That might very well be because jQuery is more likely to be found in legacy projects.

This article aims to show you how we can use modern JavaScript features and Web APIs to replace the functionality of jQuery. We'll look at how to manipulate the DOM, update CSS, handle events, add animations, and make AJAX requests without jQuery.

::: c box note Credit
The following examples are based mainly on these two fantastic articles by [Tobias Ahlin](https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/) and [Flavio Copes](https://flaviocopes.com/jquery/). Both of them have a lot of great articles that I highly recommend for you to check out.
:::

## Replacing jQuery


### Selecting elements

jQuery makes it very easy to select DOM elements, something that for a long time was cumbersome in JavaScript. Previously the way to get a specific element in JavaScript was to use the `getElement*` methods, such as `getElementById` or `getElementsByClassName`. But thanks to the Selectors API, released in 2013, we can easily query DOM elements using the CSS selector syntax.

```js
// Select all instances with jQuery
$(".button");
// Select the first instance
$(".button").first();

// Select all instances with JavaScript
document.querySelectorAll(".button");
// Select the first instance
document.querySelector(".button");
```

One of the nice things with jQuery is that the built-in methods will run against all elements in a query.

```js
$(".button").hide();
// or with custom logic
$(".button").each((index, element) => doSomething(element));
```

With vanilla JavaScript, a query returns an [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element), usually an [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), depending on if you use `querySelector` or `querySelectorAll`.

<svg viewBox="-50 0 600 70" preserveAspectRatio="xMinYMin meet">
	<a xlink:href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget" target="_top">
		<rect x="1" y="1" width="110" height="50" class="fill-current text-gray-700"></rect>
		<text
			x="56"
			y="27"
			font-size="14px"
			class="fill-current text-gray-100"
			text-anchor="middle"
			alignment-baseline="middle"
		>
			EventTarget
		</text>
	</a>
	<polyline points="111,25  121,20  121,30  111,25" stroke="#D4DDE4" fill="none"></polyline>
	<line x1="121" y1="25" x2="151" y2="25" stroke="#D4DDE4"></line>
	<a xlink:href="https://developer.mozilla.org/en-US/docs/Web/API/Node" target="_top">
		<rect x="151" y="1" width="75" height="50" class="fill-current text-gray-700"></rect>
		<text
			x="188.5"
			y="27"
			font-size="14px"
			class="fill-current text-gray-100"
			text-anchor="middle"
			alignment-baseline="middle"
		>
			Node
		</text>
	</a>
	<polyline points="226,25  236,20  236,30  226,25" stroke="#D4DDE4" fill="none"></polyline>
	<line x1="236" y1="25" x2="266" y2="25" stroke="#D4DDE4"></line>
	<a xlink:href="https://developer.mozilla.org/en-US/docs/Web/API/Element" target="_top">
		<rect x="266" y="1" width="75" height="50" class="fill-current text-gray-700"></rect>
		<text
			x="303.5"
			y="27"
			font-size="14px"
			class="fill-current text-gray-100"
			text-anchor="middle"
			alignment-baseline="middle"
		>
			Element
		</text>
	</a>
	<polyline points="341,25  351,20  351,30  341,25" stroke="#D4DDE4" fill="none"></polyline>
	<line x1="351" y1="25" x2="381" y2="25" stroke="#D4DDE4"></line>
	<a xlink:href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_top">
		<rect x="381" y="1" width="110" height="50" class="fill-current text-gray-700"></rect>
		<text
			x="436"
			y="27"
			font-size="14px"
			class="fill-current text-gray-100"
			text-anchor="middle"
			alignment-baseline="middle"
		>
			HTMLElement
		</text>
	</a>
</svg>

We can iterate over a `NodeList` with the built-in method `NodeList.forEach()`, or we can turn the `NodeList` into an `Array`, either with `Array.from()` or with the spread operator `...`, which allows us to use all array methods.

```js
document.querySelectorAll(".button").forEach(x => doSomething(x));

// Turning the returned NodeList into an Array
Array.from(document.querySelectorAll(".button")).map(x => mapSomething(x));
// or by using the spread operator, since NodeList is an iterable
[...document.querySelectorAll(".button")].find(x => x.innerText === "test");
```

We don't have to query all the way from the `document` object every time. We can also query from a specific element and its children directly.
With jQuery, we can use the `find` method, where was with vanilla JavaScript, we can query an element directly, exactly how we would query from the `document`.

```js
// Select the first instance of .button within .container in jQuery
var container = $(".container");
container.find(".button");

// The same in vanilla JS
var container = document.querySelector(".container");
container.querySelector(".button");
```

[MDN: Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)

### Waiting for the DOM to be loaded

A common use case is to wait for the DOM to be loaded before executing any script. In jQuery this is done with the `ready` method; with vanilla JavaScript, we can use the `DOMContentLoaded` event.

```js
$(document).ready(() => {
	//...
})

document.addEventListener("DOMContentLoaded", () => {
	//...
})
```

### Changing styles
- Styles

### Hiding/showing elements
- Hide / Show / Toggle

### Changing classes
- Classes
- ClassList

### Creating and inserting elements
- Creating elements
- Inserting elements
  - Append
  - Prepend

### Removing elements
- Removing elements

### Traversing the DOM tree
- Traversing elements
  - Find child/parent

### Modifying content of elements
- Changing text content
- Changing HTML

### Handling events
- Handling events
  - Live updates

### Adding animations
- jQuery built-in animations
- CSS keyframes

### Making network requests
- ajax
- Fetch

## Do we need jQuery?

Arguably jQuery's API is still more consistent and easier to use than learning how to do everything jQuery offers in vanilla JS, but that comes with a cost. A cost that I don't think is justifiable.

Here are a few reasons for not including jQuery in your project:

- It's an additional dependency that has to be maintained
- It adds another way to do things we can already do
- It increases application complexity; requires more cognitive capacity
- It increases application size (jQuery is 88kB minified, 30.4kB gzipped)
- Even though jQuery is fast, it's never going to be faster than *just* JavaScript

> Does this mean I shouldn't use or lean jQuery, or that jQuery sucks?

No. jQuery is a fantastic library, but for the most part, JavaScript has outgrown its usefulness. Considering the prevalence of jQuery to this date, you're likely to encounter it in existing projects, so you might have to learn it anyway. But, if you're starting a new project, you probably don't need jQuery.

I find that jQuery sits in this valley, where if a project is small and simple, you don't need jQuery, and if it's large or complex, you don't want jQuery; there are better tools or *frameworks* to help us build large-scale applications.

In the following two articles, we're going to talk about modern JavaScript *application* development. We'll look at the build tools and ecosystems for JavaScript and what JavaScript frameworks can offer us.