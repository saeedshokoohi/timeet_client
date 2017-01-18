import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
import {CacheUtilService} from "./services/cache-util/CacheUtilService";
import {AuthService} from "./services/auth/AuthService";
import {AuthGuard} from "./services/auth/AuthGuard";

export const APP_PROVIDERS = [
  UserActions,
  UserService,
  CookieService,
  CacheService,
  CacheUtilService,
  AuthService,
  AuthGuard

];
