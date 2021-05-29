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

From the previous articles, we know the new language features and the tools used for modern JavaScript development, but we still don't know how to *actually* create modern frontend JavaScript applications. So let's look at how frameworks can help us build applications. Let's start with what a framework even is.

## What is a framework

A software framework is an abstraction in which the framework provides a scaffold, where the user can implement their own application-specific logic. Frameworks usually provide some functionality that it takes care of, so that the user can focus on developing the application-specific features. Frameworks provide a standard, reuseable way to build and deploy applications.

The main difference to a normal library is that in a framework, the control is inverted. The framework calls the user's code, rather than the user calling code provided by a library.

Since we're using Vue as an example, let's introduce Vue more thoroughly as well.

> Vue (pronounced /vjuː/, like view) is a progressive **framework** for building user interfaces.

They call it a **progressive** framework, because Vue is designed to be incrementally adoptable. You can use Vue in existing projects, without any build tools, like any other library.

Vue also has a "Single File Component (SFC)" format that allows creating modular components but requires build tools. Combined with modern build tools and other Vue libraries, e.g., routing and state management, Vue makes it easy to create single-page applications (SPAs).

The core of Vue is focused on the view layer — much like every frontend framework, and in the following chapters, we'll see what that means.

## Features of frontend frameworks

It should be noted that this article is not a tutorial for Vue; the documentation for Vue does a better job at that than I ever could. Instead, I want to talk about the features of frontend JavaScript frameworks in more generic terms, but it helps to use Vue as a concrete example.

- Typical features of a frontend JavaScript framework

### Templating
- Declarative rendering
- Expressions
- Conditionals
- Loops
- Parallel to server-side rendering

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