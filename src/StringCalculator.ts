/* eslint-disable prettier/prettier */
export class StringCalculator {
  private delimiter = ',';

  public sum(numbersString: string): number {
    if (numbersString === '') return 0;

    if (!numbersString.includes(this.delimiter)) {
      return Number.parseInt(numbersString);
    }

    const numbersArray = numbersString.split(',').map((numberAsString)=>Number.parseInt(numberAsString));
    
    const numbers: number = numbersArray.reduce((previous, current) => {
      return previous + current;
    });

    return numbers;
  }
}
