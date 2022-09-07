---
title: "useLayoutEffect()"
sidebar_position: 12
---

```jsx title="syntax"
useLayoutEffect();
```

The useLayoutEffect works similarly to useEffect but rather working asynchronously like useEffect hook, it fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM. But to prevent blocking the page loading, we should always use useEffect hook.

The useLayoutEffect hook works in the same phase as componentDidMount and componentDidUpdate methods. We should only use useLayoutEffect if useEffect isn’t outputting the expected result.

## Example

```jsx
import React, { useLayoutEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("GFG");

  useLayoutEffect(() => {
    if (value === "GFG") {
      // Changing the state
      setValue("GeeksForGeeks");
    }
    console.log("UseLayoutEffect is called with the value of ", value);
  }, [value]);

  return <div>{value} is the greatest portal for geeks!</div>;
};

export default App;
```
