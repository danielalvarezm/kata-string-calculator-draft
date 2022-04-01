export class StringCalculator {
  public sum(numbersString: string): number {
    if (numbersString === '') return 0;
    return Number.parseInt(numbersString);
  }
}
