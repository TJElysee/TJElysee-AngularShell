import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const materialComponents = [
    MatCardModule,
    MatButtonModule
];
@NgModule({
    imports: [
        [...materialComponents]
    ],
})
export class UserManagementUIModule { }
