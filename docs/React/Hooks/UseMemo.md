---
title: "useMemo()"
sidebar_position: 10
---

```jsx title="syntax"
const memoizedValue = useMemo(functionThatReturnsValue, arrayDepencies);
```

useMemo is another performance hook that allows us to ‘memoize’ a given operation.

Memoization makes it possible to remember the result of expensive calculations when they have already been made so we don’t have to make them again.

Like useEffect and useCallback, useMemo accepts a callback function and a dependencies array.

Unlike both of these functions, however, useMemo is intended to return a value.

You must return the value either explicitly with the return keyword or implicitly but using the arrow function shorthand (seen below).
A real-world example of useMemo comes from the mdx-bundler documentation. mdx-bundler is a library for converting .mdx files into React components.

Here it uses useMemo to convert a raw string of code into a React component.

```jsx
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";

function Post({ code, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </>
  );
}
```

The reason for doing so is to prevent the Component value from being recreated unnecessarily when the component re-renders.

useMemo therefore will only execute its callback function if the code dependency changes.

## Performance

The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

In this example, we have an expensive function that runs on every render.

When changing the count or adding a todo, you will notice a delay in execution.

#### Should you use useMemo()?

[https://canimerge.com/should-you-really-use-usememo-in-react-lets-find-out/](https://canimerge.com/should-you-really-use-usememo-in-react-lets-find-out/)
