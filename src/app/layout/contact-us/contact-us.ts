import { Component } from '@angular/core';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { CONTACT_US } from '../core/layout.constant';

@Component({
  selector: 'app-contact-us',
  imports: [ContainerRow],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss'
})
export class ContactUs {
  contactDetails = CONTACT_US;
}
