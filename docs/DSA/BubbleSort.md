---
title: Bubble Sort
sidebar_position: 5
---

Bubble sort is one of the first sorting algorithms you should master. While it isn't particularly efficient, it's simple and intuitive.

Bubble Sort compares neighboring elements and forces larger elements to 'bubble' to the end of an array while simultaneously 'floating' smaller elements to the top/front of a list.

This sorting algorithm is what you might do if you were asked to sort a list one by one.

---

### How it works

Bubble sort steps through the list to be sorted, compares each pair of adjacent items, and swaps the items if they are in the wrong order.

The algorithm passes through the list repeatedly until there are no more swaps occuring.

```title="an unsorted input"
[4, 3, 6, 77, 0]
```

The algorithm will first check 4 and 3, and if they are in the wrong order, it will swap them, giving the result:

```
[3, 4, 6, 77, 0]
```

The algorithm will then check 4 and 6, and if they are in the wrong order, it will swap them. Since 4 and 6 are in the correct order, they will not be swapped.

Traversing the array and doing the correct swaps is just a single pass: the entire array will likely not be sorted after a single pass. The algorithm has to do the process again and again until there are no more swaps.
