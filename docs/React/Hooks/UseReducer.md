---
title: "UseReducer()"
sidebar_position: 6
---

```jsx title="syntax"
const [state, dispatch] = useReducer(reducer, initialArgs, init);
```

## Counter 1 Example:

```jsx
import React, { useReducer } from "react";

// Defining the initial state and the reducer
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const App = () => {
  // Initialising useReducer hook
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("add")}>add</button>
      <button onClick={() => dispatch("subtract")}>subtract</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default App;
```

## Counter 2 Example:

```js title="Parent.js"
import React, { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1 className="centered">{count}</h1>
      <div className="centered">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
};

export default Parent;
```

```js title="Child.js"
import React, { useReducer } from "react";

const countReducer = (countState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: countState.count + 1 };
    case "DECREASE":
      return { count: countState.count - 1 };
  }
};

const Child = () => {
  const [countState, dispatchCountState] = useReducer(countReducer, {
    count: 0,
  });

  const increase = () => {
    dispatchCountState({ type: "INCREASE" });
  };

  const decrease = () => {
    dispatchCountState({ type: "DECREASE" });
  };

  return (
    <>
      <h1 className="centered">{countState.count}</h1>
      <div className="centered">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
};

export default Child;
```

## Todo Example

```js title="ToDoList.js"
import React, { useReducer, useState } from "react";
import TodoItem from "./TodoItem";

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, createTodo(action.payload.name)];
    case "SET_COMPLETE":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: true };
        }
        return todo;
      });
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const createTodo = (name) => {
  return { id: Math.random(), name: name, complete: false };
};

const TodoList = () => {
  const [todos, dispatchTodos] = useReducer(todosReducer, []);
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTodos({ type: "ADD_TODO", payload: { name: name } });
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="border"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </form>

      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            dispatchTodos={dispatchTodos}
            id={todo.id}
            name={todo.name}
            complete={todo.complete}
          />
        );
      })}
    </>
  );
};

export default TodoList;
```

```js title="ToDoItem.js"
import React from "react";

const TodoItem = (props) => {
  const handleComplete = () => {
    props.dispatchTodos({ type: "SET_COMPLETE", payload: { id: props.id } });
  };

  const handleRemove = () => {
    props.dispatchTodos({ type: "REMOVE", payload: { id: props.id } });
  };
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="col"> {props.name}</div>
        <div className="col">{props.complete ? "complete" : "incomplete"}</div>
      </div>
      <div className="col">
        <button className="border" onClick={handleComplete}>
          Complete
        </button>
      </div>
      <div className="col">
        <button className="border" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
```
