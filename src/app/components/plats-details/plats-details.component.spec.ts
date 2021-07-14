import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsDetailsComponent } from './plats-details.component';

describe('PlatsDetailsComponent', () => {
  let component: PlatsDetailsComponent;
  let fixture: ComponentFixture<PlatsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
