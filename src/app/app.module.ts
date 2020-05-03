import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckboxBtnComponent } from './checkbox-btn/checkbox-btn.component';
import { RadioBtnComponent } from './radio-btn/radio-btn.component';

@NgModule({
  declarations: [AppComponent, RadioBtnComponent, CheckboxBtnComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
