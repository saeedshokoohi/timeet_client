import {ImageVM} from "./ImageVM.model";
/**
 * Created by saeed on 12/29/2016.
 */

export class CategoryVM
{
  id: number;
  categoryName:string ;
  settingId : number;
  companyId : number;
  parentId: number;
  imagesId: number;
  coverImage:ImageVM;
  description:'توضیح ندارد';


  constructor( categoryName:string)
  {
    this.categoryName=categoryName;
  }
}
