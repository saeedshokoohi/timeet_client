/**
 * Created by saeed on 12/29/2016.
 */
export class CompanyVM
{
  id: number;
  title: string;
  description: string;
  phoneNumber: string;
  activityType: string;
  webSiteUrl: string;
  keyUrl: string;
  settingId:number;
  agreementId:number;
  locationId: number;
  location;
  tags
  agreement;
  setting;
  constructor(title:string)
  {
    this.title=title;
  }
}
