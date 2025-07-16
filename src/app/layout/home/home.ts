import { Component } from '@angular/core';
import { Logo } from "../../shared/utils/logo/logo";
import { ContainerRow } from "../../shared/utils/container-row/container-row";

@Component({
  selector: 'app-home',
  imports: [Logo, ContainerRow],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
