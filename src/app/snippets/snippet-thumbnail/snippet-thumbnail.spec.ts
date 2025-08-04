import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetThumbnail } from './snippet-thumbnail';

describe('SnippetThumbnail', () => {
  let component: SnippetThumbnail;
  let fixture: ComponentFixture<SnippetThumbnail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetThumbnail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnippetThumbnail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
