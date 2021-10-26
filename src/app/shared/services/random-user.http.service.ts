import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../pages/user-management/entities/users.entity';
import { ApiResult } from '../entities/random-user-api-result.entity';

@Injectable()
export class RandomUserHttpService {
    private baseUrl = 'https://randomuser.me/api/?seed=foobar&noinfo&inc=gender,name,nat,email,picture';

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        const requestUrl = `${this.baseUrl}&results=9`;
        return this.http.get<ApiResult<User>>(requestUrl).pipe(
            map((result) => result.results));
    }

    public getUser(userId: string) {
        const requestUrl = `${this.baseUrl}`;
        return this.http.get<ApiResult<User>>(requestUrl).pipe(
            map((result) => result.results[0]));
    }
}
