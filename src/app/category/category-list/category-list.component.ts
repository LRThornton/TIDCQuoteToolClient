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

  
  sortColumn: string ="shortDescription";
  sortOrderAsc: boolean=true;
   searchCriteria: string = "";


  constructor(
    private catsvc: CategoryService
    ) { }

    sortFn(sortColumn: string): void {
      if(this.sortColumn === sortColumn) {
        this.sortOrderAsc = !this.sortOrderAsc;
        return;
      }
      this.sortColumn = sortColumn;
      this.sortOrderAsc = true;
    }  

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
