import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayank'
})
export class MayankPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}