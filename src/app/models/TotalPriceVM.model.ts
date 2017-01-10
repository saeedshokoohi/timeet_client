import {ImageVM} from "./ImageVM.model";
import {PriceInfoDetailVM} from "./PriceInfoDetailVM.model";
import {ServiceOptionVM} from "./ServiceOptionVM.model";
/**
 * Created by saeed on 12/29/2016.
 */

export class TotalPriceVM
{
  subtotalServicePrice:number=0;
  subtotalOptionPrice:number=0;
  subtotalDiscount:number=0;
  subtotalVAT:number=0;
  totalRowPrice:number=0;


  constructor( )
  {

  }
}
