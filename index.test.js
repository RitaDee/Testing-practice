const stringLength = require('./index');

test('returns the number of characters in a string', () => {
  expect(stringLength('rita')).toBeLessThan(4);
});

test('returns the number of characters in an empty string', () => {
  expect(stringLength('')).toBe(0);
});