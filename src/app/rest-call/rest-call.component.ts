import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rest-call',
  templateUrl: './rest-call.component.html',
  styleUrl: './rest-call.component.css'
})
export class RestCallComponent implements OnInit{
  users$!: IUser[];
  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
  }
}
