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
  stateInfo: any;

  constructor(private campService: CampingServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //takes queryparm from onStateSearch and if State is selected grabs state data from service with state as a queryparm
    this.route.queryParamMap.subscribe((response) => {
      console.log(response)
      let state: string | null = response.get('state');
      if (state) {
        this.campService.getCampingState(state).subscribe((data) => {
          console.log(data);
          this.stateInfo = data;
          //stateInfo now used in home html which will pass to chile campingsite
        })
      }
    })
  }

  getAndSetState = (state: any): void => {
    this.campService.getCampingState(state).subscribe((response: any) => {
      this.states = response;
      console.log(response);
    })
  }

  //looks at search-criteria form that was submitted and stores result in query parm which is used onit
  onStateSearch = (state: string) => {
    this.router.navigate(["/home"],
      {
        queryParams: {
          state: state
        }
      }
    )
    // this.campService.getCampingState(state).subscribe((response) => {
    //   console.log(response);
    //   this.stateInfo = response;
    // })
  };


}
