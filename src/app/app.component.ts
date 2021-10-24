import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from './core/components/login-form/login-form.component';
import { LoggedInUser } from './core/entities/logged-in-user.entity';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'AngularProject';
    username?: string;

    constructor(public dialog: MatDialog) { }

    onLoginButtonClicked() {
        this.openDialog();
    }

    private openDialog(): void {
        const dialogRef = this.dialog.open(LoginFormComponent, {
            width: '250px',
            data: {}
        });

        dialogRef.afterClosed().subscribe((user: LoggedInUser) => {
            console.log('Welcome to our application Mr: ' + user.username);
            this.username = user.username;
        });
    }

}

