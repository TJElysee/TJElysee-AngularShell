import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Model, User } from '@usermanagement/entities/users.entity';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    public model?: Model;

    userForm = this.fb.group({
        gender: null,
        title: [null, Validators.required],
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, [
            Validators.required, Validators.email]]
    });

    titles = [
        { name: 'Mister', abbreviation: 'Mr' },
        { name: 'Madame', abbreviation: 'Mrs' },
        { name: 'Miss', abbreviation: 'Ms' },
        { name: 'Miss', abbreviation: 'Miss' },
        { name: 'Mademoiselle', abbreviation: 'Mademoiselle' },
        { name: 'Monsieur', abbreviation: 'Monsieur' },
    ];

    constructor(private route: ActivatedRoute,
        private fb: FormBuilder) { }

    ngOnInit(): void {
        const user = this.route.snapshot.data.user as User;
        this.model = new Model(user);
        this.userForm.get('gender')?.patchValue(this.model.gender);
        this.userForm.get('title')?.patchValue(this.model.title);
        this.userForm.get('firstName')?.patchValue(this.model.firstName);
        this.userForm.get('lastName')?.patchValue(this.model.lastName);
        this.userForm.get('email')?.patchValue(this.model.email);
    }

    onSubmit(): void {
        alert('Thanks!');
        if (this.model) {
            this.model.gender = this.userForm.get('gender')?.value;
            this.model.title = this.userForm.get('title')?.value;
            this.model.firstName = this.userForm.get('firstName')?.value;
            this.model.lastName = this.userForm.get('lastName')?.value;
            this.model.email = this.userForm.get('email')?.value;
        }
    }
}







