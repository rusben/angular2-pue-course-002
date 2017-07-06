import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductList }  from './product-list/product-list.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProductList ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


