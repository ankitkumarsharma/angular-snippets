import { Component } from '@angular/core';
import { HEADER } from '../../../layout/core/layout.constant';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.scss'
})
export class Logo {
  logo:string = HEADER.logo;
}
