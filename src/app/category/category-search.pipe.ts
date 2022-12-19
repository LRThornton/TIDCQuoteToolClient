import { Pipe, PipeTransform } from '@angular/core'; 
import { Category } from './category.class';

@Pipe({
  name: 'categorySearch'
})
export class CategorySearchPipe implements PipeTransform {

  transform(categories: Category[], searchCriteria: string = ""): Category[] {
    if(searchCriteria === "") {
      return categories;
    }
    let selCategories: Category[] = [];
    let search = searchCriteria.toLowerCase();
    for(let i of categories) {
      if(
        i.description.toLowerCase().includes(search)
            
          ) {
        selCategories.push(i);
      }
    }
    return selCategories;
  }
}


