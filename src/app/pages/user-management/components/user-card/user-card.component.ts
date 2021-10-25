import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../entities/users.entity';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

    @Input() user?: User;
    @Output() readonly editButtonClick = new EventEmitter<string>();
    constructor() { }

    ngOnInit(): void {
    }

    onEditButtonClicked() {
        this.editButtonClick.emit(this.user?.nat);
    }



}
