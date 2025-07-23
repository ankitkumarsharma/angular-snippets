import { Component, inject } from '@angular/core';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { NgAksForms } from '@ng-aks/forms';
import { LOGIN_FORM_CONFIG } from '../core/auth.constant';
import { FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  imports: [ContainerRow, NgAksForms, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  formConfig = LOGIN_FORM_CONFIG;
  formGroup!: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);
  onGetForm(e: FormGroup) {
    this.formGroup = e;
  }
  onSubmitForm() {
    if (this.formGroup.valid) {
      console.log("form value", this.formGroup.value);
      this.authService.getLoggedUser(this.formGroup.value).subscribe((data)=>{
        this.router.navigateByUrl('/');
        console.log("Logged successfully....",data)
      })
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
