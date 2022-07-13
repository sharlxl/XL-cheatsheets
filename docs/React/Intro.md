---
title: "Intro"
sidebar_position: 1
---

### React Elements

React elements are written using a feature called JSX.
JSX is just JavaScript functions (and not HTML), the syntax is a bit different.
Unlike HTML, single-tag elements (like the img element), must be self-closing. They must end in a forward slash /

Additionally, JSX requires a different syntax for its attributes.

Since JSX is really JavaScript and JavaScript uses a camelcase naming convention (that is, “camelCase”), attributes are written differently than HTML.

The most common example is the class attribute, which we write as className.

### React inline styles

To apply inline styles, instead of using double quotes (“”), we use two sets of curly braces.

Inline styles are not written as plain strings, but as properties on objects:

```jsx
<h1 style={{ fontSize: 24, margin: "0 auto", textAlign: "center" }}>
  My header
</h1>
```

### Fragments

React also gives us an element called a fragment.

React requires that all returned elements be returned within a single “parent” component.

For example, we can’t return two sibling elements, like an h1 and a paragraph from a component:
We can write fragments in a regular or shorthand syntax:`<React.Fragment></React.Fragment>` or `<></>`.

### Components / Props

A basic function component is written similarly to a regular JavaScript function with a couple of differences.

Component names must start with a capital letter (that is, MyComponent, instead of myComponent)
Components, unlike JavaScript functions, must return JSX.

---

React components can accept data passed to them called props.

Props are passed from the parent component to a child component.

Props is an object, so we can select the `key` prop within the object passed in to get its value.

---

```jsx
<Card activity="Buy groceries" time=" 14:00" />
//anything inside the activity, its props
```

```jsx
const Card = (props) => {
  //props are variables
  //eg const props = {key1:"key", key2:"key"}
  //props is a naming convention
  const boo = true;
  const obj = { name: shar };
  return (
    <div className="container">
      <div className="row div-border">
        <div className="col-sm-5">{props.activity}</div>
        {/* {} tells the jsx to run the expression */}
        {/* inside the {} you cna do simple js but not complex things like loops */}
        <div className="col-sm-5">{props.time}</div>
        <div>{obj}</div>
        {/* cannot print a object, you need to stringify it first */}
        <div>{boo}</div>
        {/* cannot print booleans, does not show up o the website */}
      </div>
    </div>
  );
};
```

```jsx
const ConponentA = () => {
  return <ComponentC chicken={donkey} duck={horse} goat={goat} />;
};

const ComponentC = (props) => {
  return <ComponentD one={props.chicken} two={props.duck} three={props.goat} />;
};
```

### React children prop

Props can also be passed by placing data between the opening and closing tags of a component.

Props that are passed this way are placed on the `children` property.

### React Conditionals

React components and elements can be conditionally displayed.

One approach is to create a separate return with an if-statement.

```jsx
function App() {
  const isAuthUser = useAuth();

  if (isAuthUser) {
    // if our user is authenticated, let them use the app
    return <AuthApp />;
  }

  // if user is not authenticated, show a different screen
  return <UnAuthApp />;
}
```

If you want to write a conditional within a return statement, however, you must use a conditional that resolves to a value.

To use the ternary operator, wrap the entire conditional in curly braces.

```jsx
function App() {
  const isAuthUser = useAuth();

  return (
    <>
      <h1>My App</h1>
      {isAuthUser ? <AuthApp /> : <UnAuthApp />}
    </>
  );
}
```
