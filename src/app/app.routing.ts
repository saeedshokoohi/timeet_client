/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard.component';
import { NotFound404Component } from './not-found404.component';
import {HomePageComponent} from "./features/home-page/home-page.component";
import {CategoryDetailComponent} from "./features/category-detail/category-detail.component";
import {ServiceItemDetailComponent} from "./features/service-item-detail/service-item-detail.component";
import {OrderBagItemComponent} from "./features/order-bag-item/order-bag-item.component";
import {OrderBagComponent} from "./features/order-bag/order-bag.component";
import {UserProfileComponent} from "./features/user-profile/user-profile.component";
import {AuthGuard} from "./services/auth/AuthGuard";
import {LoginFormComponent} from "./features/login/login.component";
import {RegisterComponent} from "./features/register/register.component";
import {ActivateAccountComponent} from "./features/activate-account/activate-account.component";

export const routes:Routes = [
  //{path: '', component: DashboardComponent, pathMatch: 'full'},
  //{path: 'lazy', loadChildren: './features/lazy/index#LazyModule'},
  {path: 'sync', loadChildren: './features/sync/index#SyncModule?sync=true'},
  {path:':baseurl', component: HomePageComponent},
  {path:':baseurl/home',component: HomePageComponent},
  {path:':baseurl/categorydetail/:id',component:CategoryDetailComponent},
  {path:':baseurl/serviceitemdetail/:id',component:ServiceItemDetailComponent},
  {path:':baseurl/orderbagitem/:serviceitemid/:timesessionid',component:OrderBagItemComponent},
  {path:':baseurl/orderbag',component:OrderBagComponent},
  {path:':baseurl/login',component:LoginFormComponent},
  {path:':baseurl/register',component:RegisterComponent},
  {path:':baseurl/activate/:login',component:ActivateAccountComponent},
  {path:':baseurl/userprofile',component:UserProfileComponent,canActivate: [AuthGuard]},

  {path: '**', component: NotFound404Component}
];
