import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component';


const routes: Routes = [

    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent},
      
    { path: "category/list", component: CategoryListComponent},
    { path: "category/create", component: CategoryCreateComponent},
    { path: "category/detail/:id", component: CategoryDetailComponent},
    { path: "category/edit/:id", component: CategoryEditComponent},
  
    { path: "item/list", component: ItemListComponent},
    { path: "item/create", component: ItemCreateComponent},
    { path: "item/detail/:id", component: ItemDetailComponent},
    { path: "item/edit/:id", component: ItemEditComponent},
    
     ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  