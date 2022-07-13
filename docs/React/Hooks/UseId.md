---
title: "useId()"
sidebar_position: 14
---

```jsx title="syntax"
const id = useId();
```

useId is a hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.

:::caution
useId is not for generating keys in a list. Keys should be generated from your data.
:::

## Example

```jsx
function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
}
```
