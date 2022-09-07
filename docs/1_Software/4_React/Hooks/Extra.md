---
title: "useEffect/useMemo/useCallback"
sidebar_position: 11
---

The useCallback, useMemo, and useEffect are a way to optimize the performance of React-based applications between rerendering of components. These functions provide some of the features of the class-based components like persistence of dedicated states through render calls as well as the lifecycle functions to control how the components look over various stages of their lifecycle.

To answer when to use useCallBack, useMemo, and useEffect, we should know what exactly they do and how they are different.

1. useCallback: The useCallback is a react hook that returns a memoized callback when passed a function and a list of dependencies as parameters. It’s very useful when a component is passing a callback to its child component to prevent the rendering of the child component. It only changes the callback when one of its dependencies gets changed.

2. useMemo: The useMemo is similar to useCallback hook as it accepts a function and a list of dependencies but it returns the memoized value returned by the passed function. It recalculated the value only when one of its dependencies change. It is useful to avoid expensive calculations on every render when the returned value is not going to change.

3. useEffect: A hook that helps us to perform mutations, subscriptions, timers, logging, and other side effects after all the components has been rendered. The useEffect accepts a function that is imperative in nature and a list of dependencies. When its dependencies change it executes the passed function.
