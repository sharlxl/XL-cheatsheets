---
title: "useContext()"
sidebar_position: 5
---

## useContext()

```jsx title="syntax"

//create the context

import * as React from 'react';

const authContext = React.createContext({status:null,login:()=>{}});

export default authContext;

//=====================//

//wrapping the component in the component where you want to use it.
const App = () => {
  //using the state to dynamicallly pass the values to the context

  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  return (
    <React.Fragment>
      <AuthContext.Provider value={{ status: authstatus, login: login }}>
        <Auth />
      </AuthContext.Provider>
    </React.Fragment>
  );
};
export default App;

//=====================//

//importing, using and manipulating the context values.

const authContext = useContext(initialValue);
```

React context allows us to pass data to our component tree without using props.

The problem with props is that sometimes we pass them through components that don’t need to receive them. This problem is called props drilling.

> Before using Context, its best to see if our components can be better organized to avoid passing props through components that don’t need it.

use context usually used for login details/ authentication

use context is usually place at `<App/>`
will rerender the whole app during changes

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
