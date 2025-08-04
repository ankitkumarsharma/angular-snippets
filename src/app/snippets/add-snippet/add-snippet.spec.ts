import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSnippet } from './add-snippet';

describe('AddSnippet', () => {
  let component: AddSnippet;
  let fixture: ComponentFixture<AddSnippet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSnippet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSnippet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
