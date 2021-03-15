import { Component, Input, OnInit } from '@angular/core';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() stateRef: string;
  // Added to be able to listen to state from child 'search-criteria'
  stateData!: string;
  campData: any;
  constructor(private campService: CampingServiceService) {}

  ngOnInit(): void {
    // this.getCamps();
  }
  // getCamps = (): void => {
  //   this.campService.getCampingSites().subscribe((response: any) => {
  //     // console.log(response);
  //     this.campData = response;
  //   });
  // };
  onStateSearch = (state: string) => {
    this.stateData = state;
  };
}
