import { Component, input } from '@angular/core';
import { CardDetailsModel } from '../../../core/app.models';
import { CardDetailsObject } from '../../../core/app.constant';
import { CARD_DETAILS } from '../core/utils.constant';

@Component({
  selector: 'app-card-details',
  imports: [],
  templateUrl: './card-details.html',
  styleUrl: './card-details.scss'
})
export class CardDetails {
  data = input<CardDetailsModel>(CardDetailsObject);
  showImg = input<boolean>(false);
  showTags = input<boolean>(false);
  width = input<string>(CARD_DETAILS.cardDefaultWidth);
}
