---
title: "UseEffect()"
sidebar_position: 4
---

## useEffect()

```jsx title="syntax"
useEffect(() => {
  //Runs on every render
});

useEffect(() => {
  //Runs only on the first render
}, []);

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

If we want to interact with the “outside world”, such as using an API, we use the useEffect hook.

useEffect is used to perform a side effect, which means to perform an operation that exists outside of our app that doesn’t have a predictable result.

The basic syntax of useEffect requires a function as a first argument and an array as the second argument.

If we need to use a value that comes from outside the effect function, it must be included in the dependencies array.

If that value changes, the effect function will be re-executed.

```jsx
useEffect(() => {
  console.log("on mount & unmount");

  //add event listener(using vanilla JS)

  //clean up function -> remove eventlistener
});
useEffect(() => {
  console.log("On every state change");
  return () => {
    console.log("clean up function");
    if (clicked > 4) {
      setClicked(0);
    }
  };
}, [clicked]);
```

```js title="simple validation with useEffect"
const [inputEmail, setInputEmail] = useState("");
const [submittedEmail, setSubmittedEmail] = useState("");
const [validEmail, setValidEmail] = useState(false);

useEffect(() => {
  setValidEmail(inputEmail.includes("@"));
}, [inputEmail]);

const handleEmailChange = (e) => {
  setInputEmail(e.target.value);
};

const handleFormSubmission = (e) => {
  e.preventDefault();
  if (validEmail) {
    setSubmittedEmail(inputEmail);

    setInputEmail("");
  }
};
```
