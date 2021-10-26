import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDetailsResolver } from './user-details/resolvers/user-datails.resolver';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserManagementUIModule } from './user-management-ui.module';

@NgModule({
    declarations: [
        UserCardComponent,
        UserListComponent,
        UserDetailsComponent
    ],
    imports: [
        CommonModule,
        UserManagementUIModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        UserDetailsResolver
    ]
})
export class UserManagementModule { }
