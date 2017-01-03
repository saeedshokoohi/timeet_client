/**
 * Created by saeed on 1/3/2017.
 */
export class ServiceItemVM {
  id:number;
  itemTitle:string;
  description:string;
  minPreReserveTime:number;
  maxPreReserveTime:number;
  hasWaitingList:boolean;
  mustGetParticipantInfo:boolean;
  canBeCanceled:boolean;
  minPreCancelTime:number;
  paymentType;
  serviceType;
  categoryId:number;
}
