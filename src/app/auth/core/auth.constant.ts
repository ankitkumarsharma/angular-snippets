import { ControlType, Layout, NgAksFormsConfigModel, ValidationName } from "@ng-aks/forms";

export const LOGIN_FORM_CONFIG: NgAksFormsConfigModel = {
  config: [
    {
      type: ControlType.Text,
      label: 'Username',
      name: 'username',
      value: '',
      validations: [
        {
          name: ValidationName.Required,
          message: 'Username is required',
        },
      ],
    },
    {
      type: ControlType.Password,
      label: 'Password',
      name: 'password',
      value: '',
      validations: [
        {
          name: ValidationName.Required,
          message: 'Password is required',
        },
      ],
    }
  ],
  layout: Layout.Horizontal,
}

export const SIGN_UP_FORM_CONFIG: NgAksFormsConfigModel = {
  config: [
    {
      type: ControlType.Text,
      label: 'Name',
      name: 'name',
      value: '',
      validations: [
        {
          name: ValidationName.Required,
          message: 'Username is required',
        },
      ],
    },
    {
      type: ControlType.Text,
      label: 'Username',
      name: 'username',
      value: '',
      validations: [
        {
          name: ValidationName.Required,
          message: 'Username is required',
        },
      ],
    },
    {
      type: ControlType.Text,
      label: 'Email',
      name: 'email',
      value: '',
      validations: [
        {
          name: ValidationName.Required,
          message: 'Email is required',
        },
      ],
    },
    {
      type: ControlType.Password,
      label: 'Password',
      name: 'password',
      value: '',
      validations: [
        {
          name: ValidationName.Required,
          message: 'Password is required',
        },
      ],
    },
    {
      type: ControlType.Password,
      label: 'Confirm Password',
      name: 'confirmPassword',
      value: '',
      validations: [
        {
          name: ValidationName.Required,
          message: 'Confirm Password is required',
        },
      ],
    },
    {
      type: ControlType.Radio,
      label: 'Gender',
      name: 'gender',
      value: '',
      inlineCheckOptions: true,
      options: [
        {
          label: 'Male',
          value: 'male'
        },
        {
          label: 'Female',
          value: 'female'
        },
        {
          label: 'Other',
          value: 'other'
        }
      ],
      validations: [
        {
          name: ValidationName.Required,
          message: 'Gender is required',
        },
      ],
    }
  ],
  layout: Layout.Horizontal,
}