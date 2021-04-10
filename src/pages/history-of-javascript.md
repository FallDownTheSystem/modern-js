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


This article isn't actually about the history of JavaScript. I mean, it is, and it isn't. Really this post has two goals:
1. To introduce you to some basic terminology around JavaScript.
2. To explain what I mean by *Modern* JavaScript.

The first goal will come naturally as you progress along with the article, but to achieve the second goal, we're going to have to go through some of JavaScript's history. By understanding JavaScript's history, I hope you'll come to see why there's a divide between the *old*, frequently criticized, and even hated JavaScript and *Modern*, shockingly (😲) popular JavaScript.

::: c note "Intended Audience" box
This and the following articles are written with the assumption that you're at least slightly familiar with JavaScript. A basic understanding of the language and its standing on the web is going to be helpful.
:::

## The Origins of JavaScript

JavaScript wasn't originally called JavaScript. The language started out in 1995 as *Mocha*, a scripting language developed for one of the earliest web browsers, [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator). Netscape's desire was to develop a client-side scripting language to enable dynamic behavior on the web-based on the [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) language but to also include a proper programming language into the web. To develop the Scheme-like language, they hired Brendan Eich. To position themselves as the official browser for the anticipated Java platform, they collaborated with Sun Microsystems to embed [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) into Netscape's browser.

The partnership led to Mocha being renamed to LiveScript and shortly after to JavaScript. But JavaScript had little to do with Java, except that the syntax was partially inspired by Java. The name change was purely marketing to ride the wave of hype surround Java at the time. The internal struggle at Netscape between wanting the language to resemble Scheme and to be a companion scripting language for Java meant that there was no clear direction for JavaScript's design, and in the end, JavaScript ended up resembling neither Scheme nor Java.

All of this was happening fast. Really fast. The first version of JavaScript (Mocha) was developed in just ten days. The indecisive direction of the language's design and the rush to develop the language led to some questionable design decisions* that have caused many people to dislike JavaScript.


<sub>
* Lack of an integer type, aggressive type coercion, and unfamiliar prototypical inheritance, to name a few.
</sub>

## Competing implementations

The rush job that was JavaScript wouldn't be the only pain point for future developers. In 1995 Microsoft released their new browser, [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer). Quickly after the release, Microsoft reverse-engineered Netscape's JavaScript implementation and created their own, called [JScript](https://en.wikipedia.org/wiki/JScript).

Although JScript was based on JavaScript, their implementations differed, and the browsers had different support for other features as well, leading to browser wars where some sites would work best on a specific browser.

With the interoperability issues between the browsers, some performance issues in JavaScript's early days, and with some of the questionable design decisions of the language, it's not hard to see why so many people have taken a disliking to the language. Competiting implementations are a cause headache for developers to this date, but things aren't nearly as bad as back then, thanks to the creation of a language specification for JavaScript.

::: c box note "More reading"
This is just a glimpse into JavaScript's history. If you're interested in learning [more](https://medium.com/@_benaston/lesson-1a-the-history-of-javascript-8c1ce3bffb17) there [are](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/) better [articles](https://medium.com/@_benaston/lesson-1a-the-history-of-javascript-8c1ce3bffb17) for [that](https://en.wikipedia.org/wiki/JavaScript#History).
:::

## The ECMA Specification

In 1996 Netscape submitted JavaScript to [ECMA International](https://en.wikipedia.org/wiki/Ecma_International) (originally the European Computer Manufacturers Association) to create a language specification that all browsers could adhere to. In 1997 the first ECMAScript language specification, ECMA-262 was created.

::: c box info "Naming convention"
The standards specification document is called ECMA-262.
The language specification is called ECMAScript.
The standards were previously referred to by their edition number, e.g., ECMAScript 5 or just ES5 for short. Nowadays, a new edition of the specification is released annually, and the name includes the year, e.g., ECMAScript 2015 (ES2015), the 6th edition of ECMAScript (ES6).
:::

ECMAScript 2 was released in 1998, a year after the original specification. The second edition only included editorial changes so that the specification conformed to the ISO/IEC 16262 international standard, which is the same standard but published under ISO/IEC.

The third edition of ECMAScript was released a year after the second edition in 1999 and included actual changes to the language. ES3 added regular expressions, better string handling, new control statements, try/catch exception handling, tighter definition of errors, formatting for numeric output, and other enhancements.

So far, everything was going well; the different browsers were following the ECMAScript specification. But by the early 2000s, Internet Explorer had gained a 95% market share, making JScript the de facto standard. The work on the ES4 had already started but was quickly sidetracked as Microsoft stopped collaborating on the ECMAScript specification. The fourth edition of ECMAScript included major changes to the language that the stakeholders couldn't find common ground on, and the 4th edition of the specification would be abandoned in 2003.

Work on the ECMAScript specifications wouldn't reach a new edition for a long time. Some parties tried to create a less ambitious specification, ECMAScript 3.1 until new browsers managed to take significant market share back from Internet Explorer. Notably, Netscape's successor, the Mozilla Firefox browser, released in 2004, and Google's Chrome released in 2008. 

  - ES5
  - JSON
  - AJAX
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
    - Not without it's flaws
