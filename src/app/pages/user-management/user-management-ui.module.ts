import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const materialComponents = [
    MatCardModule,
    MatButtonModule
];
@NgModule({
    imports: [
        FlexLayoutModule,
    ],
    exports: [
        FlexLayoutModule,
        [...materialComponents]
    ]
})
export class UserManagementUIModule { }
