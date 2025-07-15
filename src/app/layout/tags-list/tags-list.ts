import { Component, inject } from '@angular/core';
import { TAGS_LIST } from './core/tags-list.constant';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { SearchTag } from "../search-tag/search-tag";  
import { CardDetails } from '../../shared/utils/card-details/card-details';
import { SharedService } from '../../shared/services/shared.service';
import { CardDetailsModel } from '../../core/app.models';

@Component({
  selector: 'app-tags-list',
  imports: [CommonModule, SearchTag, CardDetails],
  templateUrl: './tags-list.html',
  styleUrl: './tags-list.scss'
})
export class TagsList {
  tagsList:any = TAGS_LIST;
  showComponentContainer = inject(SharedService);
  showTagContainer = inject(SharedService);
  router = inject(Router);
  selectedTag = inject(SharedService).selectedTag;

  filteredListFn(filteredList: CardDetailsModel[]) {
    this.tagsList = filteredList;
  }
  
  onTagFn(tag:any) {
    this.showComponentContainer.showComponentContainer.set(true);
    this.showTagContainer.showTagContainer.set(false);
    this.router.navigate([tag.url]);
    this.selectedTag.set(tag);
  }
}
