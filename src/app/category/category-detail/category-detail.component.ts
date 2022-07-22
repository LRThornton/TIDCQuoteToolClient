import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.class';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  

  category!: Category;
  showVerifyButton: boolean = false;

  constructor(
    private catsvc: CategoryService,
    private route: ActivatedRoute,
    private router: Router
    
  ) { }

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }

verifyRemove(): void {
  this.showVerifyButton = false;
  this.catsvc.remove(this.category.id).subscribe({
    next: (res) => {
      console.debug("Category is deleted!");  
      this.router.navigateByUrl("/category/list");    
    },
    error: (err) => {
      console.error(err);
    }     
  });
}


  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.catsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Item:", res);
        this.category = res;
      },
      error: (err) => {
        console.error(err);
      }      
    });

  }

}
