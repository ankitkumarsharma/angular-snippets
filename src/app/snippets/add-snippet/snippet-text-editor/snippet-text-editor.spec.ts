import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetTextEditor } from './snippet-text-editor';

describe('SnippetTextEditor', () => {
  let component: SnippetTextEditor;
  let fixture: ComponentFixture<SnippetTextEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetTextEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnippetTextEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
