import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { HEADER } from '../core/layout.constant';
import { Logo } from "../../shared/utils/logo/logo";

@Component({
  selector: 'app-header',
  imports: [Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menu = HEADER.menuList;
  
  showComponentContainer = inject(SharedService);
  showTagContainer = inject(SharedService);
  router = inject(Router);

  onRouteFn(item:any) {
    this.showComponentContainer.showComponentContainer.set(false);
    this.showTagContainer.showTagContainer.set(true);
    this.router.navigate([item.route]);
  }
}
