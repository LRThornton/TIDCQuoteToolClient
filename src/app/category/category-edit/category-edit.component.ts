import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.class';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category!: Category;

  constructor(
    private catsvc: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.catsvc.change(this.category).subscribe({
      next: (res) => {
        console.debug("Product/Service updated");
        this.router.navigateByUrl("/category/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.catsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product/Service:", res);
        this.category = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
