import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { secret } from './secrets';

@Injectable({
  providedIn: 'root',
})
export class CampingServiceService {
  apiKey: string = secret.api_key;
  facilityId: string;
  campsiteId: string;

  baseURL: string = 'https://ridb.recreation.gov/api/v1'

  selectStateName: string;

  watchList: any[] = [];

  constructor(private http: HttpClient) { }

  getFacilitiesByState = (state: string): any => {
    let params: any = {
      limit: '10',
      state: state,
      apikey: this.apiKey,
    };
    return this.http.get(`${this.baseURL}/facilities`, { params: params });
  };

  getCampsitesByFacilityId = (facilityId: string): any => {
    let params: any = {

      apikey: this.apiKey,
    };
    return this.http.get(`${this.baseURL}/facilities/${facilityId}/campsites`, { params: params });
  };


  getCampsiteByCampsiteId = (campsiteId: string) => {
    return this.http.get(`${this.baseURL}/campsites/${campsiteId}`, {
      headers: {
        apikey: this.apiKey,
      },
    });
  }

  getStateFacility = (): any => {
    return this.http.get(`${this.baseURL}/facilties`, {
      headers: {
        apikey: this.apiKey,
      },
    });
  };

  getWatchList = (): any => {
    return this.watchList;
  };

  toggleWatchList = (campsiteName: any) => {
    let index = this.watchList.findIndex((item) => {
      return item.CampsiteID === campsiteName.CampsiteID;
    });
    if (index === -1) {
      this.watchList.push(campsiteName);
    } else {
      this.watchList.splice(index, 1);
    }

    console.log(this.watchList);
  };
}
