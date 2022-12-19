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
import { CreateQuoteComponent } from './quote/create-quote/create-quote.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';



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

    { path: "quote/create", component: CreateQuoteComponent},

    { path: "users/list", component: UserListComponent},
    { path: "user/create", component: UserCreateComponent},
    { path: "user/detail/:id", component: UserDetailComponent},
    { path: "user/edit/:id", component: UserEditComponent},
    { path: "login", component: UserLoginComponent}
    

    
     ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  