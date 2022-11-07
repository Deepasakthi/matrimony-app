import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightConvertor'
})
export class HeightConvertorPipe implements PipeTransform {

  transform(value: any): string {
    value = value/30.48;
    value = value.toString();
    value = value.split(".");
    return value[0] + " ft " + value[1].slice(0,1) + " in";
  }

}