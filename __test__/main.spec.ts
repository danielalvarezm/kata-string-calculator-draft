import { StringCalculator } from '../src/StringCalculator';

/**
 * 
 */
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

  it('give the sum of two numbers delimited by comma', () => {
    const calculator = new StringCalculator();

    expect(calculator.sum('1,1')).toBe(2);
    expect(calculator.sum('2,1')).toBe(3);
    expect(calculator.sum('4,2')).toBe(6);
  });

});
