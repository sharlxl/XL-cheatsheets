---
title: "useState()"
sidebar_position: 2
---

## useState()

```jsx title="syntax"
const [state, setState] = useState(initialstate);
```

useState does exactly what it says—it allows us to use stateful values in function components.

useState is used instead of a simple variable because when state is updated, our component re-renders, usually to display that updated value.

Like all hooks, we call useState at the top of our component and can pass it an initial value to put on its state variable.

We use array destructuring on the value returned from useState to access (1) the stored state and (2) a function to update that state.

```jsx title="simple state"
const [chicken, setChicken] = useState(0);
```

`chicken` is variable
`setChicken` is function
`useState` returns a variable and a function, call the function to update the variable
`0` is the initial value

```jsx title="multi states"
const [input, setInput] = useState({
  duck: "",
  swan: "",
  dove: "",
});

const handleDuckChange = (event) => {
  setInput((prevState) => {
    return { ...prevState, duck: event.target.value };
  });
};

const handleSwanChange = (event) => {
  setInput((prevState) => {
    return { ...prevState, swan: event.target.value };
  });
};

const handleDoveChange = (event) => {
  setInput((prevState) => {
    return { ...prevState, dove: event.target.value };
  });
};
```

`...` spread operators is used in states to shallow copy over the rest to the state and only amend the selected value
