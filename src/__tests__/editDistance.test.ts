import { editDistance } from '../'

test('The distance between words should be the levenshtein distance.', () => {
  expect(editDistance('house', 'horse')).toBe(1)
  expect(editDistance('horse', 'ros')).toBe(3)
  expect(editDistance('intention', 'execution')).toBe(5)
})

test('The distance should be irrespective of case.', () => {
  expect(editDistance('HOUSE', 'house')).toBe(0)
  expect(editDistance('house', 'cut')).toBe(editDistance('HOUSE', 'cut'))
})

test(
  'The distance from the empty string should be the string\'s length.',
  () => {
    let str = ''
    for (let i = 0; i < 100; i++) {
      expect(editDistance(str)).toBe(i)
      str += '.'
    }
  }
)

test('There should be distance zero on no input.', () => {
  expect(editDistance()).toBe(0)
})

test('The distance between a string and itself should be zero.', () => {
  // try 100 different random strings against themselves
  for (let i = 0; i < 100; i++) {
    const randomString = Math.random().toString()
    expect(editDistance(randomString, randomString)).toBe(0)
  }
})