---
title: "useRef()"
sidebar_position: 3
---

## useRef()

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
