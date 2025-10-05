import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule
]
})
export class AuthModule { }
