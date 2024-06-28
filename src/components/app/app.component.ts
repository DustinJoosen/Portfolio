import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "../navbar/navbar.component";
import {StartPageComponent} from "../pages/start-page/start-page.component";
import {AboutMePageComponent} from "../pages/about-me-page/about-me-page.component";
import {ExperiencePageComponent} from "../pages/experience-page/experience-page.component";
import {SkillsPageComponent} from "../pages/skills-page/skills-page.component";
import {ContestsPageComponent} from "../pages/contests-page/contests-page.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NavbarComponent, StartPageComponent, AboutMePageComponent, ExperiencePageComponent, SkillsPageComponent, ContestsPageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
