import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { secret } from './secrets';

@Injectable({
  providedIn: 'root'
})
export class CampingServiceService {


  apiKey: string = secret.api_key;
  campingSitesURL: string = "https://ridb.recreation.gov/api/v1/campsites";
  //endpoint will return campingsites

  facilityURL: string = "https://ridb.recreation.gov/api/v1/facilities";
  //using to get states

  constructor(private http: HttpClient) { }


  getCampingSites = (): any => {
    return this.http.get(this.campingSitesURL, {
      headers: {
        apikey: this.apiKey,
      }
    })
  }


  getStateFacility = (): any => {
    return this.http.get(this.facilityURL, {
      headers: {
        apikey: this.apiKey,
      }
    })
  }

}
