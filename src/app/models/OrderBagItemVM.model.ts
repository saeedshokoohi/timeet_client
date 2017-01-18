import {ImageVM} from "./ImageVM.model";
import {PriceInfoDetailVM} from "./PriceInfoDetailVM.model";
import {ServiceOptionVM} from "./ServiceOptionVM.model";
import {TotalPriceVM} from "./TotalPriceVM.model";
import {PersonInfoVM} from "./PersonInfoVM.model";
import {ServiceItemVM} from "./ServiceItemVM";
import {SessionTimeVM} from "./SessionTimeVM.model";
/**
 * Created by saeed on 12/29/2016.
 */

export class OrderBagItemVM
{
  id: number;
  qtyList:PriceInfoDetailVM[];
  options:ServiceOptionVM[];
  totalPrice:TotalPriceVM;
  participants:PersonInfoVM[];
  serviceItem:ServiceItemVM;
  sessionTime:SessionTimeVM;


  constructor( )
  {

  }
}
