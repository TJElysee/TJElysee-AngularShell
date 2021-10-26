import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        AuthenticationService,
    ]
})
export class CoreModule { }
