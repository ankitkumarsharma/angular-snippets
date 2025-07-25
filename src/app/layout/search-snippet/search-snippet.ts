import { Component, inject, output } from '@angular/core'; 
import { CardDetailsModel } from '../../core/app.models';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-search-snippet',
  imports: [],
  templateUrl: './search-snippet.html',
  styleUrl: './search-snippet.scss'
})
export class SearchSnippet {
  sharedService = inject(SharedService);
  filteredListFn = output<CardDetailsModel[]>();
  
  filterResults(text: string) {
    let filteredList;
    if (!text) {
      filteredList = this.sharedService.snippetsList();
    }
    filteredList = this.sharedService.snippetsList().filter((snippet:any) =>
      snippet.name.toLowerCase().includes(text.toLowerCase()),
    );
    this.filteredListFn.emit(filteredList);
  }
}
