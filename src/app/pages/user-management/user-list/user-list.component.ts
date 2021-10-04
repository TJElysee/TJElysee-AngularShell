import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '@services/random-user.service';
import { User } from '../entities/users.entity';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    public userList: User[] = [];

    constructor(private userService: RandomUserService) { }

    ngOnInit(): void {
        this.userService.getUsers()
            .subscribe((result: User[]) => this.userList = result);
    }

}
