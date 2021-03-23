import { Component, OnInit } from '@angular/core';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-campground-watchlist',
  templateUrl: './campground-watchlist.component.html',
  styleUrls: ['./campground-watchlist.component.css'],
})
export class CampgroundWatchlistComponent implements OnInit {
  watchList: any[] = [];
  campsiteAttributesArray: any[];
  showActivities: boolean = false;
  constructor(private campService: CampingServiceService) { }

  ngOnInit(): void {
    this.getAndSetWatchList();
  }

  getAndSetWatchList = (): void => {
    this.watchList = this.campService.getWatchList();
  };

  onWatch = (campsiteName: any): void => {
    this.campService.toggleWatchList(campsiteName);
    this.getAndSetWatchList();
  };
  getCampsiteId = (campsiteIdRef: string) => {
    //console.log(stateObjectRef);
    let campsiteId: string = campsiteIdRef;
    console.log('in the getcampsiteID method');
    this.campService.getCampsitesByFacilityId(campsiteId).subscribe((response) => {
      console.log(Response);
      console.log(campsiteId);
      this.campsiteAttributesArray = response.RECDATA;
      this.setShowActivities();
      // array contains attribute after clicking popup.
      // console.log(this.campsiteAttributesArray);
    });
  };
  setShowActivities = (): void => {
    this.showActivities = !this.showActivities;
    console.log(this.showActivities);
  };
  findAttributes = (campsiteAttributesArray: any, type: string): boolean => {
    return campsiteAttributesArray.some((item) => {
      return item.AttributeName === type;
    });
  };
}
