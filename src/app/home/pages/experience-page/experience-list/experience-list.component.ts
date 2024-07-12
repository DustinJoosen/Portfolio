import {Component, Input} from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";

export interface ExperienceItem {
	title: string;
	titleAbbr?: string | null;
	underline: string;
	description: string;
	timeSpan: string;
}

@Component({
  selector: 'app-experience-list',
  standalone: true,
	imports: [
		JsonPipe,
		NgForOf,
		NgIf
	],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css'
})
export class ExperienceListComponent {

	@Input()
	public items: ExperienceItem[] = [];
}
