import { Component } from '@angular/core';
import { HEADER } from '../../../layout/core/layout.constant';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.html',
  styleUrl: './logo.scss'
})
export class Logo {
  logo:string = HEADER.logo;
}
