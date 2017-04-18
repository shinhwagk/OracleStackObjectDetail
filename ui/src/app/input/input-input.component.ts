import { Component, OnInit, Input, Output } from '@angular/core';

import { InputInterface } from './input.itf'

@Component({
  selector: 'input-input',
  templateUrl: './input-input.component.html',
  styleUrls: ['./input-input.component.css']
})
export class InputInputComponent implements OnInit, InputInterface {

  params: any[] =  [1, "x2"]

  constructor() { }

  init(){
    alert(2)
  }

  ngOnInit() {
  }
}
