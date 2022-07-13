---
title: Functions
sidebar_position: 2
---

## String/Array

### indexOf()

```js title="syntax"
str.indexOf(searchValue, index);
```

`.indexOf()` function finds the index of the first occurrence of the argument string/array in the given string/array. The value returned is 0-based.

`searchValue` is the string/array that is to be searched in the base string/array. The second argument to the function `index` defines the starting `index` from where the `searchValue` is to be searched in the base string/array.

### lastIndexOf()

```js title="syntax"
str.lastIndexOf(searchValue, index);
```

`.lastIndexOf()` method finds the index of the last occurrence of the argument string/array in the given string/array. The value returned is 0-based.

### slice()

```js title="syntax"
str.slice(startingindex, endingindex);
```

The `.slice()` method returns a new string/array containing a portion of the string/array on which it is implemented. The original remains unchanged.

### concat()

```js title="syntax"
str.concat(string2, string3, string4,......, stringN)
```

`.concat()` function is used to join two or more strings/arrays together in JavaScript.

## String

### replace()

```js title="syntax"
str.replace(A, B);
```

The `string.replace()` is an inbuilt method in JavaScript which is used to replace a part of the given string with some another string or a regular expression. The original string will remain unchanged.

```js title="example"
const string = "GeeksForGeeks is a CS portal";

const newstring = string.replace(/GeeksForGeeks/, "gfg");
```

### toUpperCase()

```js title="syntax"
str.toUpperCase();
```

`str.toUpperCase()` method converts the entire string to Upper case. This method does not affect any of the special characters, digits, and the alphabets that are already in the upper case.
This method returns a new string in which all the lower case letters are converted to upper case.

### toLowerCase()

```js title="syntax"
str.toLowerCase();
```

`str.toLowerCase()` method converts the entire string to lower case. This method does not affect any of the special characters, digits, and the alphabets that are already in the lower case.
This method returns a new string in which all the upper case letters are converted to lower case.

### charAt()

```js title="syntax"
const character = str.charAt(index);
```

The only argument to this function is the index in the string from where the single character is to be extracted. The range of this index is between 0 and length – 1, including the limits. If no index is specified then the first character of the string is returned as 0 is the default index used for this function.

### charCodeAt()

```js title="syntax"

```

### split()

```js title="syntax"

```

### ().toString()

```js title="syntax"

```

---

## Numbers

### parseInt()

```js title="syntax"

```

### parseFloat()

```js title="syntax"

```

## Math

- Math.round()
- Math.pow()
- Math.sqrt()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.sin()
- Math.min()
- Math.max()
- Math.log()
- Math.exp()
- Math.random()
- Math.floor(Math.random())

---

## Arrays

- toString()
- join()
- pop()
- push()
- shift()
- unshift()
- splice()
- slice()
- sort()
- reverse()

## Dates

- getDate()
- getDay()
- getFullYear()
- getHours()
- getMilliseconds()
- getMinutes()
- getMonth()
- getSeconds()
- getTime()

- new Date()

- setDate()
- setFullYear()
- setHours()
- setMilliseconds()
- setMinutes()
- setMonth()
- setSeconds()
- setTime()

## Storage

- localStorage.setItem()
- localStorage.getItem()
