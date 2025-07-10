import { Component, inject, output } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { TagModel } from '../tags-list/core/tags-list.model';

@Component({
  selector: 'app-search-tag',
  imports: [],
  templateUrl: './search-tag.html',
  styleUrl: './search-tag.scss'
})
export class SearchTag {
  sharedService = inject(SharedService);
  filteredListFn = output<TagModel[]>();
  
  filterResults(text: string) {
    let filteredList;
    if (!text) {
      filteredList = this.sharedService.tagList();
    }
    filteredList = this.sharedService.tagList().filter((tag) =>
      tag.name.toLowerCase().includes(text.toLowerCase()),
    );
    this.filteredListFn.emit(filteredList);
  }
}
