import { Component, OnInit } from '@angular/core';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-campground-watchlist',
  templateUrl: './campground-watchlist.component.html',
  styleUrls: ['./campground-watchlist.component.css']
})
export class CampgroundWatchlistComponent implements OnInit {



  watchList: any[] = [];


  constructor(private campService: CampingServiceService) { }

  ngOnInit(): void {
    this.getAndSetWatchList();
  }


  getAndSetWatchList = (): void => {
    this.watchList = this.campService.getWatchList();
  }


  onWatch = (campsiteName: any): void => {


    this.campService.toggleWatchList(campsiteName);
    this.getAndSetWatchList();
  }

}
