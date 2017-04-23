import { Component } from '@angular/core';

import { Input } from './input.itf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'oracle object details.';

  connects = []

  c_connect;

  add_conn(jdbcUrl, username, password) {
    const conn = { jdbcUrl: jdbcUrl, username: username, password: password }
    this.connects.push(conn)
  }
}
