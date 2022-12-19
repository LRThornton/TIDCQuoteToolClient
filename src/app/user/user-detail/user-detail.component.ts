import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pageTitle: string = "User Detail";

  user!: User;
  showVerifyButton: boolean = false;
  get isAdmin() { 
    if(!this.syssvc.isLoggedIn) {
      return false;
    } 
    return this.syssvc.getLoggedInUser()?.isAdmin; 
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usrsvc: UserService,
    private syssvc: SystemService
  ) { }

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }

verifyRemove(): void {
  this.showVerifyButton = false;
  this.usrsvc.remove(this.user.id).subscribe({
    next: (res) => {
      console.debug("User deleted!");  
      this.router.navigateByUrl("/user/list");    
    },
    error: (err) => {
      console.error(err);
    }     
  });
}


  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.usrsvc.get(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }      
    }); 
  }
}
