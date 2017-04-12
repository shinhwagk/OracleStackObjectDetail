import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-option',
  templateUrl: './option-input.component.html',
  styleUrls: ['./option-input.component.css']
})
export class OptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name: string;
  @Input("sql-file") sqlFile: string;
  @Input("sql") sql: string;
}
