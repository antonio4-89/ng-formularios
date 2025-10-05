import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicPageComponent } from "./pages/basic-page/basic-page.component";
import { SwitchesPage } from "./pages/switches-page/switches-page";
import { DynamicPage } from "./pages/dynamic-page/dynamic-page";
import { ReactiveRoutingModule } from "./reactive-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { PrimeNgModule } from "../primeNg/prime-ng.module";

@NgModule({
    declarations: [
    BasicPageComponent,
    SwitchesPage,
    DynamicPage
    ],
    imports: [
        CommonModule,
        ReactiveRoutingModule,
        ReactiveFormsModule,
        PrimeNgModule
    ]
})

export class ReactiveModule {}