import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampsiteDetailsComponent } from './campsite-details.component';

describe('CampsiteDetailsComponent', () => {
  let component: CampsiteDetailsComponent;
  let fixture: ComponentFixture<CampsiteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampsiteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampsiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
