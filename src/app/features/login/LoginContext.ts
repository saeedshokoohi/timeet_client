/**
 * Created by saeed on 1/15/2017.
 */
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {UserVM} from "../../models/UserVM";
export class LoginContext extends BSModalContext {
  public userName: string;
  public password: string;
  public account:UserVM;
  public onclose;
}
