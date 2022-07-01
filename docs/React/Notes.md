---
title: "React notes"
sidebar_position: 1
---

## Components / Props

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

## Controlled forms/ uncontrolled forms

## Lifting states
