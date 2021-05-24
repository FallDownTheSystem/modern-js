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

I want to quickly explain how JavaScript development transitioned to using build tools. It's not obvious why we would need build tools for JavaScript. After all, JavaScript was made for the web. You inline some JavaScript in a `<script>` tag within your HTML document or specify a `src` attribute on the script tag that points to a JavaScript file. That's it. The browser runs the code as soon as it's encountered, no compilation required.

> What if we want to use libraries?

Well, we could download someone else's JavaScript file and load it with a `<script>` tag all the same. But admittedly, this is kind of a tedious process, especially if we have many libraries.

Other languages deal with this by having package managers, a command-line tool that can download and update packages (libraries). Python has pip, Java has Maven or Gradle, C# has NuGet, Rust has Cargo, and so and so forth.

But then again, these other languages also support **modules**. Meaning you can import code from another file or library, something that JavaScript lacks; or at least used to.

> So, what changed?

[Node.js](https://nodejs.org/en/), a JavaScript runtime built on Chrome's V8 JavaScript engine, meant that you can run JavaScript without a browser, just like any other language.

Along with Node.js came NPM, the Node Package Manager. It didn't take long for NPM to have tens of thousands of packages and now well over a million packages. But these packages were made for Node.js, not for the browser. still, many of the libraries could be used in either environment.

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

In the following chapters, I want to introduce you to many of the common day tools and libraries used in JavaScript development, so that you'll recognize the names and be able to understand what's going on when you encounter them in the future. So, let's go back to JavaScript runtimes.

> As an asynchronous event-driven JavaScript runtime, [Node.js](https://nodejs.org/en/about/) is designed to build scalable network applications.
> HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind. This makes Node.js well suited for the foundation of a web library or framework.

Basically what this means is that now instead of JavaScript just being the language for the web on the client side, we can have JavaScript on the server-side as well. Combine that with a document (json) based database and your entire stack is JavaScript.

The most popular web framework for Node.js is [Express](https://expressjs.com/), but there are others like [Koa](), [Hapi](), [Fastify], and [NestJS]().

Node isn't only used for web servers. It's asynchronous and event based nature means that it's a pretty good solution for any real-time application, especially those dealing with the web, since HTTP is a first-class citizen.

Node.js isn't the only game in town. Deno (Node backwards), was created by the original developer of Node.js, Ryan Dahl. Deno still uses the V8 engine, but it's build in Rust.

> [Deno](https://deno.land/) is a secure runtime for JavaScript and TypeScript.

Deno tries to solve some of the problems of Node.js, namely security and how it handles dependencies.

Deno isn't necessarily trying to compete with Node, but rather provide an alternative. Deno might be a better environment for utility scripts, similar to Bash or Python.


## Package management
- Dependencies
- NPM https://www.npmjs.com/
  - Scripts
    - Grunt
    - Gulp
    - Bower
  - Alternative package managers
    - Yarn, PNPM https://yarnpkg.com/ https://pnpm.io/
  - BundlePhobia https://bundlephobia.com/

## Module systems
- Modules
- History https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
  - CJS
  - AMD
  - UMD
  - ESM
  - SystemJS

## Bundlers
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
