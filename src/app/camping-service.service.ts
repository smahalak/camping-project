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

  constructor(private http: HttpClient) { }


  getCampingSites = (): any => {
    return this.http.get(this.campingSitesURL, {
      headers: {
        apikey: this.apiKey,
      }
    })
  }
}
