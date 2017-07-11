import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IProduct } from './product.interface';

@Injectable()
export class ProductService {

	constructor(private http:Http) {

	}

	getProductsAsync():Observable<IProduct[]> {
		return this.http.get("api/products/products.json")
			.map((response:Response) => {
				return <IProduct[]>response.json()
			})
			// Error control
			.catch(this.handleError);
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