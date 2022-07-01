---
title: JWT notes(unformatted)
---

# in Express

```js title=".env"
const SECRET_KEY = process.env.SECRET_KEY ?? "SECRET";
```

```js title="Express app.js or server.js"
const jwt = require("jsonwebtoken");

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username, role: "admin" }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).send({ status: "ok", data: token });
  } else {
    res.status(401).send({ status: "error", data: "No access" });
  }
});
```

```js title="secret route BEFORE middleware"
app.get("/secret", (req, res) => {
  const auth = req.headers.authorization;

  //the headers / authorization should look like
  //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

  if (!auth) {
    res.status(401).send({ status: "error", msg: "no headers" });
  }

  //=> remove the Bearer in front of the jwt token
  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded) {
      res.send({ status: "ok", data: token, decoded });
    } else {
      res.status(401).json({ status: "error", data: "No access" });
    }
  } catch (err) {
    res.status(401).send({ status: "error", data: err });
  }
});
```

---

```js title="middleware"
const isAuthenticated = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    res.status(401).send({ status: "error", msg: "No header" });
  }
  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded) {
      res.locals.user = decoded;
      next();
    } else {
      res.status(401).send({ status: "error", msg: "No access" });
    }
  } catch (err) {
    res.status(401).send({ status: "error", msg: "No access" });
  }
};
```

```js title="secret route AFTER middleware"
// add the middleware into the route
app.get("/secret", isAuthenticated, (req, res) => {
  //it goes thru the middleware andonly if it reaches the next() it will send this res back
  res.send({ status: "ok", data: "some secret", user: res.locals.user });
});
```

```js title="admin check middleware"
const isAdmin = (req, res, next) => {
  if (res.locals.user.role === "admin") {
    next();
  } else {
    res.status(401).send({ status: "error", msg: "Not admin" });
  }
};
```

```js title="React app - Login to get token"
// < omiting all the boiler codes for login function and etc >

// send the token to frontend

// store it in ??
const [token, setToken] = useState();

fetch("http://localhost:5001/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username, password }),
})
  .then((response) => response.json())
  .then((data) => {
    setToken(data.token);
    //window.localStorage.setItem("token", data.token); // <==
  });
```

```js title="React app - Secret page"
useEffect(() => {
  fetch("http://localhost:5001/secret", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}, []);
return <div>{!token ? "No Access" : "logged in"}</div>;
```

```js title="function to parseJWT"
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
```
