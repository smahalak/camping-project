import { Component, OnInit } from '@angular/core';
import { CampingServiceService } from '../camping-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  clicked: string = 'home';
  home: string = 'home';
  favorites: string = 'favorites';
  supplies: string = 'supplies';
  recipes: string = 'recipes';
  about: string = 'about';

  constructor(private campingService: CampingServiceService) {}

  ngOnInit(): void {}
  changeClicked = (tab: string): void => {
    this.campingService.setClicked(tab);
  };
  checkClicked = (tab: string): boolean => {
    return this.campingService.getClicked() === tab;
  };
}
