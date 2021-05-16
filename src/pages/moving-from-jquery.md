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

Acording to [W3Techs](https://w3techs.com/technologies/details/js-jquery):
> jQuery is used by 95.7% of all the websites whose JavaScript library we know. This is 77.8% of all websites.

What I find curious is that 50% of jQuery usage is still using version 1 of jQuery. For reference, the current version is 3.6. That means that a lot of sites are using a jQuery version from 2016 or earlier. That might very well be because jQuery is more likely to be found in legacy projects.

This article aims to show you how we can use modern JavaScript features and Web APIs to replace the functionality of jQuery. We'll look at how to manipulate the DOM, update CSS, handle events, add animations, and make AJAX requests without jQuery.

::: c box note Credit
The following examples are based mainly on these two fantastic articles by [Tobias Ahlin](https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/) and [Flavio Copes](https://flaviocopes.com/jquery/). Both of them have a lot of great articles that I highly recommend for you to check out.
:::

## Replacing jQuery

### Selecting elements
https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors
- Selectors (querying DOM elements)
- Running a function on all elements

### Waiting for the DOM to be loaded
- document.ready

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