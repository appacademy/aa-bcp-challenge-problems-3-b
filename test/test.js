/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***********************/

const assert = require('assert');

const myIndexOf = require('../problems/1-my-index-of.js');
const minMaxDifference = require('../problems/2-min-max-difference.js');
const divisibleByFivePairSum = require('../problems/3-divisible-by.js');
const dynamicFizzBuzz = require('../problems/4-dynamic-fizz-buzz.js');
const magicCipher = require('../problems/5-magic-cipher.js');

describe('myIndexOf()', function () {
  it('should return the index of the element in the array', function () {
    assert.equal(myIndexOf([1, 2, 3, 4, 5], 5), 4);
    assert.equal(myIndexOf(['a', 'b', 'c'], 'a'), 0);
  });

  it('should return -1 if element does not exist', function () {
    assert.equal(myIndexOf(['a', 'b', 'c'], 'd'), -1);
  });
});

describe('minMaxDifference()', function () {
  it('should return the difference of the min and max value of the array.', function () {
    assert.equal(minMaxDifference([1, 2, 3, 4, 5]), 4);
    assert.equal(minMaxDifference([5, 4, 3, 2, 1]), 4);
    assert.equal(minMaxDifference([4, 2, 5, 1, -5]), 10);
  });
});

describe('divisibleByFivePairSum()', function () {
  it('should return an array of all the pairs of indices whose sum is a multiple of five', function () {
    const result1 = divisibleByFivePairSum([1, 5, 2, 0, 4]);
    const result2 = divisibleByFivePairSum([13, 22, 8, -3, 12]);
    const expected1 = [
      [0, 4],
      [1, 3],
    ];
    const expected2 = [
      [0, 1],
      [0, 3],
      [0, 4],
      [1, 2],
      [2, 3],
      [2, 4],
    ];
    assert.deepEqual(result1, expected1);
    assert.deepEqual(result2, expected2);
  });

  it('should return an empty array if no pairs exist', function () {
    const result1 = divisibleByFivePairSum([7, 7, 7, 7]);
    const expected1 = [];
    assert.deepEqual(result1, expected1);
  });
});

describe('dynamicFizzBuzz()', function () {
  it('should return array of all fizzbuzz numbers under max', function () {
    const result1 = dynamicFizzBuzz(20, 5, 3);
    const expected1 = [3, 5, 6, 9, 10, 12, 18];
    assert.deepEqual(result1, expected1);
    const result2 = dynamicFizzBuzz(20, 4, 6);
    const expected2 = [4, 6, 8, 16, 18];
    assert.deepEqual(result2, expected2);
    const result3 = dynamicFizzBuzz(50, 7, 13);
    const expected3 = [7, 13, 14, 21, 26, 28, 35, 39, 42, 49];
    assert.deepEqual(result3, expected3);
  });
});

describe('magicCipher()', function () {
  it('should return a string where every character is replaced with its corresponding value in the cipher', function () {
    const result1 = magicCipher('add me on facebook', { a: 'c', d: 'q' });
    const expected1 = 'cqq me on fccebook';
    assert.equal(result1, expected1);

    const result2 = magicCipher('where are you?', { v: 'l', '?': '!' });
    const expected2 = 'where are you!';
    assert.equal(result2, expected2);

    const result3 = magicCipher('twmce', { m: 'n', t: 'd', w: 'a' });
    const expected3 = 'dance';
    assert.equal(result3, expected3);
  });
});
