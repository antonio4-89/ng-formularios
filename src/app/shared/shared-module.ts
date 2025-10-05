import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideMenu } from './components/side-menu/side-menu';
import { ɵInternalFormsSharedModule } from "@angular/forms";



@NgModule({
  declarations: [
    SideMenu
  ],

  imports: [
    CommonModule,
    RouterModule,
    ɵInternalFormsSharedModule
],
  exports: [
    SideMenu
  ]
})
export class SharedModule { }
