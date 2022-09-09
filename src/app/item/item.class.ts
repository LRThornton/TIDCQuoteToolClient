import {Category} from "../category/category.class";

export class Item {
    
    id: number = 0;
    sku: string = "";
    partNumber: string = "";
    shortDescription: string = "";
    longDescription: string = "";
    cost: number = 0;
    sell: number = 0;
    unit: string = "";
   
    categoryDescription: string = "";
    categoryId: number = 0;
    category!: Category;    
    checked: unknown;
}