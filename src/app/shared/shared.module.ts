import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorizationDirective } from './directives/authorization.directive';
import { RandomUserHttpService } from './services/random-user.http.service';



@NgModule({
    declarations: [
        AuthorizationDirective,
    ],
    imports: [
        CommonModule
    ],
    providers: [
        RandomUserHttpService
    ],
    exports: [
        AuthorizationDirective
    ]
})
export class SharedModule { }
