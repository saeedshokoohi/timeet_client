import {ChangeDetectorRef, Component, OnDestroy, OnInit,Input,OnChanges,ChangeDetectionStrategy,ApplicationRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import {CacheUtilService} from "../../services/cache-util/CacheUtilService";



@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.style.css'],
  providers: [ CacheUtilService]

})

export class UserProfileComponent implements OnDestroy, OnInit,OnChanges {
  baseurl:string = '';



  constructor(private ref:ChangeDetectorRef,
              public route:ActivatedRoute,
              public router:Router,
              private _cacheUtil:CacheUtilService) {


  }

  ngOnDestroy():void {
  }

  ngOnInit():void {
    let parent = this;

    this.route.params.subscribe(params => {
      debugger;
      parent.baseurl = params['baseurl'];


    });
  }

  ngOnChanges(changes):void {


  }


}
