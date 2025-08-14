import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { SnippetsService } from '../core/snippets.service';
import { SearchSnippet } from '../search-snippet/search-snippet';
import { SnippetThumbnail } from "../snippet-thumbnail/snippet-thumbnail";

@Component({
  selector: 'app-snippets-list',
  imports: [CommonModule, SearchSnippet, SnippetThumbnail],
  templateUrl: './snippets-list.html',
  styleUrl: './snippets-list.scss'
})
export class SnippetsList implements OnInit {
  snippetsList = signal([]);
  router = inject(Router);
  selectedSnippet = inject(SharedService).selectedSnippet;
  snippetsService = inject(SnippetsService);
  sharedService = inject(SharedService);
  activateRouteList = inject(ActivatedRoute);

  ngOnInit(): void {
    this.getSnippets(); 
    console.log("Snippets List Component Initialized activate route",this.activateRouteList);
    console.log("Snippets List Component Initialized router", this.router);
  }

  filteredListFn(filteredList: any) {
    if (!filteredList || filteredList.length === 0) {
      this.snippetsList.set([]);
      return;
    }
    this.snippetsList.set(filteredList);
  }
  
  onSnippetFn(snippet:any) {
    console.log("Selected Snippet", snippet);
    this.router.config.map(route => {
      if (route.path === 'snippets/:userid/:id') {
        route.children?.map((childRoute:any) => {
          if(childRoute.data.username === snippet.username) {
            let url = `/snippets/@${snippet.username}/${encodeURIComponent(snippet.title)}/${childRoute.path}`;
            this.router.navigate([url]);
          }
        });
      }
    });
    this.selectedSnippet.set(snippet);
  }

  getSnippets(){
    this.snippetsService.getSnippets().subscribe({
      next: (res:any) => {
        this.snippetsList.set(res.data);
        this.sharedService.snippetsList.set(res.data);
      },
      error: (err) => {
        console.error("Error adding snippet", err);
        alert('Failed to add snippet. Please try again later.');
      }
    });
  }
}
