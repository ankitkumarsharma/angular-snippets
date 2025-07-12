import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianSameContent } from './accordian-same-content';

describe('AccordianSameContent', () => {
  let component: AccordianSameContent;
  let fixture: ComponentFixture<AccordianSameContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordianSameContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianSameContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
