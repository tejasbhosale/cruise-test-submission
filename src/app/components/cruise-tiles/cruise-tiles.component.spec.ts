import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseTilesComponent } from './cruise-tiles.component';

describe('CruiseTilesComponent', () => {
  let component: CruiseTilesComponent;
  let fixture: ComponentFixture<CruiseTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruiseTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
