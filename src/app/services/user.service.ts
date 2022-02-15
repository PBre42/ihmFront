import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL='../../assets/users.json';
  private readonly users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  
  constructor(private http: HttpClient) { }
  fetchList() {
    this.http.get<User[]>(this.baseURL)
      .subscribe(data => this.users$.next(data));
  }
  get users(): Observable<User[]> {
    return this.users$.asObservable();
  }
}
