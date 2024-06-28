import {Component, Input} from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import {ProgressComponent} from "../progress/progress.component";

export interface Skill {
	imageUrl: string;
	name: string;
	year: string;
	percentage: number;

}

@Component({
  selector: 'app-skill',
  standalone: true,
	imports: [
		JsonPipe,
		NgIf,
		ProgressComponent
	],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {

	@Input({required: true})
	public skill?: Skill;
}
