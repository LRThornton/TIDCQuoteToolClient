import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category.class';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})

export class ItemCreateComponent implements OnInit {

  item: Item = new Item();
  categories!: Category[];

  constructor(
    private itesvc: ItemService,
    private catsvc: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.itesvc.create(this.item).subscribe({
      next: (res) => {
        console.debug("Item created");
        this.router.navigateByUrl("/item/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.item.categoryId = +this.route.snapshot.params["id"];
    this.catsvc.list().subscribe({
      next: (res) => {
        console.debug("Categories:", res);
        this.categories = res;
      },
      error: (err) => console.error(err)
    });
  }
}  
