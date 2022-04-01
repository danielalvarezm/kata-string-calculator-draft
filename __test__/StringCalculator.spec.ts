import { StringCalculator } from '../src/StringCalculator';

/**
 * TODO LIST:
 * sum('1') -> 1 -
 * sum('') -> 0 -
 * sum('1,1') -> 2 -
 * sum('1,2,3') -> 6 -
 * sum(abc) -> 0
 * sum('1\n2,3') -> 6
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

  it('give the sum of more an undefinite amount of numbers separated by commas', () => {
    const calculator = new StringCalculator();

    expect(calculator.sum('1,1,1')).toBe(3);
    expect(calculator.sum('1,2,3')).toBe(6);
    expect(calculator.sum('4,2,10')).toBe(16);
  });

  it('give the sum of more an undefinite amount of numbers separated by \\n', () => {
    const calculator = new StringCalculator();

    expect(calculator.sum('1\n1\n1')).toBe(3);
    expect(calculator.sum('1\n2\n3')).toBe(6);
    expect(calculator.sum('4\n2\n10')).toBe(16);
  });

  it('give the sum of more an undefinite amount of numbers separated by \\n or comma', () => {
    const calculator = new StringCalculator();

    expect(calculator.sum('1,1\n1')).toBe(3);
    expect(calculator.sum('4\n2,10')).toBe(16);
  });
});
