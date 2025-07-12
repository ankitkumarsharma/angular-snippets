import { Component, OnInit } from '@angular/core';
import { ACCORDION_CONSTANTS } from '../core/accordian.constant';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccordianItem } from "../accordian-item/accordian-item";
import { AccordianItemModel } from '../core/accordian.models';

@Component({
  selector: 'app-accordian-custum-content',
  imports: [ReactiveFormsModule, AccordianItem],
  templateUrl: './accordian-custum-content.html',
  styleUrl: './accordian-custum-content.scss'
})
export class AccordianCustumContent implements OnInit {
  accordianData = ACCORDION_CONSTANTS.customContent;
  formGroup!: FormGroup;
  formControls: any;

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({});
    this.accordianData.forEach((item: any) => {
      if (item.content.type === 'form') {
        this.formControls = item.content.value;
        item.content.value.forEach((control: any) => {
          if (control.type !== 'button') {
            this.formGroup.addControl(control.name, new FormControl(control.value || ''));
          }
        })
      }
    });
  }

  onSubmit() {
    console.log(this.formGroup.value)
  }

  onAccordionToggle(item: AccordianItemModel) {
    this.accordianData.forEach((accordionItem: any) => {
      accordionItem.isActive = false; // Collapse all items
    });
    item.isActive = !item.isActive; // Toggle the clicked item
  }
}
