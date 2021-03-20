import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-campsite',
  templateUrl: './campsite.component.html',
  styleUrls: ['./campsite.component.css'],
})
export class CampsiteComponent implements OnInit {
  @Input() campsiteIdRef: any;

  @Output() showCampsiteIdEvent = new EventEmitter<string>();

  @Input() watchListRef: any = [];
  @Input() camp: any;
  @Output() watchListEvent = new EventEmitter<any>();

  //stateName: string;
  //states: any;
  //showCampsite: boolean = false;

  constructor(
    private campService: CampingServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  emitCampsiteIdEvent = (campsiteIdRef: string) => {
    this.showCampsiteIdEvent.emit(campsiteIdRef);
  };

  test = (id: string) => {
    this.emitCampsiteIdEvent(id);
  };

  emitWatchListEvent = (campsiteName: any): void => {
    this.watchListEvent.emit(campsiteName);
  };

  checkWatchList = (campsiteName: any): boolean => {
    return this.watchListRef.some((item) => {
      return item.CampsiteID === campsiteName.CampsiteID;
    });
  };
}
