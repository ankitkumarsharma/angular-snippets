import { Component } from '@angular/core';
import { Pills } from "../../shared/utils/pills/pills";
import { ACCORDION_CONSTANTS } from './core/accordian.constant';
import { AccordianSameContent } from "./accordian-same-content/accordian-same-content";
import { AccordianCustumContent } from "./accordian-custum-content/accordian-custum-content";
import { PillsModel } from '../../shared/utils/core/utils.models';

@Component({
  selector: 'app-accordian',
  imports: [Pills, AccordianSameContent, AccordianCustumContent],
  templateUrl: './accordian.html',
  styleUrl: './accordian.scss'
})
export class Accordian {
  accordianData = ACCORDION_CONSTANTS;
  tabActiveIndex = 0;
  onTabFn(tab:any){
    this.tabActiveIndex = tab.index;
  }
}
