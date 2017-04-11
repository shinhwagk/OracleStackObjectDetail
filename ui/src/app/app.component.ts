import { Component } from '@angular/core';
import { data } from './test.data';
import { Input } from './input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oracle object details.';

  data = data;
  inputs = [{'owner':'xxx','name':'abccs'}];
  abc(){
    this.inputs[0]
  }
}
