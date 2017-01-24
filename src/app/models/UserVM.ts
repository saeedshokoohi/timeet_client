/**
 * Created by saeed on 12/29/2016.
 */

export class UserVM {
  id:number;
  login:string;
  firstName:string;
  lastName:string;
  email:string;
  activated:boolean;
  langKey:string;
  authorities:string[];
  phoneNumber:string;
  constructor() {
this.activated=false;
    this.langKey='en';
  }

}
