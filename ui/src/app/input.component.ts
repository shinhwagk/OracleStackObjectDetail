import { Component, OnInit, Input } from '@angular/core';

import { OrclObject } from './orclobject.itf';
import { InputType } from './input-type.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  names = ['table', 'trggier'];

  @Input() conn ;
  objs = this.names.map(this.getDetailsByName)

  constructor() { }

  getDetailsByName(name: string) {
    return {
      name: name,
      input: {
        type: InputType.SELECT,
        value: 'select owner,table_name from dba_tables where owner in (\'SYS\',\'SYSTEM\')'
      }
    };
  }

  inputType(inputTypeString: string) {
    return InputType[inputTypeString];
  }
}
