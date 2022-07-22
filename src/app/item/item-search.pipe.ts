import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.class';

@Pipe({
  name: 'itemSearch'
})
export class ItemSearchPipe implements PipeTransform {

  transform(items: Item[], searchCriteria: string = ""): Item[] {
    if(searchCriteria === "") {
      return items;
    }
    let selItems: Item[] = [];
    let search = searchCriteria.toLowerCase();
    for(let i of items) {
      if(
        i.sku.toLowerCase().includes(search)
          || i.partNumber.toLowerCase().includes(search)
          || i.shortDescription.toLowerCase().includes(search)
          || i.longDescription.toLowerCase().includes(search)
          || i.cost.toString().includes(search)
          || i.sell.toString().includes(search)
          ) {
        selItems.push(i);
      }
    }
    return selItems;
  }
}


