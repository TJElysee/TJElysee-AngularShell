import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoggedInUser } from '../../../core/entities/logged-in-user.entity';

interface Server {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    servers: Server[] = [
        { value: 'euw', viewValue: 'Eu West' },
        { value: 'eune', viewValue: 'Eu Northeast' },
        { value: 'na', viewValue: 'North America' }
    ];

    model = new LoggedInUser();

    constructor(public dialogRef: MatDialogRef<LoginFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
    }

    onFormSubmitted() {
        this.dialogRef.close(this.model);
    }

}
