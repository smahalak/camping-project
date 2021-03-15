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

  state: string[] = [
    'AL',
    'AK',
    'AS',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FM',
    'FL',
    'GA',
    'GU',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MH',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'MP',
    'OH',
    'OK',
    'OR',
    'PW',
    'PA',
    'PR',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VI',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];


  constructor(private http: HttpClient) {}





    return this.http.get(this.facilityURL, {
      headers: { apikey: this.apiKey },
      params: params,
    });

  };

  getCampingSites = (): any => {
    return this.http.get(this.campingSitesURL, {
      headers: {
        apikey: this.apiKey,
      },
    });
  };

  getStateFacility = (): any => {
    return this.http.get(this.facilityURL, {
      headers: {
        apikey: this.apiKey,
      },
    });
  };


  getStates = () => {};

