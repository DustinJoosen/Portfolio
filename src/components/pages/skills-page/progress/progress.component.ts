import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent implements OnInit {
	@Input()
	public value: number = 0;
	public displayedValue = 0;

	ngOnInit() {
		setInterval(() => {
			if (this.displayedValue < this.value) {
				this.displayedValue++;
			}
		}, 6);
	}

}
