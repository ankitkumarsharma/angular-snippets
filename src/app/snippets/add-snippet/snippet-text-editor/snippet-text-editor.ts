import { Component, inject } from '@angular/core';
import { SnippetsService } from '../../core/snippets.service';

@Component({
  selector: 'app-snippet-text-editor',
  imports: [],
  templateUrl: './snippet-text-editor.html',
  styleUrl: './snippet-text-editor.scss'
})
export class SnippetTextEditor {
  editorContent: string = '';
  snippetsService = inject(SnippetsService);

  applyStyle(style: string): void {
    document.execCommand(style, false);
    this.updateContent();
  }

  onInput(event: Event): void {
    this.updateContent();
  }

  onBlur(event: Event): void {
    this.updateContent();
  }

  updateContent(){
    const editor = document.querySelector('.editor') as HTMLElement;
    this.editorContent = editor.innerHTML;
    this.snippetsService.editorContent.set(this.editorContent);
  }

}
