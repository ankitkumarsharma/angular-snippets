import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardDetailsModel } from '../../core/app.models';
import { SharedService } from '../../shared/services/shared.service';
import { CardDetails } from '../../shared/utils/card-details/card-details';
import { SearchSnippet } from '../search-snippet/search-snippet';
import { SNIPPETS_LIST } from './core/snippets-list.constant';

@Component({
  selector: 'app-snippets-list',
  imports: [CommonModule, SearchSnippet, CardDetails],
  templateUrl: './snippets-list.html',
  styleUrl: './snippets-list.scss'
})
export class SnippetsList {
  snippetsList:any = SNIPPETS_LIST;
  router = inject(Router);
  selectedSnippet = inject(SharedService).selectedSnippet;

  filteredListFn(filteredList: CardDetailsModel[]) {
    this.snippetsList = filteredList;
  }
  
  onSnippetFn(snippet:any) {
    this.router.navigate([snippet.url]);
    this.selectedSnippet.set(snippet);
  }
}
