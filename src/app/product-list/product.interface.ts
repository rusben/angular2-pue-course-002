
// Define our own data type
export interface IProduct {
	id:number;
	name:string;
	code:string;
	available:boolean;
	price:number;
	rating:number;
	imageUrl:string;

	// This is the way to specify an optional value in the interface
	// Just add the question mark '?' before the name
	optionalValue?:string;
}