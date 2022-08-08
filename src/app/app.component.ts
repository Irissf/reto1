import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reto1';
  url = 'https://i.pinimg.com/564x/3a/1e/01/3a1e019195cefca5cd839744a347118a.jpg';

  //bidireccional
  name!: string;
}
