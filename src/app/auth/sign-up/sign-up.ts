import { Component } from '@angular/core';
import { ContainerRow } from "../../shared/utils/container-row/container-row";
import { NgAksForms } from "@ng-aks/forms";
import { FormGroup } from '@angular/forms';
import { SIGN_UP_FORM_CONFIG } from '../core/auth.constant';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ContainerRow, NgAksForms, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {
  formConfig = SIGN_UP_FORM_CONFIG;
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
