<route>
{
	meta: {
		title: "The History of JavaScript",
		description: "A look into the origins of JavaScript and how the ECMAScript specification was born.",
		order: 10,
		layout: "article"
	}
}
</route>

<Title :title="$route.meta.title" :description="$route.meta.description" />


This article isn't actually about the history of JavaScript. I mean it is and it isn't. Really this post has two goals:
1. To introduce you to some basic terminology around JavaScript.
2. To explain what I mean by *Modern* JavaScript.

The first goal will come naturally, but to achieve the second goal, we're going to have to go through some of JavaScript's history. By understanding JavaScript's history, I hope you'll come to see why there's a divide between the *old*, frequently criticized, and even hated JavaScript and *Modern*, popular, even liked (😲) JavaScript.


::: c note "Intended Audience" box
This and the following articles are written with the assumption that you're at least slightly familiar with JavaScript. A basic understanding of the language and its position on the web is going to be helpful.
:::

## The Origins of JavaScript

JavaScript wasn't originally called JavaScript. The language started out in 1995 as *Mocha*, a scripting language developed for one of the earliest web browsers, [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator). Netscape's desire was to develop a client side scripting language to enable dynamic behavior on the web based on the [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) language, but to also include a proper programming language in to the web, so they collaborated with Sun Microsystems to embed [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) into Netscape Navigator.

This partnership lead to Mocha being renamed to LiveScript and soon after to JavaScript. But JavaScript had little do with Java, except that the syntax was partially insipired by Java. The name change was purely marketing, to ride the wave of hype surround Java at the time. The push to include both a Scheme like scripting language and Java into the browser meant that there was no clear direction for Mocha.

All of this was happening fast. Really fast. The first version of Mocha was developed in just ten days. The push and pull between Netscape wanting Mocha to originally be like Scheme and then more like scripting companion to Java, along with the rush of developing the language lead to a lot of questionable design decisions that have caused a lot of people to dislike JavaScript. In the end JavaScript resembles neither Scheme or Java.


## Competing implementations

The rush job that was JavaScript wouldn't be the only pain point for future developers. In 1995 Microsoft released their new browser, [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer). Quickly after the release, Microsoft reverse-engineered Navigator's JavaScript implementation and created their own, called [JScript](https://en.wikipedia.org/wiki/JScript).

Although JScript was based on JavaScript, their implementations differend, and the browsers had different support for other features as well, leading to browser wars where some sites would work best on a specific browser.

::: c box info "Note"
Other implementations included [ActionScript](https://en.wikipedia.org/wiki/ActionScript), developed by Macromedia (later dissolved into Adobe Systems). Used in the Adobe Flash Player platform.
:::

Competiting implementations between browsers are a cause headache for developers to this date, but things aren't nearly as bad, thanks to the creation of a language specification for JavaScript.

::: c box note "More reading"
This is just a glimpse into JavaScript's history. If you're interested in learning [more](https://medium.com/@_benaston/lesson-1a-the-history-of-javascript-8c1ce3bffb17) there [are](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/) better [articles](https://medium.com/@_benaston/lesson-1a-the-history-of-javascript-8c1ce3bffb17) for [that](https://en.wikipedia.org/wiki/JavaScript#History).

:::

## The ECMA Specification

In 1996 Netscape submitted JavaScript to [ECMA International](https://en.wikipedia.org/wiki/Ecma_International) (originally the European Computer Manufacturers Association) to create a language specification that all browsers could implement. In 1997 the first ECMAScript language specification was created.

  - ECMAScript standard name
  - ECMAScript (year) vs ECMAScript (edition)
  - Release of EcmaScript (2 and 3)
  - Internet Explorer gains market share (95%)
    - Becomes the de facto standard
  - EcmaScript 4 is sidetracked
  - Stuck supporting IE
    - Polyfills
    - Transpilers
    - ES6
    - jQuery
    - Can I use
  - Summary: Why does JavaScript suck?
    - Rushed initial design
    - Backwards compatibility
    - Browser interoperability
  - JavaScript now
    - Popularity (of TypeScript)
