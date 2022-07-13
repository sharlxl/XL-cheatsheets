---
title: "Custom Hooks"
sidebar_position: 8
---

## example

```js title="App.js"
import React from "react";
import UseCompare from "./hooks/UseCompare";

function App() {
  const arr1 = ["a", "b", "c"];
  const arr2 = ["c", "b", "a"];

  const answer = UseCompare(arr1, arr2);
  return (
    <div>
      <h2>{answer}</h2>
    </div>
  );
}

export default App;
```

```js title="hooks/UseCompare.js"
const UseCompare = (arrayA, arrayB) => {
  if (JSON.stringify(arrayA) === JSON.stringify(arrayB)) {
    return "Arrays are the same";
  } else {
    return "Arrays are different";
  }
};
export default UseCompare;
```
