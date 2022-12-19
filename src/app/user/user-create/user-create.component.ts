import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  pageTitle: string = "Create new User";
  user: User = new User();
  users!: User[];

  constructor(
    private usrsvc : UserService,
    private router: Router,
    private syssvc: SystemService

  ) { }

  save(): void {
    this.usrsvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("User created");
        this.router.navigateByUrl("users/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
  }

}
