import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  transform(data: string, number): any {
    let value = data.split(' ');
    if (value) {
      let newValue: string = '';
      for (let i = 0; i < value.length; i++) {
        // console.log(value[i],"find")
        newValue += ' ';

        for (let j = 0; j < value[i].length; j++) {
          if (j < number) {
            newValue += value[i][j].toUpperCase();
            // console.log(newValue);
          } else {
            newValue += value[i][j];
          }
        }
      }
      return newValue;
    }
  }
}
