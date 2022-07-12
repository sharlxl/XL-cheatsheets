---
title: "Testing Library example"
---

```js title="App.js"
import React from "react";
import Parent from "./components/Parent";
import Other from "./components/Other";
import "@testing-library/react";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Parent />
      </div>
      <hr />
      <div className="row">
        <Other />
      </div>
    </div>
  );
}

export default App;
```

```js title="Parent.js"
import React, { useState } from "react";

const Parent = () => {
  const [text, setText] = useState(false);

  const handleClick = () => {
    setText(true);
  };

  return (
    <div className="container">
      <h2>Parent Component</h2>
      {!text && <p>Original text</p>}
      {text && <p>After button click</p>}

      <button onClick={handleClick}>Change text</button>
    </div>
  );
};

export default Parent;
```

```js title="Parent.test.js"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Parent from "../components/Parent";

describe("plain old HTML", () => {
  test("renders 'Parent Component'", () => {
    render(<Parent />);

    // exact: false will not care about caplisation of the words
    const textElement = screen.getByText("Parent Component", {
      exact: false,
    });
    expect(textElement).toBeInTheDocument;
  });

  test("renders 'Original text'", () => {
    render(<Parent />);

    //substring will also match it - > "origin", {exact: false,}
    const textElement = screen.getByText("Original text");
    expect(textElement).toBeInTheDocuments;
  });

  test("renders 'After button click when button is clicked", () => {
    render(<Parent />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //getby, queryby, findby
    //getby - throws an error if not found
    //queryby - returns a null if not found
    //findby - found ? fufilled promise : rejected promise

    const original = screen.getByText("After button click", { exact: false });
    expect(original).toBeInTheDocument;

    const afterClick = screen.queryByText("Original text", { exact: false });
    expect(afterClick).not.toBeInTheDocument;
  });
});
```

```js title="Other.js"
import React, { useEffect, useState } from "react";

const Other = () => {
  const [userList, setUserList] = useState([]);

  const fetchUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const data = await res.json();

    const theList = data.map((item) => {
      return { id: item.id, name: item.name };
    });

    setUserList(theList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2>Other Component</h2>
      <ul>
        {userList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Other;
```

```js title="Other.test.js"
import { render, screen } from "@testing-library/react";
import Other from "../components/Other";

describe("async component", () => {
  test("render items if request succeeds", async () => {
    //this will not call the API
    //it hijacks the fetch and return the json
    //runs internally

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "70", name: "John Doe" }],
    });
    render(<Other />);

    const listElement = await screen.findAllByRole("listitem");

    expect(listElement).not.toHaveLength(0);
  });
});
```
