import { Component, OnInit, Input } from '@angular/core';
import { OrclObject } from '../orclobject.itf';
import { InputType } from '../input-type.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('objectName') name: string;

  inputType(inputType: InputType) {
    return InputType[inputType]
  }

  data: OrclObject = {
    name: "table object",
    input: {
      type: InputType.OPTION,
      value: "select 'a', 'b' from dual"
    },
    details: [
      {
        name: "abc",
        query: "select * from abc where a=? and b=?"
      },
      {
        name: "33",
        query: "select * from ccc where a=? and b=?"
      }
    ]
  }
}
