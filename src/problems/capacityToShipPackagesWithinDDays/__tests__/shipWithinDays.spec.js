import shipWithinDays from '../shipWithinDays';
import shipWithinDays2 from '../shipWithinDays2';

describe('shipWithinDays test', () => {
  test('should return correct value', () => {
    const weights1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const D1 = 5;
    const output1 = 15;

    const weights2 = [3, 2, 2, 4, 1, 4];
    const D2 = 3;
    const output2 = 6;

    const weights3 = [1, 2, 3, 1, 1];
    const D3 = 4;
    const output3 = 3;

    expect(shipWithinDays(weights1, D1)).toBe(output1);
    expect(shipWithinDays(weights2, D2)).toBe(output2);
    expect(shipWithinDays(weights3, D3)).toBe(output3);

    expect(shipWithinDays2(weights1, D1)).toBe(output1);
    expect(shipWithinDays2(weights2, D2)).toBe(output2);
    expect(shipWithinDays2(weights3, D3)).toBe(output3);
  });
});
