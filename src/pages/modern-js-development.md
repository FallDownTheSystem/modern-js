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

That's not an easy question to answer. The short answer is that it's the tools and libraries used to build JavaScript applications. It's also the development tools we use. To some extent, it's even the services we use — things like databases, authentication, deployment, hosting, etc. Everything's connected.

What I'm going to more specifically talk about is:

- Runtime environments
- Package management
- Module systems
- Bundlers
- Transpilers and preprocessors
- Web applications
- Other development tools
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

We covered the basic idea of bundlers, but they can do so much more than just combine your files into a single file. [Browserify](https://browserify.org/) really tries to solve the issue of being able to require Node.js modules for use in the browser, but not much more beyond that.

Newer bundlers like webpack and Rollup can do a lot more via loaders or plugins. Let's use [webpack](https://webpack.js.org/) as an example of how a bundler typically works.

> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph that maps every module your project needs and generates one or more bundles.

You use a configuration file to define how webpack should work. The key concepts are:
- Entry points
- Output (bundles)
- Loaders & Plugins

Let's start with entry points.

> An entry point indicates which module webpack should use to begin building out its internal dependency graph. webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

You can define one or multiple entry points.

Output is exactly what it sounds like.

> The output property tells webpack where to emit the bundles it creates and how to name these files.

Loaders and plugins are similar concepts.

> Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

> While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

Simply put, loaders and plugins let you extend the functionality of webpack to support other file formats and to perform other tasks than just bundling.

A webpack config might look something like this:

```js
//installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './path/to/my/entry/file.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'my-first-webpack.bundle.js',
	},
	// The module property defines rules for which file types it transforms
	// and a loader to use for those files
	module: {
		rules: [{ test: /\.txt$/, use: 'raw-loader' }],
	},
	// the html-webpack-plugin generates an HTML file for your application
	// by injecting automatically all your generated bundles
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

[Webpack concepts](https://webpack.js.org/concepts/)

[Rollup](https://rollupjs.org/guide/en/) is very similar to webpack, except by default it only supports to ES modules syntax.

> Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD.

But Rollup can support the CommonJS format via a plugin.

The other difference is that Rollup doesn't make a distinction between loaders and plugins. In Rollup, everything is a plugin.

Rollup also provides *tree-shaking* out of the box.

> Rollup statically analyzes the code you are importing, and will exclude anything that isn't actually used. This allows you to build on top of existing tools and modules without adding extra dependencies or bloating the size of your project.

You can also enable tree-shaking in webpack, but it requires you to define which files are safe to tree-shake, since the CommonJS format of imports cannot be analyzed the same way as ES modules can be.

Other bundlers also exist, like [Parcel](https://v2.parceljs.org/).

> Parcel supports many different languages and file types out of the box, from web technologies like HTML, CSS, and JavaScript, to assets like images, fonts, videos, and more.

Because Parcel requires zero or minimal configuration — and supports the most common file types and frameworks out of the box, it's easy to get started with.

There are also other tools, like [Snowpack](https://www.snowpack.dev/) and [Vite](https://vitejs.dev/) that can be classified as frontend build tools.

They're not exactly bundlers, but they do offer bundling for production as one of their features. Other features include:

- Taking advantage of the ES module format to enable development without bundling making the developer experience very fast
- Hot Module Replacement (HMR), i.e., loading changes made during development without refreshing the page/app.
- Support the most common asset types out of the box.

There's one more bundler worth mentioning — one that Vite actually already takes advantage of, [esbuild](https://esbuild.github.io/). Bundlers are generally speaking fairly slow, mainly because they're all written in JavaScript. That's where esbuild is different, as it's made with [Go](https://golang.org/), and it's 10-100 times faster than other mainstream bundlers.

If esbuild is so fast, why not bundle everything with esbuild?

Vite answers this question perfectly:

> While esbuild is blazing fast and is already a very capable bundler for libraries, some of the important features needed for bundling applications are still work in progress - in particular code-splitting and CSS handling. For the time being, Rollup is more mature and flexible in these regards. That said, we won't rule out the possibility of using esbuild for production build when it stabilizes these features in the future.

## Transpilers and preprocessors

Now we know the basic principles of bundlers and that that we can extend the functionality of bundlers with plugins, but we haven't really talked about what kinds of plugins we could use.

One use-case would be importing assets we typically couldn't — for example, SVG, JSON, or Markdown files. Instead, I'd like to focus on using plugins and tools that allow us to use another language and turn it back into a language the web understands, aka transpiling. We can use bundler plugins to use preprocessors and transpilers for our code, not just for JavaScript but for any language we use, including CSS and HTML.

These tools typically exist as stand-alone but also have plugins/loaders for various bundlers.

For HTML we can use templating languages like [Pug](https://pugjs.org/api/getting-started.html) or [lit-html](https://lit.dev/).

For CSS we can use preprocessors like [SASS](https://sass-lang.com/), [LESS](https://lesscss.org/), or [PostCSS](https://postcss.org/).

For JavaScript we can use transpilers like [Babel](https://babeljs.io/), or [TypeScript](https://www.typescriptlang.org/).

But maybe one of the most common use-cases is to transform framework-specific formats, like [React](https://reactjs.org/)'s [JSX](https://reactjs.org/docs/introducing-jsx.html) or [Vue](https://v3.vuejs.org/)'s [SFC](https://v3.vuejs.org/guide/single-file-component.html#single-file-components) to JavaScript.

All of these tools have a common theme. They enable new features and new ways of writing the languages we use for the web while ultimately transpiling the code we write back into something compatible with the web.

## Web applications

With these new tools at our disposal, web development is starting to look a lot more like traditional software development. We're no longer just creating static web pages; we're *building* web **applications**.

This is a trend that's been ongoing since the days when AJAX was first introduced. With AJAX, content is loaded dynamically. We can take this concept even further, where entire pages are loaded dynamically. This idea is called a [Single-page application (SPA)](https://developer.mozilla.org/en-US/docs/Glossary/SPA).

### Single-page applications

A SPA is a web app implementation that loads only a single page, and subsequent pages are loaded dynamically, similar to AJAX. This means that the "routing" is handled by JavaScript. This more dynamic experience enables faster transitions that make the website feel more like a native app.

Since SPAs entirely on the client-side, they're typically used in a serverless environment. The web app is served as static files, and all server-side operations are handled by microservices. We'll talk about this kind of architecture in the chapter about [the Jamstack](#the-jamstack).

SPAs are generally build using frameworks like [React](https://reactjs.org/), [Angular](https://angular.io/), or Vue.

### Search Engine Optimization (SEO)

One of the major downsides of SPAs is that routing is handled by JavaScript, which makes it harder for search engines to crawl the website.

One strategy to improve SEO is to pre-render the pages (in Node.js, for example) and generate static HTML pages with all the content. This way, crawlers can see all the static content. If a user loads one of the pre-rendered pages, the SPA is *hydrated* on the client-side, meaning the user still gets the SPA experience as all future routing is handled in the SPA style. The downside of this strategy is that you're creating a double payload, the SPA, and the pre-rendered static pages.

### Progressive Web Apps

A SPA is still a web page; they're opened and viewed in the browser like any other page. There's another design pattern — a set of tools that allows us to create more native-like experiences with web apps.

[Progressive Web Apps (PWAs)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) are web apps that use emerging web browser APIs and features along with traditional progressive enhancement strategy to bring a native app-like user experience to cross-platform web applications.

PWAs allow us to "install" web pages as if they were real applications, both on mobile and desktop environments. The idea is that we define a manifest JSON file that allows us to configure how our app appears to the user and ensures that the web app is installable. The manifest file describes the app's name, the start URL, icons, and all of the other details necessary to transform the website into an app-like format.

We can also use service workers to make a cached version of our web application work even when the user's device is offline. Other new browser-APIs also help us create more native-like experiences, including access to device sensors and notification APIs.

[web.dev: Progressive Web Apps](https://web.dev/progressive-web-apps/)

## Other development tools

Build tools aren't the only area where JavaScript application development has advanced. Let's take a quick look at two more areas where JavaScript has become comparable to other languages.

### Testing frameworks

Practically every language has some kind of support for testing frameworks, and JavaScript is no different. There are unit testing frameworks like [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/), or [Jasmine](https://jasmine.github.io/).

There are also End-to-End (E2E) testing frameworks, like [Cypress](https://www.cypress.io/), and API mocking libraries like [Mirage](https://miragejs.com/) or [Mock Service Worker](https://mswjs.io/).

### IDE Integrations

The most popular IDEs for JavaScript development, such as [Microsoft's Visual Studio Code](https://code.visualstudio.com/) [JetBrain's WebStorm](https://www.jetbrains.com/webstorm/), have built-in support or support plugins for linting, formatting, language services, and debugging. Projects can also include linting and formatting tools as development dependencies.

The most popular linter for JavaScript is [ESLint](https://eslint.org/).

> ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors, and you can run ESLint as part of your continuous integration pipeline.

The most popular formatter is [Prettier](https://prettier.io/), an opinionated code formatter that supports many languages.

## The Jamstack

Earlier, we alluded to the ***Jamstack***, so what exactly is the Jamstack?

You may have heard of the MERN or MEAN stack, which stood for [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [React](https://reactjs.org/), and [Node](https://nodejs.org/en/). This is a technology stack based entirely on JavaScript. MEAN is the same stack, just React replaced with [Angular](https://angular.io/). Jamstack on the other hand doesn't advocate for any specific technology, instead Jamstack stands for JavaScript, APIs and Markup.

The core principles of the Jamstack are to create static pages — preferably through pre-rendering at the build phase, and to decouple the the markup from the APIs, by utilizing services, rather than a web-server based solution.

There are many platform-as-a-service providers that make it easy to deploy and host modern web apps, as as [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/).

If you're interesting in learning more about the why and how of Jamstack, check out:

[Netlify: Jamstack](https://www.netlify.com/jamstack/)
[Jamstack.org: What is Jamstack](https://jamstack.org/what-is-jamstack/)
