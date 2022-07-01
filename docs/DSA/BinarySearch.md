---
title: Binary Search
sidebar_position: 3
---

## Binary Search Example

When we think about how we use it, we think of the word we want to look up - let's say we want to look up the word programmer.

If the dictionary were organized randomly, we'd likely lose hope of finding our word and not even bother.

Rather, the dictionary is sorted alphabetically: This lets us flip through to the middle, let's say we land on a page that has definitions for words with the letter m: Now we only have to flip from this page to the end and we can eliminate searching the first half of the dictionary to find our word.

Next we land on r. Again we can now eliminate every page that comes up after r.

Each time we flip and check we limit our search to less and less pages, until we land on the page with our word on it.

A binary search operates in a similar way. First of all - the values are sorted, second of all, once you enter a midpoint and determine whether the value is larger or smaller, you can ignore the half that will definitely NOT contain the value you are searching for.

### Binary search function

- It is going to take an already sorted array as its first argument and then the element it is searching for for the second argument.
- there will be no duplicate entries
- the element you are searching for DEFINITELY is in the array

Your function will find the midpoint and then compare whether the midpoint is:

- larger than the element we are searching for
- smaller than the element we are searching for
- a match for the element we are searching for

You can use recursion, you don't have to.

```
const nums = [
  1,
  3,
  5,
  7,
  9,
  12,
  22,
  23,
  29,
  33,
  37,
  45,
  51,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  84,
  92
]

const animals = [
  'aardvark',
  'armadillo',
  'beetle',
  'cat',
  'cow',
  'dog',
  'ferret',
  'pig',
  'snake',
  'tarantula',
  'zebra'
]
```

Hungry for More

- add functionality to alert if there element being searched is not in the array
- if you wrote it without recursion, try writing it again with recursion.
- if you wrote it with recursion, try to write it without recursion

  Wildly Ravenous for even more

- Create functionality to build a binary search tree data structure

### Activity II

Let's do the same thing this time we'll sort animals alphabetically.
