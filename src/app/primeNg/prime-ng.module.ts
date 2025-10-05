import { NgModule } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";
import Aura from '@primeuix/themes/aura';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from "primeng/api";
import { MessageModule } from 'primeng/message';


@NgModule({
    imports: [
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    MessageModule
    ],
    exports: [
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    MessageModule
    ],
    providers: [
    provideAnimationsAsync(),
    providePrimeNG({
            theme: {
                preset: Aura
            },
            ripple: true
        }),
    ConfirmationService,
    MessageService
    ]
})

export class PrimeNgModule{

}