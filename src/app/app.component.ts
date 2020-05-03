import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

import { companyElements, signUpElements } from './utils';

const REQUIRED_MESSAGE = 'This is a required field.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  companyElements = companyElements;
  signUpElements = signUpElements;

  errorMessages = {
    company: [],
    address1: [],
    address2: [],
    city: [],
    state: [],
    zipCode: [],
    firstName: [],
    lastName: [],
    title: [],
    email: [],
    phone: [],
    password: [],
    confirmPassword: [],
  };

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      company: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: '',
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}/)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      title: '',
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        ],
      ],
      phone: ['', Validators.pattern(/^\d{10}/)],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      adultOffers: false,
      prevAffiliate: false,
      mobileAdvertising: false,
      mediaBuyer: false,
      stayInformed: false,
      termsAccepted: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit() {
    merge(
      this.getFormControl('zipCode').valueChanges.pipe(
        map((zip) => this._replaceNonDigits('zipCode', zip))
      ),
      this.getFormControl('phone').valueChanges.pipe(
        map((phone) => this._replaceNonDigits('phone', phone))
      )
    ).subscribe((details) => {
      const { control, value } = details;

      this.form.get(control).setValue(value, { emitEvent: false });
    });
  }

  validateField(control: string) {
    const formControl = this.form.get(control);
    const errors = formControl?.errors;

    this.errorMessages[control] = [];

    const messages = this.errorMessages[control];

    if (errors?.required) {
      messages.push(REQUIRED_MESSAGE);
    }

    if (control === 'zipCode' && errors?.pattern) {
      messages.push('Zip Code must be 5 digits.');
    }

    if (control === 'email' && errors?.pattern) {
      messages.push('Invalid email address.');
    }

    if (control === 'phone' && errors?.pattern) {
      messages.push('Phone number must be 10 digits.');
    }

    if (
      (control === 'password' || control === 'confirmPassword') &&
      errors?.minlength
    ) {
      messages.push('Password must be minimum 8 characters long.');
    }

    if (control === 'confirmPassword') {
      if (
        this.getFormControl('password').value !==
        this.getFormControl('confirmPassword').value
      ) {
        messages.push('Password mismatch.');
      }
    }
  }

  submit() {
    console.log(this.form.getRawValue());
  }

  private getFormControl(control: string) {
    return this.form.get(control);
  }

  private _replaceNonDigits(control: string, value: string) {
    return { control, value: value.replace(/\D/g, '') };
  }
}
