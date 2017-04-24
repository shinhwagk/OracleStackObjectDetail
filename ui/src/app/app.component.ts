import { Component } from '@angular/core';

import { Input } from './input.itf';
import { QueryService } from './query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [QueryService]
})
export class AppComponent {

  title = 'oracle object details.';

  connects = []

  c_connect;

  constructor(private qs: QueryService) { }

  add_conn(ip, port, service, username, password) {
    const conn = { ip: ip, port: port, service: service, username: username, password: password }
    this.connects.push(conn)
  }

  setConnector() {
    // console.info("setConnector",this.c_connect)
    this.qs.setConnector(this.c_connect)
      .then(a => alert("conn set success."))
  }
}
