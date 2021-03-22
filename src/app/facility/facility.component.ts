import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css'],
})
export class FacilityComponent implements OnInit {
  @Input() stateObjectRef: any;
  @Input() watchListRef: any = [];
  @Output() showCampsiteIdEvent = new EventEmitter<string>();
  @Input() campsiteArray: any[];
  // passing event emitter from facility to home
  @Output() showDetailEvent = new EventEmitter<any>();
  @Output() watchListEvent = new EventEmitter<any>();
  //stateName: string;
  //states: any;
  showDetails: boolean = false;

  constructor(
    private campService: CampingServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  // Method that is being used with event emitter
  emitShowDetailEvent = (stateObjectRef: any) => {
    this.showDetailEvent.emit(stateObjectRef);
    this.setShowDetails();
  };
  emitCampsiteIdEvent = (campsiteIdRef: string) => {
    this.showCampsiteIdEvent.emit(campsiteIdRef);
  };

  setShowDetails = (): void => {
    this.showDetails = !this.showDetails;
  };
  emitWatchListEvent = (campsiteName: any): void => {
    this.watchListEvent.emit(campsiteName);
  };
}
