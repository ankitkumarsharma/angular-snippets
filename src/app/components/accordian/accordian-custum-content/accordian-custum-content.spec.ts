import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianCustumContent } from './accordian-custum-content';

describe('AccordianCustumContent', () => {
  let component: AccordianCustumContent;
  let fixture: ComponentFixture<AccordianCustumContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordianCustumContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianCustumContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
