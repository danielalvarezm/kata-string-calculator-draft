export class StringCalculator {
  public sum(numbersString: string): number {
    if (numbersString === '') return 0;
    //TODO: REFACTOR change order of comprobations
    if (numbersString.includes(',')) {
      const numbersArray = numbersString.split(',');
      return (
        Number.parseInt(numbersArray[0]) + Number.parseInt(numbersArray[1])
      );
    }
    return Number.parseInt(numbersString);
  }
}
