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
        value: "select 'a', 'b' from dual"
      }
    }
  }

  constructor(
    private router: Router
  ) { }

  displayDetails(params: any[],sqlText:string) {
    alert(sqlText)
    this.router.navigate(['details', params]);
  }

  inputType(inputTypeString: string) {
    return InputType[inputTypeString]
  }
}
