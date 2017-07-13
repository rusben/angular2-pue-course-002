import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from './product.interface';
import { ProductService } from './product.service';

@Component({
	selector: 'product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit{

	product:IProduct;

	// Create the constrcutor to access the mechanism DI (Dependency Injection)
	constructor(private _route:ActivatedRoute, private _productService:ProductService, private _router:Router) {

	}

	ngOnInit() { // let & const better than var

		// Get the values from the RouterModule
		let id  = this._route.snapshot.params['id'];
		//console.log(id);
		//console.log(this._productService.getProducts());
		//console.log(this._productService.getProductById(id));

		//// Product By id Plain
//		this.product = this._productService.getProductByIdPlain(id);
//		console.log(this.product);

		
	//	console.log(this._productService.getProductByIdPlain(id));

//// Promises
 	 console.log("Promises");
		this.product = this._productService.getProductByIdPromises(id)
		.then(
			(product:IProduct) => {
			this.product = product;
		}, (error:string) => {
			alert(error);
		});


	}

	onBackButtonClicked() {
		// window.history.back();
		this._router.navigate(['/products']);
	}

	

}
