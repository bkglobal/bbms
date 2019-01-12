import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBillboardComponent } from './my-billboard.component';

describe('MyBillboardComponent', () => {
  let component: MyBillboardComponent;
  let fixture: ComponentFixture<MyBillboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBillboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
