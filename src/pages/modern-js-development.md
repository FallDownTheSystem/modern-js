<route>
{
	meta: {
		title: "Modern JavaScript Development",
		description: "An overview of the JavaScript ecosystem and the tools used to create modern JavaScript applications.",
		order: 40,
	}
}
</route>

<Title :title="$route.meta.title" :description="$route.meta.description" />

In the previous articles, we've mostly focused on the JavaScript language. In this and the following article, we'll instead focus on the development of JavaScript applications using modern tools and libraries. The goal of this article is to introduce you to the different concepts and tools that are used to build modern JavaScript applications. We could call this the JavaScript ecosystem.

> What exactly is the JavaScript ecosystem?

That's not an easy question to answer. The short answer is that it's the tools and libraries used to build JavaScript applications. To some extent, it's also the services we use; things like databases, authentication, deployment, hosting, etc. Everything's connected. 

What I'm going to more specifically talk about is:

- Runtime environments
- Package management
- Module systems
- Bundlers
- Transpilers
- Progressive Web Apps
- and the *Jamstack*

By the end of this article, I hope you'll better understand what all of that means. But, before we try to understand the *status quo*, I think it'll be helpful to look at how we got here.

## The transition to build tools

I want to quickly explain how JavaScript development transitioned to using build tools. It's not obvious why we would need build tools for JavaScript. After all, JavaScript was made for the web. You inline some JavaScript in a `<script>` tag within your HTML document or specify a `src` attribute on the script tag that points to a JavaScript file. That's it. The browser runs the code as soon as it's encountered; no compilation is required.

> What if we want to use libraries?

Well, we could download someone else's JavaScript file and load it with a `<script>` tag all the same. But admittedly, this is kind of a tedious process, especially if we have many libraries.

Other languages deal with this by having package managers, a command-line tool that can download and update packages (libraries). Python has pip, Java has Maven or Gradle, C# has NuGet, Rust has Cargo, and so and so forth.

But then again, these other languages also support **modules**. Meaning you can import code from another file or library, something that JavaScript lacks — or at least used to. 

> So, what changed?

