import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampingServiceService } from '../camping-service.service';
@Component({
  selector: 'app-campsite-details',
  templateUrl: './campsite-details.component.html',
  styleUrls: ['./campsite-details.component.css'],
})
export class CampsiteDetailsComponent implements OnInit {
  @Output() watchListEvent = new EventEmitter<any>();
  @Input() campRef: any;
  @Input() watchListRef: any = [];
  campsite: any;
  constructor(
    private route: ActivatedRoute,
    private campService: CampingServiceService
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      let id: string = response.get('id');
      if (!id) {
        console.log('impliment logic to handle no id');
      } else {
        this.campService.getCampsiteByCampsiteId(id).subscribe((data) => {
          console.log(data);
          this.campsite = data[0];
          // console.log(data[0].ATTRIBUTES);
          // this.attributes = data[0].ATTRIBUTES;
          // return (this.campsiteAttributeArray = data);
          // console.log(this.campsiteAttributeArray);
        });
      }
    });
  }
  emitWatchListEvent = (campsiteName: any): void => {
    this.watchListEvent.emit(campsiteName);
  };
  checkWatchList = (campsiteName: any): boolean => {
    return this.watchListRef.some((item) => {
      return item.CampsiteID === campsiteName.CampsiteID;
    });
  };
}