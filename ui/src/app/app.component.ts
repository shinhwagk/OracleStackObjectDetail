import { Component } from '@angular/core';

import { Input } from './input.itf';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#">{{title}}</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  title = 'oracle object details.';

}
