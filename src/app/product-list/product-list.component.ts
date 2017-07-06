// import { Component, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductList {

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

	// Array string declaration
	products:any[]= [
						{
							name: "Product 1", 
							code: "001", 
							available: true,
							price: 11,
							rating: 5,
							imageUrl: "http://"
						}, 
						{
							name: "Product 2",
							code : "002",
							available : true,
							price : 22,
							rating : 4,
							imageUrl: "http://"
						},
						{
							name: "Product 3",
							code: "003",
							available: false,
							price: 33,
							rating: 3,
							imageUrl: "http://"
						} 
					];

	title:string = "Product List";

}

	// Event binding
	// Property binding
	// Event binding
	// Bidirectional