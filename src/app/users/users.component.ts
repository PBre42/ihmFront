import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : Observable<User[]> | undefined;
  selectedUser?:User;
  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  private getUserList(){
    this.users = this.userService.users;
    this.userService.fetchList();
  }
  
  public detailsUser(u:User){
    if(u.selected)u.selected = false;
    else u.selected = true;
  }
}
