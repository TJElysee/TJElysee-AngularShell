import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from './core/components/login-form/login-form.component';
import { LoggedInUser } from './core/entities/logged-in-user.entity';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'AngularProject';
    username?: string;

    constructor(public dialog: MatDialog,
        private authenticationService: AuthenticationService) { }

    onLoginButtonClicked() {
        this.openDialog();
    }

    private openDialog(): void {
        const dialogRef = this.dialog.open(LoginFormComponent, {
            width: '250px',
            data: {}
        });

        dialogRef.afterClosed().subscribe((user: LoggedInUser) => {
            this.username = user.username;
            this.authenticationService.login(user);
        });
    }

}

