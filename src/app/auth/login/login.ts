import { Component } from '@angular/core';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { NgAksForms } from '@ng-aks/forms';
import { LOGIN_FORM_CONFIG } from '../core/auth.constant';
import { FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ContainerRow, NgAksForms, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  formConfig = LOGIN_FORM_CONFIG;
  formGroup!: FormGroup;

  onGetForm(e: FormGroup) {
    this.formGroup = e;
  }
  onSubmitForm() {
    if (this.formGroup.valid) {
      console.log("form value", this.formGroup.value);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
