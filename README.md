# Modern JavaScript

## Development

**Home page navigation links**
- Stacked
- Arrow Icon
- How to order, based on date?

**Width custom container**
- Add gutters for wide grid layout as well
- Create generic classes for the 4 layout widths
  - Default
  - Box
  - Wide
  - WideBox

**Aside custom container**
- Create a custom container that adds the gray background box

**Info custom container**
- Read more functionality

**Warning container**

**Danger container**

**SideBySide custom container**

**Slide component**
- Each direct child with a 'slide' class are programmatically hidden, except the first
- Show number of slides in the top right corner, absolute position, relative parent
- Add left and right buttons, bottom left
- Custom container

**Post side navigation**
- Live update position
- TWUI, for example

**Section mechanic**
- Smooth scroll (JS)
- Automatic links to all headings (see VitePress for example)
- Jump to the next heading or slide
- If the distance from the current position to the next jump is longer than 100vh, then jump distance / 100vh intervals (maybe a little less than 100vh)

**404 layout**

## Content

### History of JavaScript
  - Origin of JavaScript, competing implementations
  - The EcmaScript specification
  - Different version of EcmaScript
  - Stuck in the Dark Ages (Internet Explorer)
  - Moving past IE (Age of Enlightment)
    - Polyfills
    - Transpilers
    - ES6
  - Why does JavaScript suck?
    - Backwards compatibility

### New ES features
  - Extensions to existing types/classes
  - New types
  - Functional style
  - New syntax / language features
  - Syntactic sugar
  - New Web APIs

### Moving on from jQuery to vanilla JS
  - Selectors (querying elements)
  - Handling events
  - Modifying the DOM
    - Changing styles / classes
    - Creating and inserting elements
    - Changing text content
  - AJAX

### Modern JavaScript development (tools)
  - Bundlers
    - Extending functionality
      - Plugins for other files types
    - Modules
      - History
      - Native ES modules
        - How Vite takes advantage of ESM
  - Package management
    - Dependencies
    - Node
    - NPM
      - Scripts
  - Transpilers
    - Babel
    - TypeScript

### Introduction to Vue (and JavaScript frameworks)
  - Reactive data (declarative rendering)
    - Interpolation
    - Conditionals and loops
  - Components
    - Data flow, binding and events
  - Composition API
  - Single File Components
  - Single Page Applications
    - Routing
    - State management
      - Vuex
        - When to use
        - Vue 3 Composition API to the rescue