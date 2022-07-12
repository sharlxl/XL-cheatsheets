---
title: "Redux Auth example"
---

```js title="Auth.js"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../store/user";
import otherActions from "../store/other";

const Auth = () => {
  const dispatch = useDispatch();

  // use selector to get data

  const storeAuth = useSelector((state) => state.user.auth);
  const storeUsername = useSelector((state) => state.user.username);

  const [username, setUsername] = useState("");

  //call the dispatch if you need to call the functions in the store

  const loginUser = () => {
    dispatch(userActions.login(username));
  };

  const logoutUser = () => {
    dispatch(userActions.logout());
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="username">UserName</label>
        </div>
        <div className="col-md-8">
          <input
            id="username"
            type="text"
            onChange={handleUsernameChange}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button onClick={loginUser} type="submit">
            Login
          </button>
          <button onClick={logoutUser} type="submit">
            Logout
          </button>
        </div>
      </div>
      {storeAuth ? "logged in" : "logged out"}
      <br />
      {storeUsername}
    </div>
  );
};

export default Auth;
```

```js title="store/user.js"
import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "", auth: false },
  reducers: {
    //this is are like functions

    login(state, action) {
      state.username = action.payload;
      state.auth = true;
    },
    logout(state) {
      state.username = "";
      state.auth = false;
    },
  },
});

const store = configureStore({
  reducer: userSlice.reducer,
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
```

```js title="store/main.js"
import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";

import userReducer from "./user";
import otherReducer from "./other";

// const userSlice = createSlice({
//   name: "user",
//   initialState: { username: "", auth: false },
//   reducers: {
//     //this is are like functions

//     login(state, action) {
//       state.username = action.payload;
//       state.auth = true;
//     },
//     logout(state) {
//       state.username = "";
//       state.auth = false;
//     },
//   },
// });

// const store = configureStore({
//   reducer: userSlice.reducer,
// });

const store = configureStore({
  reducer: { user: userReducer, other: otherReducer },
});

// export const userActions = userSlice.actions;

export default store;
```
