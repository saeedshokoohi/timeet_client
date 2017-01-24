import {ImageVM} from "./ImageVM.model";
import {PriceInfoDetailVM} from "./PriceInfoDetailVM.model";
import {ServiceOptionVM} from "./ServiceOptionVM.model";
import {TotalPriceVM} from "./TotalPriceVM.model";
import {PersonInfoVM} from "./PersonInfoVM.model";
import {ServiceItemVM} from "./ServiceItemVM";
import {SessionTimeVM} from "./SessionTimeVM.model";
import {ParticipantVM} from "./ParticipantVM.model";
/**
 * Created by saeed on 12/29/2016.
 */

export class OrderBagItemVM
{
  id: number;
  orderBagServiceItemDtail:PriceInfoDetailVM[];
  options:ServiceOptionVM[];
  totalPrice:TotalPriceVM;
  participantPersons:ParticipantVM[];
  serviceItem:ServiceItemVM;
  timeSession:SessionTimeVM;
  serviceItemId:number;



  constructor( )
  {

  }
}
