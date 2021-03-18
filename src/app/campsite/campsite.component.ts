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
  @Output() showCampsiteIdEvent = new EventEmitter<string>();
  stateName: string;
  states: any;
  showDetails: boolean = false;
  showCampsite: boolean = false;


  constructor(
    private campService: CampingServiceService,
    private router: Router
  ) { }

  ngOnInit(): void { }

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


  test = (id: string) => {
    this.emitCampsiteIdEvent(id);
  };
}
