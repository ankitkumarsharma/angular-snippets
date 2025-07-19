import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { Logo } from "../../shared/utils/logo/logo";
import { HEADER } from '../core/layout.constant';

@Component({
  selector: 'app-header',
  imports: [Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menu = HEADER.menuList;
  router = inject(Router);

  onRouteFn(item:any) {
    this.router.navigate([item.route]);
  }
}
