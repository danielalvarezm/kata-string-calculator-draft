/* eslint-disable prettier/prettier */
export class StringCalculator {
  private delimiter: string|RegExp = /[,\n]/;

  public sum(numbersString: string): number {
    if (numbersString === '') return 0;

    if (numbersString.startsWith('//')) {
        this.delimiter = numbersString.slice(2, numbersString.indexOf('\n'));
        if ((numbersString.indexOf('\n') - 2) > 1) {
            this.delimiter = new RegExp(`/[${this.delimiter}]/`);  
        }
        numbersString = numbersString.slice(numbersString.indexOf('\n'));
        console.log(numbersString);
    }

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
