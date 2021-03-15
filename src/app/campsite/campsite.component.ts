import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campsite',
  templateUrl: './campsite.component.html',
  styleUrls: ['./campsite.component.css'],
})
export class CampsiteComponent implements OnInit {
  @Input() stateRef: string;
  stateName: string;
  constructor() {}

  ngOnInit(): void {}
}
