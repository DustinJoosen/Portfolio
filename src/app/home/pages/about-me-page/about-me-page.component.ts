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
			image: '/img/slideshow/propedeuse.png',
			thumbImage: 'img/slideshow/propedeuse.png',
			alt: 'Getting my propedeuse',
			title: 'Getting my propedeuse'
		},
		{
			image: 'img/slideshow/skydiving.png',
			thumbImage: 'img/slideshow/skydiving.png',
			alt: 'Skydiving',
			title: 'Skydiving'
		},
		{
			image: 'img/slideshow/aurora.png',
			thumbImage: 'img/slideshow/aurora.png',
			alt: 'Visiting Aurora Borealis',
			title: 'Visiting Aurora Borealis'
		},
		{
			image: 'img/slideshow/startrek.png',
			thumbImage: 'img/slideshow/startrek.png',
			alt: 'At a star-trek convention',
			title: 'At a star-trek convention'
		},
	];
}
