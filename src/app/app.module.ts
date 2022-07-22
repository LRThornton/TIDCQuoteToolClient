import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
    ItemSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
