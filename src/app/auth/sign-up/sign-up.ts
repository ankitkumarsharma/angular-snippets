import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgAksForms } from "@ng-aks/forms";
import { HEADER } from '../../layout/core/layout.constant';
import { SharedService } from '../../shared/services/shared.service';
import { SIGN_UP_FORM_CONFIG } from '../core/auth.constant';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-sign-up',
  imports: [NgAksForms, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {
  formConfig = SIGN_UP_FORM_CONFIG;
  formGroup!: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);
  sharedService = inject(SharedService);

  onGetForm(e: FormGroup) {
    this.formGroup = e;
  }
  onSubmitForm() {
    if (this.formGroup.valid) {
      this.authService.signUp(this.formGroup.value).subscribe((data: any) => {
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
