import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgAksForms } from '@ng-aks/forms';
import { HEADER } from '../../layout/core/layout.constant';
import { SharedService } from '../../shared/services/shared.service';
import { LOGIN_FORM_CONFIG } from '../core/auth.constant';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  imports: [NgAksForms, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  formConfig = LOGIN_FORM_CONFIG;
  formGroup!: FormGroup;
  authService = inject(AuthService);
  sharedService = inject(SharedService);
  router = inject(Router);
  onGetForm(e: FormGroup) {
    this.formGroup = e;
  }
  onSubmitForm() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe((data: any) => {
        if (data) {
          this.router.navigateByUrl('/dashboard');
          this.authService.isLoggedIn.set(data);
          this.sharedService.menu.set(HEADER.dashboardMenuList);
        }
      })
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
