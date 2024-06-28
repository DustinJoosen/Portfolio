import {Component, OnInit} from '@angular/core';
import {NgxTypedJsModule} from "ngx-typed-js";
import {NgIf} from "@angular/common";
import Typed from 'typed.js';
@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [NgxTypedJsModule, NgIf],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent implements OnInit {
  ngOnInit() {
    const options = {
      strings: [
        "Dustin",
        "Software developer",
        "C# enthusiast",
        "IT student",
        "GIT magician",
        "SQL wrangler",
        "MTA certified"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: false,
      loop: true,
      startDelay: 1000,
      backDelay: 2000,
    };

    const typed = new Typed('.auto-written-name', options);
  }
}
