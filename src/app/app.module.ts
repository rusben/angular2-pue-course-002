import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './product-list/product-list.component';
import { ProductDetailsComponent }  from './product-list/product-details.component';
import { RatingComponent }  from './common/rating/rating.component';
import { ProductListFilterPipe }  from './product-list/product-list-filter.pipe';
import { ProductService }  from './product-list/product.service';
import { WelcomeComponent }  from './welcome/welcome.component';
import { MyNavbarComponent }  from './common/my-navbar/my-navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, 
  				  RouterModule
  				  .forRoot(
  				  	[
  				  	  { path: 'products', component: ProductListComponent},
                { path: 'product/:id', component: ProductDetailsComponent},
  				  	  { path: 'welcome', component: WelcomeComponent},
  				  	  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  				  	  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  				  	])
  				],
  declarations: [ AppComponent, ProductListComponent, RatingComponent, ProductListFilterPipe, WelcomeComponent, MyNavbarComponent, ProductDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ProductService ]
})

export class AppModule { }

// RouterModule.forRoot() in order to route between components

