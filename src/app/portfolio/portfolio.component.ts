import {Component, HostListener} from '@angular/core';
import {LowerCasePipe, NgIf} from "@angular/common";
import {animate, style, transition, trigger} from "@angular/animations";

export interface PortfolioItem {
	title: string;
	demo: string;
	description: string;
}

@Component({
	selector: 'app-portfolio',
  	standalone: true,
	imports: [
		LowerCasePipe,
		NgIf
	],
  	templateUrl: './portfolio.component.html',
  	styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
	private counter: number = 0;

	@HostListener('document:keydown', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) {
		if (event.key == "ArrowRight") {
			this.next();
		} else if (event.key == "ArrowLeft") {
			this.prev();
		}
	}

	public projects: PortfolioItem[] = [
		{
			title: "Stockpulse",
			demo: "https://github.com/DustinJoosen/StockPulse",
			description: "Stock is a detailed inventory management system that provides strong solutions for handling" +
				" products, warehouses, customers, employees, and orders."
		},
		{
			title: "Deckden",
			demo: "https://dustinjoosen.github.io/DeckDen",
			description: "Deckden is a mobile-friendly Angular application designed for efficient Pokédex management." +
				"It includes all 1025 Pokémon and offers features for filtering and tracking Pokémon as you collect them."
		},
		{
			title: "RelationWeb",
			demo: "https://github.com/DustinJoosen/RelationWeb",
			description: "RelationWeb is an Angular-based web application designed for creating and managing characters, " +
				"defining relation types, and visually linking them together by dragging elements. " +
				"This allows users to construct relationship webs interactively."
		},
		{
			title: "CloudBnB",
			demo: "https://cloudbnb-df3c1.web.app/",
			description: "A .NET based Restful API. It supplements a custom AirBnB site, provided it runs on localhost port 7279." +
				"This swagger page allows interaction with all data"
		},

	];


	get current(): PortfolioItem {
		return this.projects[this.counter];
	}

	onImageClick() {
		if (!window)
			return;

		window.open(this.current.demo, '_blank')?.focus();
	}


	canGoPrev() {
		return this.counter > 0;
	}
	canGoNext() {
		return this.counter < this.projects.length - 1;
	}

	next() {
		if (this.canGoNext()) {
			this.counter++;
		}
	}

	prev() {
		if (this.canGoPrev()) {
			this.counter--;
		}
	}
}
