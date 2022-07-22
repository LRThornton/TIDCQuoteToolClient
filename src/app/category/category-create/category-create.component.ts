import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.class';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = new Category();

  constructor(
    private catsvc: CategoryService,
    private router: Router
  ) { }
  save(): void {
    this.catsvc.create(this.category).subscribe({
      next: (res) => {
        console.debug("Category added");
        this.router.navigateByUrl("/category/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.catsvc.list().subscribe({
      next:(res)=>{
        console.debug("Categories",res);
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }


}
