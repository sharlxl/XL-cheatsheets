---
title: "React Router Dom 6"
sidebar_position: 3
---

## Example + useParams()

```js title="App.js"
import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Details from "./pages/Details";
// import PageOne from "./pages/PageOne";
// import PageTwo from "./pages/PageTwo";
// import PageThree from "./pages/PageThree";

//converting the pages to lazy loading for deployment
const PageOne = React.lazy(() => import("./pages/PageOne"));
const PageTwo = React.lazy(() => import("./pages/PageTwo"));
const PageThree = React.lazy(() => import("./pages/PageThree"));

// import loadingspinner

// no need to use the exact anymore, its default exact

// **replace only register the direct url not the redirected url in the browser history

function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <Suspense fallback={<p>Loading</p>} />
        {/* <Suspense fallback={
          <div>Loading spinner here</div>
        }/> */}
        <Routes>
          <Route path="/" element={<Navigate replace to="page-one" />} />
          <Route path="/page-one" element={<PageOne />} />
          <Route path="/page-one/:item" element={<Details />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
```

```js title="Details.js"
import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();

  return (
    <section>
      <h1>Details of {params.item}</h1>
    </section>
  );
};

export default Details;
```
