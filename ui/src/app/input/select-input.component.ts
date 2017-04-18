import { Component, OnInit, Input } from '@angular/core';

import { InputInterface } from './input.itf';
import { QueryService } from '../query.service';

@Component({
  selector: 'input-select',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
  providers: [QueryService]
})
export class SelectInputComponent implements OnInit, InputInterface {

  // inputs = [{ name: "owner", sql: "xxx" }];

  @Input() sqlText;

  params: string[] = [];

  values: string[][] = [];
  names: string[] = [];
  options: string[][] = [];

  selectLength: number;

  ready = false;
  first = []

  constructor(private qs: QueryService) { }

  setParams(idx: number, arg: string) {
    this.params[idx] = arg;
  }

  filter(idx: number, val: string) {
    alert(1)
    this.values[idx].filter(v => val === v);
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
      return []
    }
  }

  initQueryResult(values: Array<string[]>) {
    this.names = values[0];
    this.selectLength = this.names.length;
    values.shift();
    this.values = values;
    this.ready = true;
  }

  init() {
    alert(2)
    this.qs.rdbmsQuery(this.sqlText, []).then(rs => this.initQueryResult(rs));
  }

  ngOnInit() {

  }
}
