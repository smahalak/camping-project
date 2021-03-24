import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampingServiceService } from '../camping-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-campsite-details',
  templateUrl: './campsite-details.component.html',
  styleUrls: ['./campsite-details.component.css'],
})
export class CampsiteDetailsComponent implements OnInit {
  watchListRef: any = [];

  campsite: any;

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private campService: CampingServiceService
  ) { }
  ngOnInit(): void {
    this.watchListRef = this.campService.getWatchList();

    this.route.paramMap.subscribe((response) => {
      let id: string = response.get('id');
      if (!id) {
        console.log('impliment logic to handle no id');
      } else {
        this.campService.getCampsiteByCampsiteId(id).subscribe((data) => {
          // console.log(data);
          this.campsite = data[0];
        });
      }
    });
  }

  emitWatchListEvent = (campsiteName: any): void => {
    // console.log(campsiteName);
    this.campService.toggleWatchList(campsiteName);
    this.watchListRef = this.campService.getWatchList();
  };
  checkWatchList = (campsiteName: any): boolean => {
    return this.watchListRef.some((item) => {
      return item.CampsiteID === campsiteName.CampsiteID;
    });
  };

  // allows user to go back when clicking X
  backClick = () => {
    this._location.back();
  }


}