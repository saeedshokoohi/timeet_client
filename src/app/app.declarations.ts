import { DashboardComponent } from './features/dashboard.component';
import { NotFound404Component } from './not-found404.component';
import {HomePageComponent} from "./features/home-page/home-page.component";
import {CompanyCategoriesComponent} from "./features/company-categories/company-categories.component";
import {CompanyHomeSliderComponent} from "./features/company-home-slider/company-home-slider.component";
import {ImageHolderComponent} from "./features/image-components/image-holder.component";
import {ContactUsComponent} from "./features/contact-us/contact-us.component";
import {CategoryDetailComponent} from "./features/category-detail/category-detail.component";
import {ServiceItemSingleBlockComponent} from "./features/service-item-single-block/service-item-single-block.component";
import {CategorySingleBlockComponent} from "./features/category-single-block/category-single-block.component";
import {ServiceItemDetailComponent} from "./features/service-item-detail/service-item-detail.component";
import {OrderBagItemComponent} from "./features/order-bag-item/order-bag-item.component";
import {PersianDate} from "./services/date-service/DateUtilService";
import {ParticipantInfoComponent} from "./features/participant-info/participant-info.component";
import {OrderBagComponent} from "./features/order-bag/order-bag.component";
import {UserProfileComponent} from "./features/user-profile/user-profile.component";

import {LoginFormComponent} from "./features/login/login.component";
import {RegisterComponent} from "./features/register/register.component";
import {ActivateAccountComponent} from "./features/activate-account/activate-account.component";


export const APP_DECLARATIONS = [
  DashboardComponent,
  NotFound404Component,
  HomePageComponent,
  CompanyCategoriesComponent,
  CompanyHomeSliderComponent,
  ImageHolderComponent,
  ContactUsComponent,
  CategoryDetailComponent,
  CategorySingleBlockComponent,
  ServiceItemSingleBlockComponent,
  ServiceItemDetailComponent,
  OrderBagItemComponent,
  PersianDate,ParticipantInfoComponent,OrderBagComponent,
  UserProfileComponent,LoginFormComponent,RegisterComponent,ActivateAccountComponent
];
