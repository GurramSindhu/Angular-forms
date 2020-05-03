import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-btn',
  template: `
    <span class="radio-label" (click)="toggle()">{{ label }}</span>
    <div class="flex-row flex-aic">
      <span>Yes</span>
      <label [for]="labelFor" class="switch" [formGroup]="parentForm">
        <input
          #radioInput
          type="checkbox"
          [id]="labelFor"
          class="switch__checkbox"
          [formControlName]="control"
        />
        <span class="switch__slider"></span>
      </label>
      <span>No</span>
    </div>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: var(--form-input-gap);
      }
      .radio-label {
        margin-right: 0.4em;
        cursor: pointer;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        margin: 0 0.5em;
      }
      .switch__checkbox {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .switch__slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--clr-error);
        border-radius: 34px;
        transition: background-color 0.4s;
      }
      .switch__slider:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        right: 4px;
        bottom: 4px;
        background-color: white;
        border-radius: 50%;
        transition: transform 0.4s;
      }
      .switch__checkbox:focus + .switch__slider {
        outline: var(--outline);
      }
      .switch__checkbox:checked + .switch__slider {
        background-color: var(--clr-success);
      }
      .switch__checkbox:checked + .switch__slider:before {
        transform: translateX(-26px);
      }
    `,
  ],
})
export class RadioBtnComponent {
  @Input() label: string;
  @Input() labelFor: string;
  @Input() parentForm: FormGroup;
  @Input() control: string;

  @ViewChild('radioInput') radioInput: ElementRef<HTMLInputElement>;

  toggle() {
    const control = this.parentForm.get(this.control);

    control.setValue(!control.value);
  }
}
