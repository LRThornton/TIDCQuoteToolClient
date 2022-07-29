import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { Category } from 'src/app/category/category.class';
import { CategoryService } from 'src/app/category/category.service';
import { ItemSearchPipe } from 'src/app/item/item-search.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  searchCriteria: string = "";
  items!: Item[];
  item: Item = new Item();

  sortColumn: string ="shortDescription";
  sortOrderAsc: boolean=true;
  
  

  constructor(
     private itesvc: ItemService
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
    this.itesvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res;
      },
      error: (err) => console.error(err)
    });
  }

}

