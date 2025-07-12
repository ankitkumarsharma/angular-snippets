import { Component, input, output } from '@angular/core';
import { PILLS } from '../core/utils.constant';
import { PillsModel } from '../core/utils.models';

@Component({
  selector: 'app-pills',
  imports: [],
  templateUrl: './pills.html',
  styleUrl: './pills.scss'
})
export class Pills {
  pills = input<PillsModel[]>(PILLS);
  pillTap = output();
  filterListActiveIndex = 0;

  onPillsFn(item: any,index:number) {
    this.filterListActiveIndex = index;
    let obj:any = {
      item: item,
      index: index
    }
    this.pillTap.emit(obj);
  }
}
