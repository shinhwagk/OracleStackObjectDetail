import { Component, OnInit, Input } from '@angular/core';

import { OrclObject } from './orclobject.itf';
import { InputType } from './input-type.enum';
import { QueryService } from './query.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [QueryService]
})
export class InputComponent implements OnInit {
  names = [];

  constructor(private qs: QueryService) { }

  objs = []

  getObjectByName(name: string) {
    if(name=="table"){
      const url = `https://raw.githubusercontent.com/shinhwagk/OracleStackObjectDetail/config/objects/${name}.json`
      this.qs.configQuery(url)
        .then(object => this.objs.push(object))
        .catch(e => console.error(e._body))
    }
  }

  ngOnInit() {
    const url = "https://raw.githubusercontent.com/shinhwagk/OracleStackObjectDetail/config/objects.json"
    this.qs.configQuery(url).then(names => {
      this.names = names
      this.names.forEach(name => this.getObjectByName(name))
    })
  }
}