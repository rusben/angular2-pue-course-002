import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-navbar',
	templateUrl: './my-navbar.component.html'
})

export class MyNavbarComponent {

	// Creates an attribute in the tag my-navbar
	@Input()
	// Define the type to string -> :string
	// The projectName shouldn't be part of the component, 
	// let's add variable setted from outside.
	projectName:string = "Angular2 Product List";

}
