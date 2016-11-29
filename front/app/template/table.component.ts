import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Location } from "@angular/common";

import { ApiServices } from '../api.services';

@Component({
  selector: 'orcl-obj-dtl-table',
  template: `{{data | json}} <br ><button (click)="goBack()">Back</button>`,
  providers: [ApiServices]
})
export class TemplateTableComponent implements OnInit {

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.owner = params['owner'];
      this.table = params['table'];
      this.getTableInfo()
    })
  }

  constructor(private _api: ApiServices, private route: ActivatedRoute, private location: Location) { }

  goBack() {
    this.location.back()
  }

  getTableInfo() {
    this._api.t_table([this.owner, this.table], 'table').toPromise().then(p => this.data = p)
  }

  getColumnInfo(){
  }

  data: any
  owner: string
  table: string
}

@Component({
  selector: 'orcl-obj-dtl-table-input',
  template: `<div>
  <span>table</span> <br>
  <input [(ngModel)]="templateTable.owner" placeholder="owner"> <br>
  <input [(ngModel)]="templateTable.table" placeholder="table"> <br>
  <button (click)="gotoDetail()">b</button>
</div>`
})
export class TemplateTableInputComponent {
  public templateTable: TemplateTable = new TemplateTable();

  gotoDetail(): void {
    console.info(this.templateTable.owner.toUpperCase)
    this._router.navigate(['/template/table', this.templateTable.owner.toUpperCase(), this.templateTable.table.toUpperCase()]);
  }

  constructor(private _router: Router) {

  }
}

export class TemplateTable {
  owner: string = ""
  table: string = ""
}