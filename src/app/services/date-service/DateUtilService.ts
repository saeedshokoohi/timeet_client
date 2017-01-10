import { Pipe, PipeTransform } from '@angular/core';
import '../../../assets/js/jdate.js';
declare var JDate: any;


@Pipe({name: 'persianDate'})
export class PersianDate implements PipeTransform {
  transform(input: string, exponent: string): string {
debugger;
    if(input == null){ return ""; }



    var  date=new JDate(new Date(input));
    if(date!=undefined)
      return date.format('YYYY/MM/DD');
    else
      return input;

  }
}


