import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  goToTop() {}

	alertUnfinished() {
		alert("I am sorry. This function is not yet finished. Please check back later")
	}
}
