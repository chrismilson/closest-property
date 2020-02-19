import closest from '../';

interface Dictionary {
  [key: string]: string;
}

const things: Dictionary = {
  house: 'This is a house.',
  car: 'This is a car.',
  dog: 'This is a dog.',
};

const bestCaseTimeComplexity: Dictionary = {
  BUBBLE_SORT: 'O(n^2)',
  QUICK_SORT: 'O(log(n))',
};

test('Members with the same name should be chosen.', () => {
  Object.keys(things).forEach(key => {
    expect(closest(things, key)).toBe(things[key]);
  });
});
