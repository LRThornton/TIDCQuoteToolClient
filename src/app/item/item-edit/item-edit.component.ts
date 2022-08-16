import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { Category } from 'src/app/category/category.class';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {


  item!: Item;

  constructor(
    private itmsvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.itmsvc.change(this.item).subscribe({
      next: (res) => {
        console.debug("Product/Service updated");
        this.router.navigateByUrl("/item/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.itmsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product/Service:", res);
        this.item = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}

