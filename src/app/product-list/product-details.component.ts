import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product.interface';

@Component({
	selector: 'product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit{

	product:IProduct;

	// Create the constrcutor to access the mechanism DI (Dependency Injection)
	constructor(private _route:ActivatedRoute) {

	}

	ngOnInit() { // let & const better than var

		// Get the values from the RouterModule
		let id  = this._route.snapshot.params['id'];
		console.log(id);

	}

}
