import { Component } from '@angular/core';

import { Input } from './input.itf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'oracle object details.';

  connects = []

  current_connect

  add_conn(jdbcUrl, username, password) {
    this.connects.push({
      jdbcUrl: jdbcUrl,
      username: username,
      password: password
    })
  }
}
