import {ChangeDetectorRef, Component, OnDestroy, OnInit,Input,OnChanges} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from "../../../../node_modules/ng2-translate/src/translate.service";
import {CompanyService} from "../../services/company-service/company-service";
import {CompanyVM} from "../../models/CompanyVM.model";
import {CategoryService} from "../../services/category/category.service";
import {CategoryVM} from "../../models/CategoryVM.model";
import {ImageVM} from "../../models/ImageVM.model";


@Component({
  selector: 'image-holder',
  templateUrl: 'image-holder.component.html',
  styleUrls:['image-holder.style.css'],
  providers: [CategoryService, CompanyService]

})

export class ImageHolderComponent implements OnDestroy, OnInit,OnChanges {

  @Input('image') image:ImageVM;
  @Input('image-class') imgClass:string;
  private base64Image:string;
  private noImage:boolean;
  constructor(

              public route:ActivatedRoute,
              public router:Router) {

this.noImage=false;
  }

  ngOnDestroy():void {
  }

  ngOnInit():void {



  }

  ngOnChanges(changes):void {
    if (changes.image && this.image!=null && this.image!=undefined ) {
      this.base64Image = 'data:' + this.image.fileDataContentType + ';base64,' + this.image.fileData;
    this.noImage=false;
    }
    else
    {
      this.noImage=true;

    }
  }
}
