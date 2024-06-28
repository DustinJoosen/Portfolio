import { Component } from '@angular/core';
import {ExperienceItem, ExperienceListComponent} from "./experience-list/experience-list.component";

@Component({
  selector: 'app-experience-page',
  standalone: true,
	imports: [
		ExperienceListComponent
	],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent {

	employmentData: ExperienceItem[] = [
		{
			title: 'DEVENTit B.V.',
			underline: 'Software developer Intern',
			description: 'Worked with .NET API\'s & Angular',
			timeSpan: 'Feb 2024 - June 2024',
		},
		{
			title: 'Novusoft B.V.',
			underline: 'Software developer Intern',
			description: 'Worked with C#, Asp .NET, PHP, Azure, Drupal',
			timeSpan: 'Feb 2022 - Jul 2022',
		},
		{
			title: 'Tegra Systems B.V.',
			underline: 'Software developer Intern',
			description: 'Worked with C#, Rest API\'s, MVC pattern',
			timeSpan: 'Aug 2020 - Jan 2021' +
				'',
		},
	]

	educationData: ExperienceItem[] = [
		{
			title: 'Windesheim',
			titleAbbr: '(HBO)',
			underline: 'HBO-ICT',
			description: 'Obtained a propaedeutic diploma',
			timeSpan: '2022-2026',
		},
		{
			title: 'Horizon College',
			titleAbbr: '(MBO-4)',
			underline: 'Application & Media developer',
			description: 'Graduated cum laude',
			timeSpan: '2019-2022',
		}
	]
}
