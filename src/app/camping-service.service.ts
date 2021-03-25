import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from
  'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CampingServiceService {

  facilityId: string;
  campsiteId: string;

  baseURL: string = environment.apiBaseUrl

  selectStateName: string;
  clicked: string = 'home';
  watchList: any[] = [];

  constructor(private http: HttpClient) { }

  getFacilitiesByState = (state: string): any => {
    let params: any = {
      state: state,
    };
    return this.http.get(`${this.baseURL}/facilities-by-state`, { params: params });
  };

  getCampsitesByFacilityId = (facilityId: string): any => {
    return this.http.get(`${this.baseURL}/campsites-by-facility-id/${facilityId}`);
  };

  getCampsiteByCampsiteId = (campsiteId: string) => {
    return this.http.get(`${this.baseURL}/campsite-by-campsite-id/${campsiteId}`
    );
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
  setClicked = (tab: string) => {
    this.clicked = tab;
  };
  getClicked = () => {
    return this.clicked;
  };
}
