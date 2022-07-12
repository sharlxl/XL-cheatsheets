---
title: "useState()"
sidebar_position: 2
---

## useState()

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
