// import { Component, Output, EventEmitter } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { IProduct } from './product.interface';
import { ProductService }  from './product.service';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

	// SPA - Single Page Application

	// Event send when send button clicked: sendButtonClicked
	//@Output()
	//sendButtonClicked:EventEmitter<string> = new EventEmitter<string>();

	// Skiping error TS7006: Parameter 'event' implicitly has an 'any' type.
	//message(event:any) {
		// Skip sending the form
		// Use of getPreventDefault() is deprecated.  Use defaultPrevented instead.
	//	event.preventDefault();
		//if (event.originalEvent.defaultPrevented) return;
	//	console.log("Hello world!");
		
		// Broadcast the event sendButtonClicked
	//	this.sendButtonClicked.emit("Send button clicked!");
	//}

	showImages:boolean = false;

	title:string = "Product List";

	productFilter:string = "";
	errorMessage:string = null;

	subscription:any;

	//productService: ProductService;

	// Array string declaration
	products:IProduct[]; //= [
					//	{
					//		id: 1, 
					//		name: "Alpha", 
					//		code: "001", 
					//		available: true,
					//		price: 11,
					//		rating: 5,
					//		imageUrl: "app/images/product1.png"
					//	}, 
					//	{
					//		id: 2, 
					//		name: "Beta",
					//		code : "002",
					//		available : true,
					//		price : 22,
					//		rating : 4,
					//		imageUrl: "app/images/product2.png"
					//	},
					//	{
					//		id: 3, 
					//		name: "Gamma",
					//		code: "003",
					//		available: false,
					//		price: 33,
					//		rating: 3,
					//		imageUrl: "app/images/product3.png"
					//	} 
					//];

	//constructor(productService: ProductService) {
	//	this.productService = productService;
	//}

	// Private variable created with the constructor
	constructor(private productService: ProductService) {
		
	}

	ngOnInit() {
		console.log("Component created");
		//this.products = this.productService.getProducts();

		// The products come asynchronously from the service, the subscription permits 
		// to change the products list
		this.subscription = this.productService.getProductsAsync()
		// Success
		.subscribe((products:IProduct[]) => {
			this.products = products;
		}
		// When an error occurs write the error into errorMessage
		, (error) => {
			this.errorMessage = error;
		});
	}

	ngOnDestroy() {
		console.log("Component destroyed");
		// Remove the subscription
		this.subscription.unsubscribe();
	}

	toogleImages(event:any) {
		event.preventDefault();
		this.showImages = !this.showImages;
	}

	onRatingClicked(event:string) {
		this.title = "Product List " + event;
	}

}

	// Event binding
	// Property binding
	// Event binding
	// Bidirectional