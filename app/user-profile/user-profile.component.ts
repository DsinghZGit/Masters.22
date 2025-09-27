import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { User } from 'app/Model/interfaces';
// import {apiUrl} from '../../environments/environment'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
 apiUrl = environment.apiUrl;
dataSource:User[]=[];
displayedColumns: string[] = ['fname','lname','email'];
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit() {

    this.http.get<User[]>( `${this.apiUrl}User`).subscribe
    (res=> {
      console.log("res",this.dataSource)
      this.dataSource=res;
    });
    
  }
  openAddUser(){
    this.router.navigate(['/add-user'])
  }

}
