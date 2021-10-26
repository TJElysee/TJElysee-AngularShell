import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorizationDirective } from './directives/authorization.directive';
import { RandomUserService } from './services/random-user.service';



@NgModule({
    declarations: [
        AuthorizationDirective,
    ],
    imports: [
        CommonModule
    ],
    providers: [
        RandomUserService
    ],
    exports: [
        AuthorizationDirective
    ]
})
export class SharedModule { }
