import { Item } from "../item/item.class";

export class Category {
    id: number = 0;
    description: string = "";

    itemId: number = 0;
    Item!: Item;
    itemShortdescription: string=""; 
}


