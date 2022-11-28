import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { Category } from 'src/app/category/category.class';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {


  item!: Item;
  category!: Category;
  categories!: Category[];

  constructor(
    private itmsvc: ItemService,
    private ctsvc: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.itmsvc.change(this.item).subscribe({
      next: (res) => {
        console.debug("Product/Service updated");
        this.router.navigateByUrl("/item/list");
      },
      error: (err) => console.error(err)
      });
    }

  //trial

  ngOnInit(): void {
    this.ctsvc.list().subscribe({
      next: (res) => {
        console.debug("Categories:", res);
        this.categories = res;
      },
      error: (err) => console.error(err)
    });
    let id = +this.route.snapshot.params["id"];
    this.itmsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Item:", res);
        this.item = res;
      },
      error: (err) => console.error(err)
    });
  }


  // ngOnInit(): void {
  //   let id = +this.route.snapshot.params["id"];
  //   this.itmsvc.get(id).subscribe({
  //     next: (res) => {
  //       console.debug("Product/Service:", res);
  //       this.item = res;
  //     },
  //     error: (err) => {
  //       console.error(err);
  //     }
  //   })
  // }

}

