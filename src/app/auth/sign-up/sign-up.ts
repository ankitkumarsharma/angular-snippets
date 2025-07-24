import { Component, inject } from '@angular/core';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { NgAksForms } from "@ng-aks/forms";
import { FormGroup } from '@angular/forms';
import { SIGN_UP_FORM_CONFIG } from '../core/auth.constant';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { SharedService } from '../../shared/services/shared.service';
import { HEADER } from '../../layout/core/layout.constant';

@Component({
  selector: 'app-sign-up',
  imports: [ContainerRow, NgAksForms, RouterLink],
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
          this.router.navigateByUrl('/');
          this.authService.isLoggedIn.set(data._id);
          this.sharedService.menu.set(HEADER.dashboardMenuList);
        }
      })
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
