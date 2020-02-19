# Closest Property

When given an object and a string, will return the value corresponding to the
key that is the closest (according to the levenshtein distance, where case is
ignored) to the given string.

It may be useful when trying to access members with small spelling mistakes etc.

## Installation

```bash
npm install closest-property --save
```

## Examples

```js
const things = {
  house: 'this is a house',
  car: 'this is a car',
  dog: 'this is a dog'
}

console.log(closest(things, 'cat')) // this is a car
console.log(closest(things, 'horse')) // this is a house
```

or 

```js
const bestCaseTimeComplexity = {
  BUBBLE_SORT: 'O(n^2)',
  QUICK_SORT: 'O(log(n))'
}

const userInput = 'bubblesort'

console.log(closest(bestCaseTimeComplexity, userInput)) // 'O(n^2)'
```