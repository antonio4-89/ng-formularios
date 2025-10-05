import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CountriesRoutingModule } from "./countries.routing.module";
import { SelectorPageComponent } from "./pages/selector-page/selector-page.component";
import { PrimeNgModule } from "../primeNg/prime-ng.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SelectorPageComponent
    ],
    imports: [
        CommonModule,
        CountriesRoutingModule,
        PrimeNgModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: []
})

export class CountriesModule{}