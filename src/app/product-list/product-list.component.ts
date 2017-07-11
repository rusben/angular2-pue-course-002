// import { Component, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { IProduct } from './product.interface';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

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

	// Array string declaration
	products:IProduct[]= [
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
							rating : 4,
							imageUrl: "app/images/product2.png"
						},
						{
							id: 3, 
							name: "Gamma",
							code: "003",
							available: false,
							price: 33,
							rating: 3,
							imageUrl: "app/images/product3.png"
						} 
					];

	title:string = "Product List";

	toogleImages(event:any) {
		event.preventDefault();

		this.showImages = !this.showImages;

	}

	productFilter:string = "";

	onRatingClicked(event:string) {
		this.title = "Product List " + event;
	}

}

	// Event binding
	// Property binding
	// Event binding
	// Bidirectional