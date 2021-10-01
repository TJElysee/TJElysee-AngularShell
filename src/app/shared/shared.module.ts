import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RandomUserService } from './services/random-user.service';



@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        RandomUserService
    ]
})
export class SharedModule { }
