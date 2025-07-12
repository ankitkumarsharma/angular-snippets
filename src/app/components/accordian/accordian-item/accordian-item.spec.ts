import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianItem } from './accordian-item';

describe('AccordianItem', () => {
  let component: AccordianItem;
  let fixture: ComponentFixture<AccordianItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordianItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
