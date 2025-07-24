import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/core/auth.service';
import { SharedService } from '../../shared/services/shared.service';
import { Logo } from "../../shared/utils/logo/logo";

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
  
  onRouteFn(item:any) {
    this.router.navigate([item.route]);
  }
}
