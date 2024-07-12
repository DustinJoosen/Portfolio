import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./home/navbar/navbar.component";
import {StartPageComponent} from "./home/pages/start-page/start-page.component";
import {AboutMePageComponent} from "./home/pages/about-me-page/about-me-page.component";
import {ExperiencePageComponent} from "./home/pages/experience-page/experience-page.component";
import {SkillsPageComponent} from "./home/pages/skills-page/skills-page.component";
import {ContestsPageComponent} from "./home/pages/contests-page/contests-page.component";
import {FooterComponent} from "./home/footer/footer.component";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, StartPageComponent, AboutMePageComponent, ExperiencePageComponent, SkillsPageComponent, ContestsPageComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
