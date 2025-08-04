import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetItem } from './snippet-item';

describe('SnippetItem', () => {
  let component: SnippetItem;
  let fixture: ComponentFixture<SnippetItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnippetItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
