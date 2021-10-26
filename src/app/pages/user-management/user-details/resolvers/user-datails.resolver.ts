import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { RandomUserHttpService } from '@services/random-user.http.service';
import { User } from '@usermanagement/entities/users.entity';
import { Observable } from 'rxjs';


@Injectable()
export class UserDetailsResolver implements Resolve<User> {
    constructor(private randomUserService: RandomUserHttpService) { }
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        const userId = route.params['id'];
        return this.randomUserService.getUser(userId);
    }
}
