import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { OrclObject } from '../orclobject.itf';
import { InputType } from '../input-type.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  names = ['table', 'trggier'];

  objs = this.names.map(this.getDetailsByName)

  detailsParmesL: any[] = []

  getDetailsByName(name: string) {
    return {
      name: name,
      input: {
        type: InputType.SELECT,
        value: 'select owner,table_name from dba_tables where owner in (\'SYS\',\'SYSTEM\')'
      }
    };
  }

  activate(obj){
    obj.init()
  }

  constructor(
    private router: Router
  ) { }

  displayDetails(params: any[],sqlText: string) {
    alert(JSON.stringify(params));
    // this.router.navigate(['details', params]);
  }

  inputType(inputTypeString: string) {
    return InputType[inputTypeString];
  }
}
