import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  states: any;
  state: string | null = null;
  attributes: any;
  facilityArray: any[];
  campsiteIdInfo: any;
  campsiteAttributesArray: any[];
  showActivities: boolean = false;


  watchList: any = []

  constructor(
    private campService: CampingServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //takes queryparm from onStateSearch and if State is selected grabs state data from service with state as a queryparm
    this.route.queryParamMap.subscribe((response) => {
      //console.log(response);
      let state: string = response.get('state');
      if (state) {
        this.getCampingFacilities(state);
      }
    });
    this.getAndSetWatchList();
  }

  getCampingFacilities = (state: string) => {
    this.campService.getFacilitiesByState(state).subscribe((data) => {
      this.facilityArray = data.RECDATA;
      console.log(this.facilityArray);
    });
  };


  //looks at search-criteria form that was submitted and stores result in query parm which is used onit
  onStateSearch = (state: string) => {
    this.router.navigate(['/home'], {
      queryParams: {
        state: state,
      },
    });
  };



  onWatch = (campsiteName: any): void => {
    console.log('hey   onWatch');

    this.campService.toggleWatchList(campsiteName);
    this.getAndSetWatchList();
  }

  getAndSetWatchList = (): void => {
    console.log('hey getAndSetWatchList ');
    this.watchList = this.campService.getWatchList();
  }

}
