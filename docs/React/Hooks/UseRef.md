---
title: "useRef()"
sidebar_position: 3
---

## useRef()

```jsx title="syntax"
const refContainer = useRef(initialValue);
```

The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.

The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.

useRef allows us to get direct access to a JSX element.

To use useRef, call it, get the returned value, and put it on the ref prop for a given React element.

Refs do not have a built-in prop on components, only React elements.

Once a ref is attached to a given element, we can use the value stored on ref.current to access the element itself.

```jsx
const [username, setUsername] = useState("");
const usernameRef = useRef();

const focus = () => {
  usernameRef.current.focus();
};

<input
  ref={usernameRef}
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>;
```

```js title="simple validation with useRef"
const emailInputRef = useRef();
const [submittedEmail, setSubmittedEmail] = useState("");
const [validEmail, setValidEmail] = useState(false);

const handleFormSubmission = (e) => {
  e.preventDefault();

  const inputEmail = emailInputRef.current.value;
  //document.querySelector("#email").value

  if (inputEmail.includes("@")) {
    setValidEmail(true);
    setSubmittedEmail(inputEmail);
  }
  emailInputRef = "";
};
```
