import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SingleUserResponse, User } from './user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  private baseUrl = 'https://reqres.in/api/users';

  constructor() { }

  getUserById(id:number):Observable<User>{
    return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`).pipe(map(res => res.data))
  }
}
