import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { ItemSearchPipe } from 'src/app/item/item-search.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items!: Item[];

  sortColumn: string ="shortDescription";
  sortOrderAsc: boolean=true;
   searchCriteria: string = "";

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

