import { Component, OnInit, Input } from '@angular/core';

import { InputInterface } from './input.itf';
import { QueryService } from '../query.service';
import { ConnInfo } from '../queryinfo.itf';

@Component({
  selector: 'input-select',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css', './card.bootstrap.css'],
  providers: [QueryService]
})
export class SelectInputComponent implements InputInterface {

  @Input() obj;
  @Input() conn: ConnInfo;

  params: string[] = [];

  values: string[][] = [];
  names: string[] = [];
  options: string[][] = [];

  selectLength: number;

  ready = false;

  constructor(private qs: QueryService) { }

  setParams(idx: number, arg: string) {
    this.params[idx] = arg;
  }

  filterValues(idx: number) {
    let tmpValues = this.values;
    if (this.params.length >= idx) {
      for (let i = 0; i < idx && this.params.length >= idx; i++) {
        const param = this.params[i];
        tmpValues = tmpValues.filter(value => value[i] === param);
      }
      return Array.from(new Set(tmpValues.map(p => p[idx])));
    } else {
      return [];
    }
  }

  initQueryResult(values: Array<string[]>) {
    this.names = values[0];
    console.info(this.names)
    this.selectLength = this.names.length;
    values.shift();
    this.values = values;
  }

  init() {
    this.qs.rdbmsQuery(this.conn, this.obj.input.value, []).then(rs => {
      console.info(rs)
      this.initQueryResult(rs);
      this.ready = true;
    });
  }
}
