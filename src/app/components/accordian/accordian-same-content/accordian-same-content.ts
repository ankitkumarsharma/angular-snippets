import { Component } from '@angular/core';
import { ACCORDION_CONSTANTS } from '../core/accordian.constant';
import { AccordianItem } from "../accordian-item/accordian-item";
import { AccordianItemModel } from '../core/accordian.models';

@Component({
  selector: 'app-accordian-same-content',
  imports: [AccordianItem],
  templateUrl: './accordian-same-content.html',
  styleUrl: './accordian-same-content.scss'
})
export class AccordianSameContent {
  accordianData = ACCORDION_CONSTANTS.sameContent;

  onAccordionToggle(item: AccordianItemModel) {
    this.accordianData.forEach((accordionItem: any) => {
      accordionItem.isActive = false; // Collapse all items
    });
    item.isActive = !item.isActive; // Toggle the clicked item
  }
}
