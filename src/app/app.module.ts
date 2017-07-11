import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './product-list/product-list.component';
import { RatingComponent }  from './common/rating/rating.component';
import { ProductListFilterPipe }  from './product-list/product-list-filter.pipe';
import { ProductService }  from './product-list/product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, ProductListComponent, RatingComponent, ProductListFilterPipe],
  bootstrap:    [ AppComponent ],
  providers:    [ ProductService ]
})

export class AppModule { }


