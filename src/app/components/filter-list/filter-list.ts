import { Component } from '@angular/core';
import { FILTER_LIST } from './core/filter-list.constant';
import { CardDetails } from "../../shared/utils/card-details/card-details";
import { Pills } from "../../shared/utils/pills/pills";

@Component({
  selector: 'app-filter-list',
  imports: [CardDetails, Pills],
  templateUrl: './filter-list.html',
  styleUrl: './filter-list.scss'
})
export class FilterList {
  filterListData = FILTER_LIST;
  filterList = this.filterListData.filterListGrid;

  onFilterFn(obj: any) {
    this.filterList = this.filterListData.filterListGrid.filter(data =>
      data.categories.some(category => category === obj.item.category)
    );
  }
}
