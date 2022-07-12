---
title: "useContext()"
sidebar_position: 5
---

## useContext()

use context usually used for login details/ authentication

use context is usually place at <App/>

\*\*will rerender the whole app during changes

```js title="App.js"
import React, { useState } from "react";
import Parent from "./components/Parent";
import Child from "./components/Child";
import ChickenContext from "./Context/chicken-context";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  //state can only be use in the nested function

  //anything inbetween line 11 and line 18 can use the chicken context
  return (
    <ChickenContext.Provider value={{ username, setUsername, email, setEmail }}>
      <div className="container">
        <h2>Parent:</h2>
        <Parent />
        <h2>Child:</h2>
        <Child />
      </div>
    </ChickenContext.Provider>
  );
}
```

```js title="chicken-context.js"
import React from "react";

const ChickenContext = React.createContext();

export default ChickenContext;
```

```js title="Parent.js"
import React, { useContext } from "react";
import ChickenContext from "../Context/chicken-context";

const Parent = () => {
  const chickenCtx = useContext(ChickenContext);
  console.log(chickenCtx);

  const handleButtonClick = () => {
    chickenCtx.setEmail("john.doe@email.com");
  };

  return (
    <>
      <div className="border row">
        <div className="border col-sm-4">
          <p>{chickenCtx.email}</p>
        </div>
        <div className=" border col-sm-4">
          <button className="border bg-blue-500" onClick={handleButtonClick}>
            Click me
          </button>
        </div>
      </div>
    </>
  );
};
```

```js title="Child.js"
import React, { useContext } from "react";
import ChickenContext from "../Context/chicken-context";

const Child = () => {
  const chickenCtx = useContext(ChickenContext);

  return <p className="border"> {chickenCtx.email}</p>;
};

export default Child;
```
