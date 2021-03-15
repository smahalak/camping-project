import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { secret } from './secrets';

@Injectable({
  providedIn: 'root',
})
export class CampingServiceService {
  apiKey: string = secret.api_key;
  campingSitesURL: string = 'https://ridb.recreation.gov/api/v1/campsites';
  //endpoint will return campingsites

  facilityURL: string = 'https://ridb.recreation.gov/api/v1/facilities';
  //using to get states

  selectStateName: string;

  constructor(private http: HttpClient) {}

  getCampingState = (state: string): any => {
    let params: any = {
      limit: '10',
      state: state,
      apikey: this.apiKey,
    };
    return this.http.get(this.facilityURL, { params: params });
  };

  getCampingSites = (state: string): any => {
    let params: any = {
      limit: '10',
      state: state,
      apikey: this.apiKey,
    };
    return this.http.get(this.campingSitesURL, { params: params });
  };

  getStateFacility = (): any => {
    return this.http.get(this.facilityURL, {
      headers: {
        apikey: this.apiKey,
      },
    });
  };
}
