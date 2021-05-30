---
title: Modern JS - Frontend Frameworks
---

<route>
{
	meta: {
		title: "Frontend Frameworks",
		description: "An introduction to frontend JavaScript frameworks through the increasingly popular framework Vue.",
		order: 50,
	}
}
</route>


<Title :title="$route.meta.title" :description="$route.meta.description" />

In the previous articles, we explored new language features and looked at the tools used for modern JavaScript development. So let's tie it all together by looking at how we can use frontend frameworks to build web applications.

::: c note "What is a framework?"
A software framework is an abstraction in which the framework provides a scaffold, where the user can implement their own application-specific logic. Frameworks usually provide some functionality that it takes care of, so that the user can focus on developing the application-specific features. Frameworks provide a standard, reusable, and extendable way to build and deploy applications.

The main difference to a normal library is that in a framework, the control is inverted. A framework calls the user's code, rather than the user calling code provided by a library.
:::

## Introducing Vue

> [Vue](https://v3.vuejs.org/) (pronounced /vjuː/, like view) is a progressive **framework** for building user interfaces.

It should be noted that this article is not a tutorial for Vue; the documentation for Vue does a better job at that than I ever could. Instead, I want to talk about the features of frontend JavaScript frameworks in more generic terms, but it helps to use Vue as a concrete example.

Vue is called a **progressive** framework, because Vue is designed to be incrementally adoptable. So, how do you incrementally adopt Vue?

First off, you can start by adding Vue to a single page if you want, without any build tools, making it easy to add Vue to existing projects. By not requiring any build tools, you can enhance parts of your application without committing to building your entire application with Vue.

Secondly, the core library is focused on the view layer, meaning Vue handles things like templating and rendering of the DOM, but you can extend the functionality by adding official or third-party libraries to Vue as plugins. Official libraries include routing (Vue Router) and state management (Vuex).

Lastly, you can use modern build tools and Vue's [Single File Component (SFC)](https://v3.vuejs.org/guide/single-file-component.html) format — along with the aforementioned libraries, to build robust single-page applications (SPAs).

## Features of frontend frameworks

I'm going to introduce you to typical features and concepts in frontend JavaScript frameworks. Even though we're using Vue as an example here, similar concepts are found in almost every framework.

### Templating

Vue has a template syntax that might seem familiar to you if you've used any server-side templating frameworks before. The template, in this case, simply means our HTML, the DOM.

The template syntax allows us to:
- Embed JavaScript expressions into the template
- Render (or not render) elements conditionally
- Iterate over data and render elements in loops
- Bind expressions to element properties
- Attach event listeners to events on elements

All of this is happens reactively, meaning changes to our data is automatically reflected and re-rendered in the DOM. Let's look at examples of all of these and then talk more about reactivity.

::: c note Note
All of these examples are using the Vue SFC format, so they're not actually showing the part where the entire vue application gets mounted, etc.
:::

Here's a very basic example of declaratively rendering an expression. Expressions need to be inside curly brackets.

```vue
<template>
	<div>
		Rendering an expression: {{ greeting }}
		<br />
		Expressions don't have to be variables:
		{{ 'Another' + ' expression' }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			greeting: 'Hello, world!'
		};
	}
};
</script>
```

Result:

:::: c aside
::: c tag Expressions

:::
::::

Note that the variables we can use in the template must be declared within our Vue instance.

We can use `v-if`, `v-if-else`, and `v-else` to conditionally render elements. There's also a `v-show`, which works the same same `v-if`, but rather than completely removing the element from the DOM, `v-show` simply hides the element (`display: none`).

I've removed some styling from the example, for the sake of brevity.

```vue
<template>
	<div>
		<span v-if="showMessage">Now you see me</span>
		<b v-else>Now you don't</b>
		<button type="button" @click="showMessage = !showMessage">
			Toggle
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showMessage: true
		};
	}
};
</script>
```

Result:

:::: c aside
::: c tag Conditionals

:::
::::

As you can see, the `span` gets hidden when we toggle the `showMessage` variable, and the `b` tag is shown instead.

We've also introduced another concept here, which is handling events with the `@click="handler"` syntax. You can ignore that for now, as we'll explain it shortly.

We can also use loops with `v-for`, which allows us to render elements in an iterable. `v-for` will render the element it is on, and everything inside it.

```vue
<template>
	<div>
		<div v-for="name in names" class="border">
			<span>My name is: </span>
			<span class="text-green-300">{{ name }}</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			names: ['John', 'Jane', 'Lisa', 'Mike']
		};
	}
};
</script>
```

Result:

:::: c aside
::: c tag Loops

:::
::::

We can see the border around the elements, so it's not just the elements inside that are being rendered, but also the wrapping `<div>`. Vue also allows us to iterate over `Object`s, without having to explicitly create an iterable out of them, just as a convenience.

So far we've seen expressions directly in the template. We can also bind expressions into the properties, or attributes of elements.

- Bind properties
- Attach events
- Handling user input
  - v-model

### Reactivity
- Automatically updating DOM
- Watchers / computed properties
- Advanced reactivity graph
- Single source of truth

### Life cycles
- Events
- Graph

### Componization
- Props in, events out
- Prop binding
- Event handling
- Nested components

### State management
- Issue of componization and deeply nested components
- Global state
- Redux pattern

### Routing
- Routing without a library
- Routing with a library

## Frontend framework ecosystems
- Vue ecosystem
  - CLI / Vite
  - Libraries / Components
  - Nuxt
  - Developer tools
- Other frameworks have their own ecosystems
  - React is especially large

## Vue vs. Other frameworks
- React
  - JavaScript first
  - Build your own framework
  - Next
- Angular
  - Comes with everything
  - TypeScript makes everything a bit more verbose
- Svelte
  - More novel approach, no virtual DOM, requires built step
- BUNCH OF OTHERS (link to benchmark report)
- Server-side templating systems
  - C#
  - Java
  - Python
  - PHP

## Closing words

- Subjective view of the landscape
- Other solutions exist
- Everything has its own niche
- Thousands upon thousands of libraries
- If you're curious about how to get started, I would check out the vue documentation.
- Or maybe try Node, use a few libraries, bundle everything together with Rollup
- If you find errors, open an issue or pull request on github