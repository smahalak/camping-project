import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesdivComponent } from './suppliesdiv.component';

describe('SuppliesdivComponent', () => {
  let component: SuppliesdivComponent;
  let fixture: ComponentFixture<SuppliesdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliesdivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
