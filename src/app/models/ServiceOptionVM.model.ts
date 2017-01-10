import {ImageVM} from "./ImageVM.model";
import {PriceInfoDetailVM} from "./PriceInfoDetailVM.model";
/**
 * Created by saeed on 12/29/2016.
 */

export class ServiceOptionVM
{
  id: number;

  selected:boolean;
  description:string;
  optionName:string;
  priceInfoDtail:PriceInfoDetailVM=new PriceInfoDetailVM();




  constructor( )
  {
   this.selected=false;
  }
}
