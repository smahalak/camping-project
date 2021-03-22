import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css'],
})
export class FacilityComponent implements OnInit {
  @Input() facilityRef: any;
  @Input() watchListRef: any = [];
  @Output() watchListEvent = new EventEmitter<any>();
  showDetails: boolean = false;
  campsiteArray: any = [];

  constructor(
    private campService: CampingServiceService,
    private router: Router
  ) { }

  ngOnInit(): void { }


  getCampsites = (facilityId: string) => {
    this.campService.getCampsitesByFacilityId(facilityId).subscribe((response) => {
      console.log(response);
      this.campsiteArray = response.RECDATA;
      this.toggleShowDetails();
    })
  }



  toggleShowDetails = (): void => {
    this.showDetails = !this.showDetails;
  };
  emitWatchListEvent = (campsiteName: any): void => {
    this.watchListEvent.emit(campsiteName);
  };
}
