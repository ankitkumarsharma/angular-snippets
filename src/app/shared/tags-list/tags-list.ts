import { Component, inject } from '@angular/core';
import { TAGS_LIST } from './core/tags-list.constant';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { SearchTag } from "../search-tag/search-tag";
import { TagModel } from './core/tags-list.model';

@Component({
  selector: 'app-tags-list',
  imports: [CommonModule, SearchTag],
  templateUrl: './tags-list.html',
  styleUrl: './tags-list.scss'
})
export class TagsList {
  tagsList:TagModel[] = TAGS_LIST;
  showComponentContainer = inject(SharedService);
  showTagContainer = inject(SharedService);
  router = inject(Router);
  selectedTag = inject(SharedService).selectedTag;

  filteredListFn(filteredList: TagModel[]) {
    this.tagsList = filteredList;
  }
  
  onTagFn(tag:any) {
    this.showComponentContainer.showComponentContainer.set(true);
    this.showTagContainer.showTagContainer.set(false);
    this.router.navigate([tag.url]);
    this.selectedTag.set(tag);
  }
}
