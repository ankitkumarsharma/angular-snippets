import { Component, input } from '@angular/core';
import { CardDetailsModel } from '../../core/app.models';
import { CardDetailsObject } from '../../core/app.constant';

@Component({
  selector: 'app-card-details',
  imports: [],
  templateUrl: './card-details.html',
  styleUrl: './card-details.scss'
})
export class CardDetails {
  data = input<CardDetailsModel>(CardDetailsObject);
}
