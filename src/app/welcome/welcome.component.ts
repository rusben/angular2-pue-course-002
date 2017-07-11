import { Component } from '@angular/core';

@Component({
	selector: 'welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
	title = "Welcome to the Product List";
	subtitle = "Here's where you will find all you need.";
}