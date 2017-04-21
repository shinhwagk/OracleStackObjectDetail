import { Component, OnInit, Input, Output } from '@angular/core';

import { InputInterface } from './input.itf';

@Component({
  selector: 'input-input',
  templateUrl: './input-input.component.html',
  styleUrls: ['./input-input.component.css', './card.bootstrap.css']
})
export class InputInputComponent implements  InputInterface {

  params: any[] = [1, 'x2'];

  @Input() obj;
  @Input() conn;
  constructor() { }

  init() {
    alert(2);
  }
}