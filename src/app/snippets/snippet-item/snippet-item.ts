import { Component, inject, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { Snippet } from '../core/snippets.model';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-snippet-item',
  imports: [],
  templateUrl: './snippet-item.html',
  styleUrl: './snippet-item.scss'
})
export class SnippetItem {
  router = inject(Router);
  selectedSnippet:WritableSignal<Snippet> = inject(SharedService).selectedSnippet; 

  onBackFn() {
    this.router.navigate(['/']);
  }
}
