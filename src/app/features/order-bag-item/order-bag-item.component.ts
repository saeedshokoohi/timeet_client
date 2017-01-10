import {ChangeDetectorRef, Component, OnDestroy, OnInit,Input,OnChanges,ChangeDetectionStrategy,ApplicationRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
import {TotalPriceVM} from "../../models/TotalPriceVM.model";


@Component({
  selector: 'order-bag-item',
  templateUrl: 'order-bag-item.component.html',
  styleUrls: ['order-bag-item.style.css'],
  providers: [CategoryService, CompanyService, OrderBagService]

})

export class OrderBagItemComponent implements OnDestroy, OnInit,OnChanges {
  private id;
  public orderBagItem:OrderBagItemVM;
  public serviceItemDetail:ServiceItemDetailVM = new ServiceItemDetailVM();

  orderBagServiceItem:OrderBagItemVM = new OrderBagItemVM();
  private serviceItemId:number;
  private timeSessionId:number;
  formState:string = 'orderbagitem';


  constructor(private ref:ChangeDetectorRef,
              public route:ActivatedRoute,
              public router:Router,
              public translate:TranslateService,
              private companyService:CompanyService,
              private categoryService:CategoryService,
              private orderBagService:OrderBagService) {

    this.orderBagItem = new OrderBagItemVM();
    this.orderBagItem.qtyList = [];
    this.orderBagItem.options = [];
    this.orderBagItem.totalPrice = new TotalPriceVM();
  }

  ngOnDestroy():void {
  }

  ngOnInit():void {
    let parent = this;
    this.route.params.subscribe(params => {
      parent.serviceItemId = params['serviceitemid'];
      parent.timeSessionId = params['timesessionid'];
      this.orderBagService.getPriceInfoDetailByServiceIdAndTimeSession(this.serviceItemId, this.timeSessionId).subscribe(function (prices) {
        parent.orderBagItem.qtyList = prices;
      });
      this.orderBagService.getServiceItemOptionsByServiceItemid(this.serviceItemId).subscribe(function (options) {
        parent.orderBagItem.options = options;
        console.log(options);
      });
      this.categoryService.getServiceItemDetailById(this.serviceItemId).subscribe(function (si) {
        parent.serviceItemDetail = si;
      })
    });
  }

  ngOnChanges(changes):void {


  }

  itemChanged(e) {
    let parent = this;
    parent.orderBagItem.totalPrice = new TotalPriceVM();
    this.orderBagItem.qtyList.forEach(function (price) {

      if (price.qty > 0) {
        parent.orderBagItem.totalPrice.subtotalServicePrice += price.qty * price.price;
        let discount= (price.qty * price.price)-(price.qty*price.priceWithDiscount);
        parent.orderBagItem.totalPrice.subtotalDiscount +=discount;
      }
    });
    this.orderBagItem.options.forEach(function (option) {
      debugger;
      if (option.selected) parent.orderBagItem.totalPrice.subtotalOptionPrice +=  option.priceInfoDtail.price;

    })
    parent.orderBagItem.totalPrice.totalRowPrice=parent.orderBagItem.totalPrice.subtotalServicePrice-parent.orderBagItem.totalPrice.subtotalDiscount;
    parent.orderBagItem.totalPrice.totalRowPrice+=parent.orderBagItem.totalPrice.subtotalVAT;
    parent.orderBagItem.totalPrice.totalRowPrice+=parent.orderBagItem.totalPrice.subtotalOptionPrice;
  }
}
