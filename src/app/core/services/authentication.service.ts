import { Injectable } from '@angular/core';
import { LoggedInUser } from '../entities/logged-in-user.entity';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private _userSignedIn = false;

    public login(user: LoggedInUser) {
        this._userSignedIn = true;
    }

    public logout() {
        this._userSignedIn = false;
    }

    public isUserSignedIn(): boolean {
        return this._userSignedIn;
    }

}




