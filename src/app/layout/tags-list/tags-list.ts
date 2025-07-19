import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardDetailsModel } from '../../core/app.models';
import { SharedService } from '../../shared/services/shared.service';
import { CardDetails } from '../../shared/utils/card-details/card-details';
import { SearchTag } from "../search-tag/search-tag";
import { TAGS_LIST } from './core/tags-list.constant';

@Component({
  selector: 'app-tags-list',
  imports: [CommonModule, SearchTag, CardDetails],
  templateUrl: './tags-list.html',
  styleUrl: './tags-list.scss'
})
export class TagsList {
  tagsList:any = TAGS_LIST;
  router = inject(Router);
  selectedTag = inject(SharedService).selectedTag;

  filteredListFn(filteredList: CardDetailsModel[]) {
    this.tagsList = filteredList;
  }
  
  onTagFn(tag:any) {
    this.router.navigate([tag.url]);
    this.selectedTag.set(tag);
  }
}
