---
title: Recursions
sidebar_position: 2
---

> To understand recursion, you must understand recursion

## Recursion definition

A function that calls itself is called recursive.

A recursive function calls itself to reduce a larger problem into a smaller one until it can be solved.

A recursive function must have two properties

a simple base case (or cases) - which is a terminating scenario that does not use recursion to produce an answer
A set of rules that reduce all other cases towards the base case
Recursion is found in mathematics and can look really scary. But we can use recursion with ease.

## Recursion Example #1

Let’s think about adding the following numbers

`1 , 2, 3, 4, 5, 6, 7, 8 , 9 ,10`

#### Solving it recursively

First, since we have a list of numbers (our test case), let’s express them as an array
Second, define a function

```js
const numsToSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumNumbers = (numsArr, sum) => {
  sum = sum || 0;
  // We have to define our sum variable and we have to be able to access it over and over again, let’s give it a value of 0, otherwise it will equal the sum of the previous numbers.

  //base case
  if (numsArr.length === 0) {
    return sum;
  }
  sum += numsArr.shift();
  // Each time we add a number we have to remove it from the array, thus decreasing the array length and bring us closer to our base case.
  return sumNumbers(numsArr, sum);
  // Now that we’ve established our base case and a way to get down to our base case, we can now call our function
};

sumNumbers(numsToSum); //runs the function
```

## Recursion Example #2

We can figure out if a positive integer is even or odd, if we keep subtracting 2 from the number. If the value 0 is reached, the number is even. If the value 1 is reached, the number is odd.

```js
const testCase1 = 10;
//define a number/test case

const isEven = (num) => {
  if (num === 0) {
    //base case
    return "the number is even";
  }
  if (num === 1) {
    //base case
    return "the number is odd";
  }
  return isEven(num - 2);
};

isEven(testCase1);
isEven(101);
```

---

Sometimes, it is scary to do things that might cause an infinite loop or blow the stack- because it may be difficult to stop and cause your computer to freeze and you might have to restart it.

`repl.it` is really nice because if you cause an infinite loop or try to blow the stack it'll stop pretty quickly and give you an error.

---

## (TIPS) Writing a recursive function

Karolin's 7 easy steps to writing a recursive function

1. Establish a test case
2. Write an empty function
3. Define your base case(s) - What is our base case for this problem?
4. Figure out how you will 'hold on' to your progress as you call the function again and again
5. Define a way to reduce your complex case down to the base case (you may be able to combine step 4 into this)
6. Call your function inside your function
7. Test it!

## Self Practices

### Factorial

The factorial of a positive integer, n, is the product of all positive integers less than or equal to to n.

The factorial of 5 is 120

5 x 4 x 3 x 2 x 1 = 120

Write a recursive function factorial that returns the factorial of a given number

Remember, you can get started with Karolin's 7 easy steps to writing a recursive function

1. Establish a test case (for this example, you can choose 5, since we know the result will be 120)
2. Write an empty function
3. Define your base case(s) - What is our base case for this problem?
4. Figure out how you will 'hold on' to your progress as you call the function again and again
5. Define a way to reduce your complex case down to the base case (you may be able to combine step 4 into this)
6. Call your function inside your function
7. Test it!

### Step counting

Suppose you want climb a staircase of N steps, and on each step you can take either 1 or 2 steps. How many distinct ways are there to climb the staircase? For example, if you wanted to climb 4 steps, you can take the following distinct number of steps:

```
1) 1, 1, 1, 1
2) 1, 1, 2
3) 1, 2, 1
4) 2, 1, 1
5) 2, 2
```

So there are 5 distinct ways to climb 4 steps. We want to write a function, using recursion, that will produce the answer for any number of steps.

### Fibonacci Sequence

Fibonacci sequence The Fibonacci sequence is a sequence of integers in which the first and second terms are both equal to 1 and each subsequent term is the sum of the two preceding it. The first few terms are $1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...

Write a function where you take a number and determine whether or not it is a Fibonacci number (return true/false)

:::tip
This is a popular recursion problem that comes up often
:::

### Recursion "Branches"

Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite amount of new numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produce that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

### Array Flattener

Create a function that takes a multi-level array (of any depth) and flattens it to one level

```js
const arr = [1, 2, [3, 4, [5, [6]], 7], 8, [9, 10]];

flatten(arr);

// [ 1 , 2, 3, 4, 5, 6, 7, 8 , 9 ,10 ];
```

### Total Recall

It is now time to push you understanding of functional programming to the next level. Write a function recall(word) which can be chain called like so

```js
recall(‘Sorry,’)(‘Your’)(‘whole’)(‘life’)(‘is’)(‘just’)(‘a’)(‘dream.’)(‘I’)(‘have’)(‘been’)(‘trying’)(‘to’)(‘tell’)(‘you,’)(‘someone’)(‘has’)(‘erased’)(‘your’)(‘memory.’)();

// => “Sorry, Your whole life is just a dream. I have been trying to tell you, someone has erased your memory. ”
```

:::caution
Notice that if you pass a string as an argument the function saves it. If you invoke it with no argument at the end it will log to the console all of the previous arguments concatenated together.
:::
