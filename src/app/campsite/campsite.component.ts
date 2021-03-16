import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-campsite',
  templateUrl: './campsite.component.html',
  styleUrls: ['./campsite.component.css'],
})
export class CampsiteComponent implements OnInit {
  @Input() stateObjectRef: any;
  @Input() campsiteIdRef: any;
  @Input() campsiteArray: any[];
  @Output() showDetailEvent = new EventEmitter<any>();
  @Output() showCampsiteIdEvent = new EventEmitter<any>();
  stateName: string;
  states: any;
  showDetails: boolean = false;
  showCampsite: boolean = false;

  constructor(
    private campService: CampingServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  emitShowDetailEvent = (stateObjectRef: any) => {
    this.showDetailEvent.emit(stateObjectRef);
  };
  emitCampsiteIdEvent = (campsiteIdRef: any) => {
    console.log(campsiteIdRef);
    this.showCampsiteIdEvent.emit(campsiteIdRef);
  };

  setShowDetails = (): void => {
    this.showDetails = !this.showDetails;
    // console.log(this.stateObjectRef);
    // console.log(this.showDetails);
  };
  setShowCampsiteId = (): void => {
    this.showCampsite = !this.showCampsite;

    // console.log(this.showDetails);
  };
}
