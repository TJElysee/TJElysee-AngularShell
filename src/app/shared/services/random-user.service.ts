import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../pages/user-management/entities/users.entity';
import { ApiResult } from '../entities/random-user-api-result.entity';

@Injectable()
export class RandomUserService {
    private baseUrl = 'https://randomuser.me/api/?noinfo&inc=gender,name,nat,email,picture';

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        const requestUrl = `${this.baseUrl}&results=10`;
        return this.http.get<ApiResult<User>>(requestUrl).pipe(
            map((result) => result.results));
    }

    public getUser(userId: string) {
        const requestUrl = `${this.baseUrl}&seed=foobar`;
        return this.http.get<ApiResult<User>>(requestUrl).pipe(
            map((result) => result.results));
    }
}
