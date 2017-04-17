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

  params: string[] = [];

  setParams(idx: number, arg: string) {
    this.params[idx] = arg
  }

  selects: string[][] = [['owner', 'table'], ["aaa", "xxxx"], ["aaa2", "xx2xx"]];
  names: string[] = []
  options: string[][] = []
  selectLength: number;

  constructor(private qs: QueryService) { }

  formatValue(values: Array<string[]>) {
    this.names = values[0]
    this.selectLength = this.names.length
    values.shift()
    this.options = Array.from({ length: this.selectLength }, () => [])

    values.forEach(vals => {
      for (let i = 0; i <= this.selectLength - 1; i++) {
        const v: string = vals[i]
        this.options[i].push(v)
        console.info(`option: ${i}`, this.options[0])
      }
    })
    return;
  }

  ngOnInit() {
    console.info("start")
    console.info(JSON.stringify(this.selects))
    console.info(JSON.stringify(this.formatValue(this.selects)), "xxx")
    // this.qs.rdbmsQuery(this.sqlText, []).then(this.formatValue);
  }
}
