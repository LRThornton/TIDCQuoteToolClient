import { Component, OnInit } from '@angular/core';
import { Category } from '../category.class';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  searchCriteria: string = "";

  constructor(
    private catsvc: CategoryService
    ) { }

  ngOnInit(): void {
    this.catsvc.list().subscribe({
      next: (res) => {
        this.categories = res;
        console.debug("Categories", res);
      },

      error: (err) => {
        console.error(err);
      }
    });
  }
}
