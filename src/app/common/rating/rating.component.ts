import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
	selector: 'rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnChanges {

	@Input()
	rating: number;

	starWidth: number;

	//@Output('AliasOfTheEventEmitted')
	@Output('starClick')
	ratingClicked: EventEmitter<string> = new EventEmitter<string>();

	// On change 
	ngOnChanges():void {
		this.starWidth = this.rating * 86 / 5;
	}

	onStarClicked() {
		console.log("Hi");
		this.ratingClicked.emit(`Thanks for rating: ${this.rating}`);
	}
}