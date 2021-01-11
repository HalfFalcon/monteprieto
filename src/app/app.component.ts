import { Component } from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundImagePath = 'background-image: url("' + environment.imagePath + 'assets/cactus.jpg");';
}
