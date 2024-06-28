import { Component } from '@angular/core';
import {NgImageSliderModule} from "ng-image-slider";

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [NgImageSliderModule],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.css'
})
export class AboutMePageComponent {
	images: object[] = [
		{
			image: '/img/propedeuse.png',
			thumbImage: 'https://dustinjoosen.nl/lib/img/propedeuse.png',
			alt: 'Getting my propedeuse',
			title: 'Getting my propedeuse'
		},
		{
			image: 'img/skydiving.png',
			thumbImage: 'https://dustinjoosen.nl/lib/img/skydiving.png',
			alt: 'Skydiving',
			title: 'Skydiving'
		},
		{
			image: 'img/startrek.png',
			thumbImage: 'https://dustinjoosen.nl/lib/img/startrek.png',
			alt: 'At a star-trek convention',
			title: 'At a star-trek convention'
		}
	];

}