import { Component, OnInit, Input } from '@angular/core';

import { InputInterface } from './input.itf'

@Component({
  selector: 'input-select',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit, InputInterface {

  params: any[] = [1, "x2"]

  constructor() { }

  ngOnInit() {
  }
}
