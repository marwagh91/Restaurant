import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatAdminComponent } from './plat-admin.component';

describe('PlatAdminComponent', () => {
  let component: PlatAdminComponent;
  let fixture: ComponentFixture<PlatAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
