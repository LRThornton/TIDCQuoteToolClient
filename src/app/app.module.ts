import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './core/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemSearchPipe } from './item/item-search.pipe';
import { CreateQuoteComponent } from './quote/create-quote/create-quote.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { CategorySearchPipe } from './category/category-search.pipe';
import { BoolDisplayPipe } from './bool-display.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CategoryCreateComponent,
    CategoryDetailComponent,
    CategoryEditComponent,
    CategoryListComponent,
    ItemCreateComponent,
    ItemDetailComponent,
    ItemEditComponent,
    ItemListComponent,
    MenuComponent,
    HomeComponent,
    ItemSearchPipe,
    CreateQuoteComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserListComponent,
    UserLoginComponent,
    CategorySearchPipe,
    BoolDisplayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
