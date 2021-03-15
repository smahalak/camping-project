import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-campsite',
  templateUrl: './campsite.component.html',
  styleUrls: ['./campsite.component.css'],
})
export class CampsiteComponent implements OnInit {
  @Input() stateObjectRef: any;
  stateName: string;
  states: any;

  constructor(private campService: CampingServiceService, private router: Router) { }

  ngOnInit(): void { }


  // showSelectedState = (state: ) => {
  //   console.log(state);
  //   this.router.navigate([`/home/${state}`]);
  // }


}
