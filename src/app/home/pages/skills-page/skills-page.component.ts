import { Component } from '@angular/core';
import {Skill, SkillComponent} from "./skill/skill.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-skills-page',
  standalone: true,
	imports: [
		SkillComponent,
		NgForOf
	],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css'
})
export class SkillsPageComponent {

	skills: Skill[] = [
		{
			name: 'HTML',
			percentage: 80,
			imageUrl: 'img/languages/html.png',
			year: '2018'
		},
		{
			name: 'CSS',
			percentage: 60,
			imageUrl: 'img/languages/css.png',
			year: '2018'
		},
		{
			name: 'Javascript',
			percentage: 65,
			imageUrl: 'img/languages/js.png',
			year: '2018'
		},
		{
			name: 'JQuery',
			percentage: 40,
			imageUrl: 'img/languages/jquery.png',
			year: '2019'
		},
		{
			name: 'Python',
			percentage: 80,
			imageUrl: 'img/languages/python.png',
			year: '2018'
		},
		{
			name: 'PHP',
			percentage: 70,
			imageUrl: 'img/languages/php.png',
			year: '2019'
		},
		{
			name: 'Laravel',
			percentage: 65,
			imageUrl: 'img/languages/laravel.png',
			year: '2021'
		},
		{
			name: 'C#',
			percentage: 90,
			imageUrl: 'img/languages/csharp.png',
			year: '2020'
		},
		{
			name: 'ASP.NET',
			percentage: 75,
			imageUrl: 'img/languages/csharp.png',
			year: '2020'
		},
		{
			name: 'WPF',
			percentage: 60,
			imageUrl: 'img/languages/csharp.png',
			year: '2020'
		},
		{
			name: 'Angular',
			percentage: 80,
			imageUrl: 'img/languages/angular.png',
			year: '2024'
		},
		{
			name: 'Java',
			percentage: 60,
			imageUrl: 'img/languages/java.png',
			year: '2023'
		},
		{
			name: 'MySQL',
			percentage: 65,
			imageUrl: 'img/languages/mysql.png',
			year: '2020'
		},
		{
			name: 'Scrum',
			percentage: 40,
			imageUrl: 'img/languages/scrum.png',
			year: '2018'
		},
		{
			name: 'GIT',
			percentage: 80,
			imageUrl: 'img/languages/git.png',
			year: '2019'
		},
	]
}
