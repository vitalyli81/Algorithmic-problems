import maxSlidingWindow1 from '../maxSlidingWindow1';
//import maxSlidingWindow2 from '../maxSlidingWindow2';

describe('maxSlidingWindow test', () => {
  test('output should be correct', () => {
    const inputList = [1, 3, -1, -3, 5, 3, 6, 7];
    const expected = [3, 3, 5, 5, 6, 7];

    expect(maxSlidingWindow1(inputList, 3)).toEqual(expected);
    // expect(maxSlidingWindow2(inputList, 3)).toEqual(expected);
  });
});
