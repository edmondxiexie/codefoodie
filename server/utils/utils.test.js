const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`);
  }
  expect(res).toBe(44);
});
