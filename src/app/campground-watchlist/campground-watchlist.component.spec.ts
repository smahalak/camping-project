import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampgroundWatchlistComponent } from './campground-watchlist.component';

describe('CampgroundWatchlistComponent', () => {
  let component: CampgroundWatchlistComponent;
  let fixture: ComponentFixture<CampgroundWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampgroundWatchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampgroundWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
