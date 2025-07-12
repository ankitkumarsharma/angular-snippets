import { Component } from '@angular/core';
import { FILTER_LIST } from './core/filter-list.constant';
import { CardDetails } from "../../shared/card-details/card-details";

@Component({
  selector: 'app-filter-list',
  imports: [CardDetails],
  templateUrl: './filter-list.html',
  styleUrl: './filter-list.scss'
})
export class FilterList {
  filterListData = FILTER_LIST;
  filterList = this.filterListData.filterListGrid;
  filterListActiveIndex = 0;

  onFilterFn(item: any,index:number) {
    this.filterListActiveIndex = index;
    this.filterList = this.filterListData.filterListGrid.filter(data =>
      data.categories.some(category => category === item.category)
    );
  }
}
