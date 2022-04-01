/* eslint-disable prettier/prettier */
export class StringCalculator {
  // Regex expresion with delimiters: ",\n"
  private delimiter = /[,\n]/;

  public sum(numbersString: string): number {
    if (numbersString === '') return 0;

    if (!numbersString.match(this.delimiter)) {
      return Number.parseInt(numbersString);
    }

    const numbersArray = numbersString.split(this.delimiter).map((numberAsString)=>Number.parseInt(numberAsString));
    
    const numbers: number = numbersArray.reduce((previous, current) => {
      return previous + current;
    });

    return numbers;
  }
}
