---
title: "React Hooks"
sidebar_position: 4
---

## useEffect()

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
