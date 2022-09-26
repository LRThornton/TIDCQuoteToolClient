import { Component, OnInit, } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
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
  form: FormGroup;



  path: string = './src/assets/images/connection.png';
  alttext: string="connection logo"

  searchCriteria: string = "";
  items!: Item[];
  item: Item = new Item();
  

  sortColumn: string ="shortDescription";
  sortOrderAsc: boolean=true;

  // checked: boolean=true;
  // checkedItems: boolean=true;


  constructor(
     private itesvc: ItemService,
     private formBuilder: FormBuilder,

  ) { }

  

  // sortFn(sortColumn: string): void {
  //   if(this.sortColumn === sortColumn) {
  //     this.sortOrderAsc = !this.sortOrderAsc;
  //     return;
  //   }
  //     this.sortColumn = sortColumn;
  //     this.sortOrderAsc = true;  
  //   }

      termsChange(selected: any): void {
        console.log(      
         this.items.values,
         selected.target.name,
         selected.target.value,
         selected.target.checked,             
    );  


    // termsChange($event: { target: { value: any; checked: any; }; }){
    //   const id =$event.target.value;
    //   const isChecked = $event.target.checked;
    //   console.log(id, isChecked); 
    // }
 
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

  // ngOnInit() {
  //   this.form= this.formBuilder.group({
  //     items : new FormArray([
  //       new FormControl('', Validators.required)
  //     ])
  //   })
  // }

}

