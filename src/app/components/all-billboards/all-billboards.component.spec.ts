import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBillboardsComponent } from './all-billboards.component';

describe('AllBillboardsComponent', () => {
  let component: AllBillboardsComponent;
  let fixture: ComponentFixture<AllBillboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBillboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBillboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
