import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

import { IProduct } from './product.interface';

@Injectable()
export class ProductService {

	constructor(private _http:Http) {

	}

	products:Array<IProduct>;

	getProductsAsync():Observable<IProduct[]> {
		return this._http.get("api/products/products.json")
			.map((response:Response) => {
				this.products = <IProduct[]>response.json();
				return this.products;
			})
			// Error control
			.catch(this.handleError);
	}

	getProductByIdPromises(id:number):Promise<IProduct> {
		return new Promise((resolve,reject) => {
			let product:IProduct = this.getProductById(id);

			if (product) {
				resolve(product);
			} else {
				reject("Error, product not found.");
			}
		});
	}

	getProductById(id:number):IProduct {
		return {

						id: 1, 
						name: "Alpha", 
						code: "001", 
						available: true,
						price: 11,
						rating: 5,
						imageUrl: "app/images/product1.png"
			
		};
	}


	getProductByIdPlain(id:number):IProduct {
		
		let product = this.products.filter((product) => { return product.id === id });
		return product[0];
	//		return product.id === id;
	//	});


	//	this.getProductsAsync().map(products => {
	//	  return products.filter(product => product.id === id)[0];
	//	}).subscribe(product => this.product = product));


	// let findProducts:Array<IProduct> = products.filter((product) => { 
	//		return product.id === id;
	//	});

	//	console.log("Find:");
	//	console.log(findProducts);
		//findProducts[0];

	}

	private handleError(error: Response) {
		console.log(error);
		return Observable.throw(error.json().error);
	}

	getProducts():Array<IProduct> {

		return [
					{
						id: 1, 
						name: "Alpha", 
						code: "001", 
						available: true,
						price: 11,
						rating: 5,
						imageUrl: "app/images/product1.png"
					}, 
					{
						id: 2, 
						name: "Beta",
						code : "002",
						available : true,
						price : 22,
						rating : 1,
						imageUrl: "app/images/product2.png"
					},
					{
						id: 3, 
						name: "Gamma",
						code: "003",
						available: false,
						price: 33,
						rating: 2,
						imageUrl: "app/images/product3.png"
					} 
				];
	}
}