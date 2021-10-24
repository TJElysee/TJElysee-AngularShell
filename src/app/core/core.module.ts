import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CoreUIModule } from './core-ui.module';

@NgModule({
    declarations: [
        LoginFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CoreUIModule
    ],

    exports: [
        LoginFormComponent
    ]
})
export class CoreModule { }
