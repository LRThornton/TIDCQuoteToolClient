import { Component, OnInit, } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { Category } from 'src/app/category/category.class';
import { CategoryService } from 'src/app/category/category.service';
import { ItemSearchPipe } from 'src/app/item/item-search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})

export class CreateQuoteComponent implements OnInit {

  form: FormGroup;
  
  sortColumn: string ="shortDescription";
  sortOrderAsc: boolean=true;
  path: string = './src/assets/images/connection.png';

  searchCriteria: string = "";
  items!: Item[];
  item: Item = new Item();

  selections: any[] = []; //this holds the values from the options tag that have been selected on the page
  quotelines: any[] = []; //this holds each item selected
  showSelect: boolean = true;

  constructor(
    private itesvc: ItemService ) { }

  GetItemByPk (id: number) {
    for (let i of this.items) {
      if (id == i.id) {
        return i;
      }
    }
  }

  display (): void {
    console.log(this.selections);
    for (let id of this.selections) {
      let quoteLine = this.GetItemByPk(id);
      this.quotelines.push(quoteLine);      
    }
    console.table(this.quotelines);
    this.showSelect = false
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

