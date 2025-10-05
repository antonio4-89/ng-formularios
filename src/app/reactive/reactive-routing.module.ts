import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicPageComponent } from "./pages/basic-page/basic-page.component";
import { DynamicPage } from "./pages/dynamic-page/dynamic-page";
import { SwitchesPage } from "./pages/switches-page/switches-page";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'basic', component: BasicPageComponent },
            { path: 'dynamic', component: DynamicPage },
            { path: 'switches', component: SwitchesPage },
            { path: '**', redirectTo: 'basic' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ReactiveRoutingModule {}