import { Component, input, output } from '@angular/core';
import { AccordianItemModel } from '../core/accordian.models';
import { ACCORDION_CONSTANTS } from '../core/accordian.constant';

@Component({
  selector: 'app-accordian-item',
  imports: [],
  templateUrl: './accordian-item.html',
  styleUrl: './accordian-item.scss'
})
export class AccordianItem {
  item = input<AccordianItemModel>(ACCORDION_CONSTANTS.defaultItem);
  toggleItem = output<AccordianItemModel>();

  onAccordionToggle(item: AccordianItemModel) {
    this.toggleItem.emit(item);
  }
}
