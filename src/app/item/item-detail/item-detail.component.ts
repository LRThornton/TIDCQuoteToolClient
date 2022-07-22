import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { Category } from 'src/app/category/category.class';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item!: Item;
  categories!: Category[];
  showVerifyButton: boolean = false;

  constructor(
    private itmsvc: ItemService,
    private route: ActivatedRoute,
    private router: Router
    
  ) { }

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }

verifyRemove(): void {
  this.showVerifyButton = false;
  this.itmsvc.remove(this.item.id).subscribe({
    next: (res) => {
      console.debug("Product is deleted!");  
      this.router.navigateByUrl("/item/list");    
    },
    error: (err) => {
      console.error(err);
    }     
  });
}


  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.itmsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Item:", res);
        this.item = res;
      },
      error: (err) => {
        console.error(err);
      }      
    });

  }

}
