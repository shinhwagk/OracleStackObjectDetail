import { Component } from '@angular/core';
import { data } from './test.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oracle object details.';

  data = data;
}
