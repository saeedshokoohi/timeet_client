/**
 * Created by saeed on 1/12/2017.
 */
import { Injectable }     from '@angular/core';
import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

@Injectable()
export class CacheUtilService
{
  private BUILD_VERSION='timeet_app';
  constructor(private _cacheService: CacheService )
  {
    this.init();
  }
   init() {

    //set global prefix as build version
    this._cacheService.setGlobalPrefix(this.BUILD_VERSION);

 /*
    //remove all data from cache with tag "tag"
    this._cacheService.removeTag('tag');

    //remove all from cache
    this._cacheService.removeAll();

    //get all data related to tag "tag" :
    // {'key' => 'key data', ...}
    this._cacheService.getTagData('tag');*/

    //change storage (returns new instance of service with needed storage)
    this._cacheService.useStorage(CacheStoragesEnum.LOCAL_STORAGE);

  }
  storeInCache(key,data:any):boolean
  {
    //put some data to cache "forever"
    //returns true is data was cached successfully, otherwise - false
    let result: boolean = this._cacheService.set(key, data);
 /*   //put some data to cache for 5 minutes (maxAge - in seconds)
    this._cacheService.set('key', ['some data'], {maxAge: 5 * 60});

    //put some data to cache for 1 hour (expires - timestamp with milliseconds)
    this._cacheService.set('key', {'some': 'data'}, {expires: Date.now() + 1000 * 60 * 60});

    //put some data to cache with tag "tag"
    this._cacheService.set('key', 'some data', {tag: 'tag'});*/
    return result;
  }
  getFromCach(key):any
  {
    //get some data by key, null - if there is no data or data has expired
    let data: any = this._cacheService.get(key);

    return data;
  }
  exists(key):boolean
  {
    //check if data exists in cache
    let exists: boolean = this._cacheService.exists(key);
    return exists;
  }
  removeFromCache(key)
  {
    this._cacheService.remove(key);
  }

}
