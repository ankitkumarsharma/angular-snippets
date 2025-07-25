import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSnippet } from './search-snippet';

describe('SearchSnippet', () => {
  let component: SearchSnippet;
  let fixture: ComponentFixture<SearchSnippet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSnippet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSnippet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
