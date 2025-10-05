import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimeNgModule } from './primeNg/prime-ng.module';
import { SharedModule } from './shared/shared-module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    App,
    // SelectorPageComponent,
    // SideMenu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
