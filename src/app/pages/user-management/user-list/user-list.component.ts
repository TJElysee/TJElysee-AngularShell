import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomUserService } from '@services/random-user.service';
import { User } from '../entities/users.entity';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    public userList: User[] = [];

    constructor(private userService: RandomUserService,
        private router: Router) { }

    ngOnInit(): void {
        this.userService.getUsers()
            .subscribe((result: User[]) => this.userList = result);
    }


    onUserEditButtonEventTriggered(userid: string): void {
        this.router.navigate(['/user', userid]);
    }

}
