import {ImageVM} from "./ImageVM.model";
import {PriceInfoDetailVM} from "./PriceInfoDetailVM.model";
import {ServiceOptionVM} from "./ServiceOptionVM.model";
import {TotalPriceVM} from "./TotalPriceVM.model";
import {PersonInfoVM} from "./PersonInfoVM.model";
import {OrderBagItemVM} from "./OrderBagItemVM.model";
/**
 * Created by saeed on 12/29/2016.
 */

export class OrderBagVM
{
  id: number;
  orderBagServiceItems:OrderBagItemVM[]=[];



  constructor( )
  {

  }

   static calculateTotalPrice(orderBag: OrderBagVM):TotalPriceVM
  {
    let total:TotalPriceVM=new TotalPriceVM();
    console.log('total price method');
    console.log(orderBag)
     orderBag.orderBagServiceItems.forEach(function(item){
       if(item)
      total.subtotalServicePrice+= item.totalPrice.subtotalServicePrice;
      total.totalRowPrice+= item.totalPrice.totalRowPrice;
      total.subtotalDiscount+= item.totalPrice.subtotalDiscount;
      total.subtotalVAT+= item.totalPrice.subtotalVAT;
      total.subtotalOptionPrice+= item.totalPrice.subtotalOptionPrice;
     });
    return total;
  }
}