[Node.js](https://nodejs.org/en/), a JavaScript runtime built on Chrome's V8 JavaScript engine, meant that you can run JavaScript without a browser, just like any other language.

Along with Node.js came npm, the Node Package Manager. It didn't take long for npm to have tens of thousands of packages and now well over a million packages. But these packages were made for Node.js, not for the browser. Still, many of the libraries could be used in either environment.

::: c note Note
We'll talk more in-depth about these concepts and others in the following chapters, so don't be alarmed if you still don't know what any of these things are.
:::

> Now we have a package manager in JavaScript, problem solved, right?

Well, not really. We still have two problems.

- Some libraries can't be used in the browser because they use the node module system (CommonJS), which isn't valid JavaScript syntax in the browser.
- It's still tedious to get the library's code from the `node_modules` folder, where all the NPM packages were installed.

Introducing: **Bundlers**.

> [Browserify](https://browserify.org/) lets you `require('modules')` in the browser by bundling up all of your dependencies.

The idea is simple enough. You resolve all the imports and bundle them into a single file. Now you can use NPM packages in the browser (assuming they're otherwise browser compatible).

Now we have package management, and we can take advantage of the large library of packages already made for Node.js. We can easily update our dependencies and bundle them into a single file for our web page. But that does mean we have a build step. We need tools to develop our applications now. So, in for a penny, in for a pound.


## JavaScript runtimes

In the following chapters, I want to introduce you to many of the common-day tools and libraries used in JavaScript development so that you'll recognize the names and be able to understand what's going on when you encounter them in the future. So, let's go back to JavaScript runtimes.

> As an asynchronous event-driven JavaScript runtime, [Node.js](https://nodejs.org/en/about/) is designed to build scalable network applications.
> HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind. This makes Node.js well suited for the foundation of a web library or framework.

Basically, we can have JavaScript on the server-side as well.

The most popular web framework for Node.js is [Express](https://expressjs.com/), but there are others like [Koa](), [Hapi](), [Fastify], and [NestJS]().

Node isn't only used for web servers. Its asynchronous and event-based nature means that it's a pretty good solution for any real-time application, especially those dealing with the web since HTTP is a first-class citizen.

Node.js isn't the only game in town. [Deno](https://deno.land/) (Node backward) was created by the original developer of Node.js, Ryan Dahl. Deno is built with Rust, but it still uses the V8 engine.

> Deno is a secure runtime for JavaScript and TypeScript.

Deno tries to solve some of the problems of Node.js, namely security and how it handles dependencies.

Deno isn't necessarily trying to compete with Node but rather provide an alternative. Deno might be a better environment for utility scripts, similar to Bash or Python.

## Package management

Let's talk about npm and some alternatives. First, what exactly is npm?

npm consists of three distinct components:

- The [website](https://www.npmjs.com/)
- The [CLI](https://docs.npmjs.com/cli/v7)
- The [registry](https://docs.npmjs.com/cli/v7/using-npm/registry)

We're going to focus on the CLI and what it can do.

The most common use-cases of the `npm` CLI are to
- Install and update your dependencies
- Run tasks/scripts

There's a lot more you can do with `npm,` but it's not relevant for our purposes.

npm had some competition, but other tools have fallen out of favor.

Tools like

- [Grunt](https://gruntjs.com/): A task runner
- [Gulp](https://gulpjs.com/): A toolkit to automate & enhance your workflow
- [Bower](https://bower.io/): A package manager for the web

have largely been replaced by built-in features in `npm` and by other tools like Webpack and Rollup (which we will talk about soon in the [Bundlers](#bundlers) section).

Even though some of these tools are deprecated or on their way out, npm does still have competition. These are package managers like `npm` and they use the npm registry, but they offer some additional features and altering implementations.

- [Yarn](https://yarnpkg.com/): A package manager that doubles down as project manager
- [pnpm](https://pnpm.io/): Fast, disk space-efficient package manager

Their feature sets are essentially the same nowadays, as npm implemented most of the features that originated in Yarn. pnpm is the newest of the bunch and is focused on performance.

::: c note Note
Before you go crazy adding packages to your next project, check out a site called [Bundlephobia](https://bundlephobia.com/), where you can look up the size of a package. It's always a good idea to be informed about the impact of adding a dependency to your project.
:::

## Module systems

There's one feature we skipped in the [New ECMAScript Features](/new-es-features) article: Importing and exporting, i.e., modules. Before ES modules were introduced to the language, we couldn't import or export code in the browser. But as we saw, we can in Node.js, and we can take advantage of modules via bundling.

::: c info Info
If you're interested in ES modules, the official, standardized module system in JavaScript, and how to import/export modules, check out: [MDN: Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and [MDN: Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
:::

We already mentioned one module format, CommonJS. Note that I called CommonJS a format, a.k.a. a definition. There are multiple different module definitions for JavaScript that are implemented by different module **loaders**. Some module loaders are built into other tools like bundlers.

The most notable formats are
- CommonJS (`cjs/commonjs`): the original module format used Node.js.
- Asynchronous Module Definition (`amd`): based on CJS, but with support for asynchronous module loading.
- Universal Module Definition (`umd`): Attempts to be compatible with AMD and CJS.
- ES Modules (`esm/module`): JavaScript's native module format, also supported by Node.js.
- SystemJS modules (`system`): The native format for the Universal module loader (SystemJS) that supports CJS, AMD, and ESM.

Out of all of these, you really only need to recognize the CommonJS and ES modules syntax.

CommonJS uses the `require` keyword and a global `exports` object.

```js
// Requiring a module (npm package)
const package = require('module-name')
// or a local file
const circle = require('./circle.js');
// Using the imported module
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

// Exporting individual values
// these can be anything, primitives, objects, functions, classes, etc.
module.exports.someValue = "Hello world!";
module.exports.anotherValue = [1, 2, 3];
// Can also use the shortcut
exports.someValue = "Hello world!";

// You can also assign an object directly
module.exports = { prop1: "Hello", anotherProp: "World" }
```

[Node.js CommonJS modules](https://nodejs.org/docs/latest/api/modules.html)

ES Modules, on the other hand, use the `import` and `export` syntax.

```js
import defaultExport from "module-name";
import { export1, export2 } from "module-name";

export function functionName(){...}
export const variable1;
export { name1, name2, …, nameN };

// Default exports
export default expression;
```
[MDN: Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

## Bundlers

We covered the basic idea of bundlers, but they can do so much more than just combine your files into a single file.

- Bundlers
  - Rollup, Webpack, parcel, esbuild, others (snowpack?)
    - https://rollupjs.org/guide/en/
    - https://v2.parceljs.org/
    - https://webpack.js.org/
    - https://www.snowpack.dev/
    - https://esbuild.github.io/
  - Extending functionality
    - Preprocessors
      - SASS, LESS, POSTCSS
        - https://sass-lang.com/
        - https://postcss.org/
        - https://lesscss.org/
    - Plugins
  - Example running rollup.js
  - Vite
    - A build / development tool
    - Rollup
    - ESBuild
    - ESM
    - https://vitejs.dev/

## Transpilers
- Babel https://babeljs.io/
- TypeScript https://www.typescriptlang.org/
- Flow https://flow.org/

## Progressive Web Apps
- https://web.dev/progressive-web-apps/
- Single page applications https://developer.mozilla.org/en-US/docs/Glossary/SPA
- Pre-rendering
  - VS CSR and SSR
  - SEO
- The development of front-end applications resembles normal program or back end Development
  - We have everything other applications have
    - Testing
      - Unit tests
        - Jest https://jestjs.io/s
        - Mocha https://mochajs.org/
        - Jasmine https://jasmine.github.io/
      - E2E
        - Cypress https://www.cypress.io/
      - Mocking APIs
        - Mirage.js https://miragejs.com/
        - MSW https://mswjs.io/
    - IDE tools
      - Linters, formatters

## The Jamstack
https://www.netlify.com/jamstack/
https://jamstack.org/what-is-jamstack/
- Frameworks (site generators)
  - Static site generators
- Headless CMS
- CI / CD Build
- Hosting
