import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillBoardComponent } from './add-bill-board.component';

describe('AddBillBoardComponent', () => {
  let component: AddBillBoardComponent;
  let fixture: ComponentFixture<AddBillBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBillBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBillBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
