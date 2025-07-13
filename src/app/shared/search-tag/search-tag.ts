import { Component, inject, output } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { CardDetailsModel } from '../../core/app.models';

@Component({
  selector: 'app-search-tag',
  imports: [],
  templateUrl: './search-tag.html',
  styleUrl: './search-tag.scss'
})
export class SearchTag {
  sharedService = inject(SharedService);
  filteredListFn = output<CardDetailsModel[]>();
  
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
