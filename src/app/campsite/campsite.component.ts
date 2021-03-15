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
  @Input() stateDetailRef: any;
  @Output() showDetailEvent = new EventEmitter<string>();
  @Output() showAttributeEvent = new EventEmitter<string>();
  stateName: string;
  states: any;
  showDetails: boolean = false;
  constructor(
    private campService: CampingServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  emitShowDetailEvent = (stateObjectRef: any) => {
    this.showDetailEvent.emit();
  };
  emitDetailEvent = (stateDetailRef: any) => {
    this.showAttributeEvent.emit();
  };

  setShowDetails = (): void => {
    this.showDetails = !this.showDetails;
    console.log(this.showDetails);
  };
}
