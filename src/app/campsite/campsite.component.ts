import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-campsite',
  templateUrl: './campsite.component.html',
  styleUrls: ['./campsite.component.css'],
})
export class CampsiteComponent implements OnInit {
  @Input() watchListRef: any = [];
  @Input() campRef: any;

  @Output() watchListEvent = new EventEmitter<any>();

  constructor(
    private campService: CampingServiceService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  goToCampsiteDetails = (campsiteId: string) => {
    this.router.navigate([`/campsite-details/${campsiteId}`]);
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
