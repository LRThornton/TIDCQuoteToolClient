import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, } from '@angular/forms';
import { ItemSearchPipe } from '../item-search.pipe';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { toArray } from 'rxjs';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})



export class ItemListComponent implements OnInit {
  
  
  items: Item[] = [];

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


  termsChange(selected: any): void {
         console.log(      
          this.items.values,
         selected.target.name,
         selected.target.value,
         selected.target.checked,              
    );   
      
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
