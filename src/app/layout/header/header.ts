import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/core/auth.service';
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
  router = inject(Router);
  authService = inject(AuthService);
  sharedService = inject(SharedService);
  menu = this.sharedService.menu;
  isMobile = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
      if (isPlatformBrowser(this.platformId)) {
        // Access window object here
        this.isMobile = window.innerWidth < 992;
      }
    }
    
  onRouteFn(item: any) {
    if (item.title == 'Logout') {
      this.authService.logout().subscribe((data: any) => {
        if (data) {
          this.router.navigateByUrl('/auth/login');
          this.authService.isLoggedIn.set(null);
          this.sharedService.menu.set(HEADER.menuList);
        }
      })
    }
    this.router.navigate([item.route]);
  }
}
