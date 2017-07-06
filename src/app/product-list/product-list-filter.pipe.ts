import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product-interface';

@Pipe({
	name:'productListFilter'
})

export class ProductListFilterPipe implements PipeTransform {

	// IProduct[] = Array<IProduct>
	transform(products:IProduct[], filterBy:string):IProduct[] {

		// example:string;

		// If filterBy is defined we use it otherwise we use a null filter
		filterBy = filterBy ? filterBy.toLowerCase() : null;

		// Iterate over the products array searching for a match
		return ( filterBy ? 
			products.filter(function(product) {
				// this.example = "This doesn't work";
				return product.name.toLowerCase().indexOf(filterBy) != -1;
			}) : products );

		// Arrow functions
		// return ( filterBy ? 
		//	this.example = "This works!";
		//	products.filter((product) => {
		//		return product.name.toLowerCase().indexOf(filterBy) != -1;
		//	}) : products );		

	}

	// Simple transformation to lowercase
	//transform(value:string[]) {
	//	return value.toLowerCase();
		// throw new Error("Method not implemented.");
	//}
}