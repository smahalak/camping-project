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
  stateFacilityInfo: any;
  attributes: any;
  facilityArray: any[];
  campsiteIdInfo: any;
  campsiteAttributesArray: any[];
  showActivities: boolean = false;



  constructor(
    private campService: CampingServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //takes queryparm from onStateSearch and if State is selected grabs state data from service with state as a queryparm
    this.route.queryParamMap.subscribe((response) => {
      //console.log(response);
      let state: string | null = response.get('state');
      if (state) {
        this.getCampingFacilities(state);
        this.getAttributes(state);
      }
    });
  }

  getCampingFacilities = (state: string) => {
    this.campService.getCampingState(state).subscribe((data) => {
      //console.log(data);
      this.stateFacilityInfo = data;
      console.log(this.stateFacilityInfo);
      this.facilityArray = this.stateFacilityInfo.RECDATA;
      console.log(this.facilityArray);
      //console.log(this.facilityArray);

      //stateFacilityInfo now used in home html which will pass to child campingsite
    });
  };
  getAttributes = (stateObjectRef: any) => {
    //console.log(stateObjectRef);
    let facilityid: string = stateObjectRef.FacilityID;
    console.log(facilityid);
    this.campService.getCampingSites(facilityid).subscribe((response) => {
      console.log(response);
      this.campsiteIdInfo = response.RECDATA;

      // console.log(this.attributes);
    });
  };
  getCampsiteId = (campsiteIdRef: string) => {
    //console.log(stateObjectRef);
    let campsiteId: string = campsiteIdRef;
    console.log('in the getcampsiteID method');
    this.campService.getSelectedCampsiteId(campsiteId).subscribe((response) => {
      console.log(response);
      console.log(campsiteId);
      //filter method on response
      this.campsiteAttributesArray = response.RECDATA;
      this.setShowActivities();
      console.log(this.campsiteAttributesArray);
    });
  };

  setShowActivities = (): void => {
    this.showActivities = !this.showActivities;
    console.log(this.showActivities);
  };

  findAttributes = (campsiteAttributesArray: any, type: string): boolean => {
    return campsiteAttributesArray.some((item) => {
      return item.AttributeName === type;
    })
  }


  //looks at search-criteria form that was submitted and stores result in query parm which is used onit
  onStateSearch = (state: string) => {
    this.router.navigate(['/home'], {
      queryParams: {
        state: state,
      },
    });
  };




}
