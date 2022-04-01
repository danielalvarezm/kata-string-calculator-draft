export class StringCalculator {
  private delimiter = ',';

  public sum(numbersString: string): number {
    if (numbersString === '') return 0;

    if (!numbersString.includes(this.delimiter)) {
      return Number.parseInt(numbersString);
    }

    const numbersArray = numbersString.split(',');
    return Number.parseInt(numbersArray[0]) + Number.parseInt(numbersArray[1]);
  }
}
