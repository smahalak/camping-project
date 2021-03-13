import { Component, OnInit } from '@angular/core';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  campData: any;
  constructor(private campService: CampingServiceService) { }

  ngOnInit(): void {
    this.getCamps();
    this.getStates();
  }
  getCamps = (): void => {
    this.campService.getCampingSites().subscribe((response: any) => {
      // console.log(response);
      this.campData = response;
    });
  };


  getStates = (): void => {
    this.campService.getStateFacility().subscribe((response: any) => {
      console.log(response);
      this.campData = response;
    });
  };

}
