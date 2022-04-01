import { StringCalculator } from '../src/StringCalculator';

describe('The kata string calculator should', () => {
  it('give as result the same number', () => {
    const calculator = new StringCalculator();

    expect(calculator.sum('1')).toBe(1);
    expect(calculator.sum('3')).toBe(3);
    expect(calculator.sum('10')).toBe(10);
  });

  it('give zero as result for empty string', () => {
    const calculator = new StringCalculator();

    expect(calculator.sum('')).toBe(0);
  });
});
