import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() username?: string = '';
    @Output() private readonly loginButtonClick: EventEmitter<unknown> = new EventEmitter();

    constructor() { }

    // ngOnChanges(changes: SimpleChanges) {
    //     if (changes.username) {
    //         console.log(changes);
    //     }
    // }

    ngOnInit(): void {
    }

    onLoginButtonClicked(): void {
        this.loginButtonClick.emit();
    }

}
