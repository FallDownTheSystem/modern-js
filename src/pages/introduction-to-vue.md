---
description: Hi again
name: Yo
title: About
---

<route>
{
	meta: {
		title: "An Introduction to Vue",
		description: "An introduction to JavaScript frameworks through the increasingly popular framework Vue.",
		order: 50,
	}
}
</route>


<Title :title="$route.meta.title" :description="$route.meta.description" />

Let's do a little recap of everything we've learned so far.

We learned:
- Why JavaScript had a difficult start
- What new features modern JavaScript offers
- What new browser APIs we can take advantage of
- What modern application development looks like

But we still don't know how to *actually* build modern frontend JavaScript applications. We know the language features and the tools, so let's look at how frameworks can help us build applications. Specifically, let's look at Vue.

> Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.

This isn't a tutorial for Vue; the documentation for Vue does a better job at that than I ever could. Instead, I want to talk about frontend JavaScript frameworks in more generic terms, but it helps to use Vue as an example.



- What is a framework
- What is Vue
  - Progressive
  - Tooling + additional libraries = SPA
- Typical features of a front-end JavaScript framework
  - Reactivity
    - Automatically updating DOM
    - Watchers / computed properties
  - Templating
    - Expressions
    - Conditionals
    - Loops
    - Prop binding
    - Event handling
  - Componization
    - Props in, events out
    - Nested components
  - Life cycle hooks
  - State management
  - Routing
- Developer tools
- Vue ecosystem
  - CLI / Vite
  - Libraries / Components
  - Nuxt