/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard.component';
import { NotFound404Component } from './not-found404.component';
import {HomePageComponent} from "./features/home-page/home-page.component";

export const routes:Routes = [
  //{path: '', component: DashboardComponent, pathMatch: 'full'},
  //{path: 'lazy', loadChildren: './features/lazy/index#LazyModule'},
  {path: 'sync', loadChildren: './features/sync/index#SyncModule?sync=true'},
  {path: ':baseurl',component: HomePageComponent},
  {path: ':baseurl/home',component: HomePageComponent},
  {path: '**', component: NotFound404Component}
];
