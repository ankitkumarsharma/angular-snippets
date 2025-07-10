import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTag } from './search-tag';

describe('SearchTag', () => {
  let component: SearchTag;
  let fixture: ComponentFixture<SearchTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
