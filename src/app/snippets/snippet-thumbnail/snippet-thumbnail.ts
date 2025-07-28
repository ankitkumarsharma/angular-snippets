import { Component, input } from '@angular/core';
import { Snippet } from '../core/snippets.model';
import { SNIPPETS_CONSTANTS } from '../core/snippets.constant';

@Component({
  selector: 'app-snippet-thumbnail',
  imports: [],
  templateUrl: './snippet-thumbnail.html',
  styleUrl: './snippet-thumbnail.scss'
})
export class SnippetThumbnail {
  data = input<Snippet>(SNIPPETS_CONSTANTS.defaultSnippet);
  showImg = input<boolean>(false);
  showTags = input<boolean>(false);
}
