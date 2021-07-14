import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefAdminComponent } from './chef-admin.component';

describe('ChefAdminComponent', () => {
  let component: ChefAdminComponent;
  let fixture: ComponentFixture<ChefAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
