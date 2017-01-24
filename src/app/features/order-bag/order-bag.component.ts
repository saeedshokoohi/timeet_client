import {ChangeDetectorRef, Component, OnDestroy, OnInit,Input,OnChanges,ChangeDetectionStrategy,ApplicationRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import {TranslateService} from "../../../../node_modules/ng2-translate/src/translate.service";
import {CompanyService} from "../../services/company-service/company-service";
import {CompanyVM} from "../../models/CompanyVM.model";
import {CategoryService} from "../../services/category/category.service";
import {CategoryVM} from "../../models/CategoryVM.model";
import {ServiceItemVM} from "../../models/ServiceItemVM";
import {ServiceItemDetailVM} from "../../models/ServiceItemDetailVM";
import {SessionDateVM} from "../../models/SessionDateVM.model";
import {SessionTimeVM} from "../../models/SessionTimeVM.model";
import {PriceInfoDetailVM} from "../../models/PriceInfoDetailVM.model";
import {OrderBagItemVM} from "../../models/OrderBagItemVM.model";
import {OrderBagService} from "../../services/orderbag/orderbag.service";
import {ServiceOptionVM} from "../../models/ServiceOptionVM.model";

import {PersonInfoVM} from "../../models/PersonInfoVM.model";
import {OrderBagVM} from "../../models/OrderBagVM.model";
import {CacheUtilService} from "../../services/cache-util/CacheUtilService";
import {TotalPriceVM} from "../../models/TotalPriceVM.model";


@Component({
  selector: 'order-bag',
  templateUrl: 'order-bag.component.html',
  styleUrls: ['order-bag.style.css'],
  providers: [CategoryService, CompanyService, OrderBagService, CacheUtilService]

})

export class OrderBagComponent implements OnDestroy, OnInit,OnChanges {
  baseurl:string = '';
  private orderBagCookieKey;
  orderBag:OrderBagVM;
  totalPrice:TotalPriceVM=new TotalPriceVM();


  constructor(private ref:ChangeDetectorRef,
              public route:ActivatedRoute,
              public router:Router,
              public translate:TranslateService,
              private companyService:CompanyService,
              private categoryService:CategoryService,
              private orderBagService:OrderBagService,
              private _cacheUtil:CacheUtilService) {


  }

  ngOnDestroy():void {
  }

  ngOnInit():void {
    let parent = this;

    this.route.params.subscribe(params => {
      debugger;
      parent.baseurl = params['baseurl'];
      parent.orderBagCookieKey = this.baseurl + 'user_order_bag';
      parent.orderBag = <OrderBagVM>this._cacheUtil.getFromCach(this.orderBagCookieKey);
      parent.totalPrice=OrderBagVM.calculateTotalPrice( parent.orderBag);

    });
  }

  ngOnChanges(changes):void {


  }
  selectedOptions(options:ServiceOptionVM[]):ServiceOptionVM[]
  {
  return  options.filter(function(o){return(o.selected)})
  }
  removeItem(item:OrderBagItemVM)
  {
    debugger;
    this.orderBag.orderBagServiceItems= this.orderBag.orderBagServiceItems.filter(function(it){return it.timeSession.id!=item.timeSession.id})
    this._cacheUtil.storeInCache(this.orderBagCookieKey,this.orderBag);
    this.totalPrice=OrderBagVM.calculateTotalPrice( this.orderBag);
  }
  toSTR(jo:any)
  {
    return JSON.stringify(jo);
  }
  confirmOrderBag()
  {
    this.orderBagService.confirmOrderBag(this.orderBag).then((res)=>{console.log(res)}).catch((er)=>{console.log(er)});
  }
}
