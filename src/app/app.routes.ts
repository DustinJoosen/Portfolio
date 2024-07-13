import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CardComponent} from "./card/card.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'card',
		component: CardComponent
	},
	{
		path: 'portfolio',
		component: PortfolioComponent
	}
];
