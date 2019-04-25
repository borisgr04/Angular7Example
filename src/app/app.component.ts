import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'PrimerEjemploAngular';
  subtitle = '.NET Core + Angular CLI v7 + Bootstrap & FontAwesome + Swagger Template';   
  datetime = Date.now();
}
