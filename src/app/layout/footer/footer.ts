import { Component } from '@angular/core';
import { FOOTER } from '../../core/app.constant';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  footer = FOOTER;
}
