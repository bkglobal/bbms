import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBillBoardComponent } from './update-bill-board.component';

describe('UpdateBillBoardComponent', () => {
  let component: UpdateBillBoardComponent;
  let fixture: ComponentFixture<UpdateBillBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBillBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBillBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
