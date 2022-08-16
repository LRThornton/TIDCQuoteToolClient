import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { ItemSearchPipe } from '../item-search.pipe';
import { Item } from '../item.class';
import { ItemService } from '../item.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {
  

  // items: Item[] = [];
 
  items!: Item[];

  sortColumn: string ="shortDescription";
  sortOrderAsc: boolean=true;
   searchCriteria: string = "";
  form: any;

 

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
         selected.target.name,
         selected.target.value,
         selected.target.checked
    );
  }

  // termsChange(e) {
  //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;

  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   }
  //   else {
  //     let i:number = 0;
  //     checkArray.controls.forEach((item: FormControl) => {
  //       if (item.value == e.target.value)) {
  //         checkArray.removeAt(i);
  //         return;        }
  //       }
  //       i++;
  //     });
  //   }
  // }
  // subimitForm() {
  //   console.log(this.form.value)
  // }  
       
  //   console.log(
  //        selected.target.name,
  //        selected.target.value,
  //        selected.target.checked
  //   );
  // }
  


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
