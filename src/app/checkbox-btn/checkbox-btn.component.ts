import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-btn',
  template: `
    <div class="checkbox" [formGroup]="parentForm">
      <input
        type="checkbox"
        id="checkbox"
        class="checkbox__input"
        [formControlName]="control"
      />
      <label for="checkbox" class="checkbox__label">
        <ng-content></ng-content>
      </label>
    </div>
  `,
  styles: [
    `
      .checkbox {
        display: inline-block;
        margin: 1em 0;
      }
      .checkbox__input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .checkbox__label {
        position: relative;
        padding-left: 2em;
        font-size: 14px;
        cursor: pointer;
      }
      .checkbox__label::before,
      .checkbox__label::after {
        display: block;
        position: absolute;
        content: '';
      }
      .checkbox__label::before {
        height: 16px;
        width: 16px;
        border: 2px solid #ccc;
        left: 0px;
        top: -2px;
      }
      .checkbox__label::after {
        content: none;
        height: 5px;
        width: 10px;
        border-left: 2px solid;
        border-bottom: 2px solid;
        transform: rotate(-45deg);
        left: 4px;
        top: 3px;
        color: var(--clr-success);
      }
      .checkbox__input:checked + .checkbox__label::before {
        border-color: var(--clr-success);
      }
      .checkbox__input:focus + .checkbox__label::before {
        outline: var(--outline);
      }
      .checkbox__input:checked + .checkbox__label::after {
        content: '';
      }
    `,
  ],
})
export class CheckboxBtnComponent implements OnInit {
  @Input() label: string;
  @Input() parentForm: FormGroup;
  @Input() control: string;

  constructor() {}

  ngOnInit(): void {}
}
