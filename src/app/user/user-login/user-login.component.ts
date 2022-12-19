import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { UserService } from '../user.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  pageTitle: string = "QuoteTool Login";
  showVerifyButton: boolean = false;
  get isAdmin() {
    if(!this.sys.isLoggedIn) {
      return false;
    }
    return this.sys.getLoggedInUser()?.isAdmin;
  }

  usr: string = "vv";
  pwd: string = "vv";
  msg: string = "";

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  login(): void {
    this.msg = "";
    this.usrsvc.login(this.usr, this.pwd).subscribe({
      next: (res)=> {
        console.debug("Login Successful");
        this.sys.setLoggedInUser(res);
        this.router.navigateByUrl("/quoterequests/list");
      },
      error: (err) => {
        if(err.status == 404) {
          this.msg = "Username/Password is not found";
        }  else {
           console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
