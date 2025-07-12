import { Component } from '@angular/core';
import { ACCORDION_CONSTANTS } from '../core/accordian.constant';

@Component({
  selector: 'app-accordian-same-content',
  imports: [],
  templateUrl: './accordian-same-content.html',
  styleUrl: './accordian-same-content.scss'
})
export class AccordianSameContent {
  accordianData = ACCORDION_CONSTANTS.sameContent;

  onAccordionToggle(item: any, index: number) {
    this.accordianData.forEach((accordionItem: any) => {
      accordionItem.isActive = false; // Collapse all items
    });
    item.isActive = !item.isActive; // Toggle the clicked item
  }
}
