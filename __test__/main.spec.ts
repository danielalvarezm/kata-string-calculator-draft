import { StringCalculator } from '../src/StringCalculator';

describe('The kata string calculator should', () => {
  it('give as result the same number', () => {
    const calculator = new StringCalculator();
    expect(calculator.sum('1')).toBe(1);
  });
});
