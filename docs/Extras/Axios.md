---
title: "Axios"
sidebar_position: 2
---

`npm i axios`

```js
import axios from "axios"

const fetchPost = async (url, signal) => {
    set isLoading(true);
    setError(null)

    try {
        const res = await axios.get(url, {signal})

        if (res.status !== 200) {
            throw new Error("Something went wrong.";)
        }

        setPost ({
            id: res.data.id,
            title: res.data.title,
            body: res.data.body
        })
    } catch (err) {
        setError(err.message)
    }

    setIsLoading(false)
}

useEffect (() => {
    const url = ...
    const controller = new AbortController();
    fetchPost(url, controller.signal)

    return () => {
        controller.abort();
    }
})
```
