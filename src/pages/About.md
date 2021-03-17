---
title: About
name: Yo
---

<div>
  <!-- You can use Vue components inside markdown -->
  <i-carbon-dicom-overlay class="m-auto -mb-6 text-4xl" />
  <h1>About</h1>
</div>

<HelloWorld msg="yooo" />

This is a **markdown** _test_

:)

:D


:-)

😆

::: tip
This is a tip
:::

::: warning GRRRR
This is a warning
:::

::: danger
This is a dangerous warning
:::

# First header

Lorem ipsum.

## Next section!

This is totally awesome.

```js {3}
// syntax highlighting example
function vitesse() {
  const foo = 'bar'
  console.log(foo)
}
```

```js {2,6,10-14,25} ln
// A test with multiline highlighting and line numbers
import * as foo from '@foo/bar'
import foo from '@foo/bar'
import { foo } from '@foo/bar'

export default class foo extends something {
  func() {
    // testing
    /* testing */
    const foo = 'bar';
    let bar = true;
    var test = { object: "test" };
    var jar = 2;
    var a = () => { return 'test'; };
    var b = function() { return 'test'; };
    var b = function foo() { return 'test'; };
    return (
      <Test foo={'test'}
          bar={true}
          test={{ object: "test" }}
          jar={2}/>
      <a href="#">Test</a>
    )
  }
}
```

```js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```html {3}
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo }}
  </li>
</ul>
```

```js
export default {
  name: 'MyComponent',
  // ...
}
```
Check out the <router-link :to="{ name: 'index' }">Home page</router-link> for more details.


