import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserManagementUIModule } from './user-management-ui.module';

@NgModule({
    declarations: [
        UserCardComponent,
        UserListComponent

    ],
    imports: [
        CommonModule,
        UserManagementUIModule
    ],
    providers: [
    ]
})
export class UserManagementModule { }
