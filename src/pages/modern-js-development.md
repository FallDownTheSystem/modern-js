<route>
{
	meta: {
		title: "Modern JavaScript Development",
		description: "An overview of the JavaScript ecosystem and the tools used to create modern JavaScript applications.",
		order: 40,
	}
}
</route>

## Modern JavaScript development

In this article, I want to show how JavaScript development has *developed* over the years. I don't mean in terms of language development (which we already looked at), but rather the tools and frameworks around the language, the *ecosystem*, if you will.

We're going to talk about things like

- Package management
- Runtime environments
- Module systems
- Bundlers
- Transpilers
- Progressive Web Apps
- Testing frameworks
- The Jamstack

By the end of this article, I hope you'll better understand what all of that means. We're also going to touch on the topic of frameworks and things like single-page applications, but we'll introduce frameworks more thoroughly in the next article.

Before we try to understand the *status quo*, I think it'll be helpful to look at how we got here.

- The old way
  - https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70
- Package management
  - Dependencies
  - Runtimes
    - Node https://nodejs.org/en/
      - Web servers https://expressjs.com/
    - Deno https://deno.land/
  - NPM https://www.npmjs.com/
    - Scripts
    - Alternative package managers
      - Yarn, PNPM https://yarnpkg.com/ https://pnpm.io/
    - BundlePhobia https://bundlephobia.com/
- Bundlers
  - Rollup, Webpack, parcel, esbuild, others (snowpack?)
    - https://rollupjs.org/guide/en/
    - https://v2.parceljs.org/
    - https://webpack.js.org/
    - https://www.snowpack.dev/
    - https://esbuild.github.io/
  - Modules
    - History https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
      - CJS
      - AMD
      - UMD
      - ESM
  - Vite and ESM 
    - https://vitejs.dev/
  - Extending functionality
    - Preprocessors
      - SASS, LESS, POSTCSS
        - https://sass-lang.com/
        - https://postcss.org/
        - https://lesscss.org/
    - Plugins
  - Example running rollup.js
- Transpilers
  - Babel https://babeljs.io/
  - TypeScript https://www.typescriptlang.org/
- Progressive Web Apps https://web.dev/progressive-web-apps/
  - Single page applications https://developer.mozilla.org/en-US/docs/Glossary/SPA
  - Pre-rendering
    - VS CSR and SSR
    - SEO
- Testing frameworks
  - Unit tests
    - Jest https://jestjs.io/s
    - Mocha https://mochajs.org/
    - Jasmine https://jasmine.github.io/
  - E2E
    - Cypress https://www.cypress.io/
  - Mocking APIs
    - Mirage.js https://miragejs.com/
    - MSW https://mswjs.io/
- The Jamstack https://www.netlify.com/jamstack/ https://jamstack.org/what-is-jamstack/
  - Frameworks (site generators)
    - Static site generators
  - Headless CMS
  - CI / CD Build
  - Hosting
