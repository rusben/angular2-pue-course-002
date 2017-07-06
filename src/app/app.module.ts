import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './product-list/product-list.component';
import { RatingComponent }  from './common/rating/rating.component';

import { ProductListFilterPipe }  from './product-list/product-list-filter.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductListComponent, RatingComponent ProductListFilterPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }


