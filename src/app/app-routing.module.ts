import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsResolver } from '@usermanagement/user-details/resolvers/user-datails.resolver';
import { UserDetailsComponent } from '@usermanagement/user-details/user-details.component';
import { AuthorizationGuard } from './core/guards/authorization.guard';
import { UserListComponent } from './pages/user-management/user-list/user-list.component';

const routes: Routes = [
    { path: 'users', component: UserListComponent },
    {
        path: 'user/:id',
        resolve: { user: UserDetailsResolver },
        component: UserDetailsComponent,
        canActivate: [AuthorizationGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
