import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Location } from "@angular/common";

import { ApiServices } from '../api.services';

@Component({
  selector: 'orcl-obj-dtl-table',
  templateUrl: 'app/template/table.component.html',
  providers: [ApiServices]
})
export class TemplateTableComponent implements OnInit {

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.pars = [params['owner'].toUpperCase(), params['table'].toUpperCase()];
      this.getTableInfo()
      this.getColumnInfoByTable()
      this.getIndexInfoByTable()
      this.getTriggersByTable()
      this.getDependenciesByTable()
    })
  }

  constructor(private _api: ApiServices, private route: ActivatedRoute, private location: Location) { }

  goBack() {
    this.location.back()
  }

  getTableInfo() {
    this._api.execSql("select * from dba_tables where owner = :0 and table_name = :1", this.pars).toPromise().then(p => this.data.set("tableinfo", p))
  }

  getColumnInfoByTable() {
    const one = this._api.execSql("CREATE TABLE ALL_TAB_COLUMNS_BAK AS SELECT owner,table_name,TO_LOB(DATA_DEFAULT) DATA_DEFAULT FROM ALL_TAB_COLUMNS", [])

    const two = this._api.execSql("SELECT * FROM ALL_TAB_COLUMNS_BAK WHERE owner = :0 AND table_name = :1", this.pars)

    const three = this._api.execSql("DROP TABLE ALL_TAB_COLUMNS_BAK", [])
    one.toPromise().then(p => two.toPromise().then(p => this.data.set("columninfo", p)).then(p => three.toPromise().then(p => console.info("fff")).catch(p => console.info("xxx"))))
  }

  getIndexInfoByTable() {
    this._api.execSql("SELECT * FROM DBA_INDEXES where owner = :0 and table_name = :1", this.pars).toPromise().then(p => this.data.set("indexinfo", p))
  }

  getTriggersByTable() {
    this._api.execSql("SELECT OWNER,TRIGGER_NAME FROM ALL_TRIGGERS where TABLE_OWNER = :0 and TABLE_NAME = :1", this.pars).toPromise().then(p => this.data.set("triggerinfo", p))
  }

  getDependenciesByTable() {
    this._api.execSql("SELECT * FROM all_dependencies where REFERENCED_OWNER = :0 and REFERENCED_NAME = :1 and REFERENCED_TYPE='TABLE'", this.pars).toPromise().then(p => this.data.set("dependencieinfo", p))

  }

  data: Map<string, any[]> = new Map<string, any[]>()
  pars: any[] = []

  getKeys(): string[] {
    return Array.from(this.data.keys())
  }
}

@Component({
  selector: 'orcl-obj-dtl-table-input',
  template: `<div>
  <span>table</span> <br>
  <input [(ngModel)]="pars[0]" placeholder="owner"> <br>
  <input [(ngModel)]="pars[1]" placeholder="table"> <br>
  <button (click)="gotoDetail()">b</button>
</div>`
})
export class TemplateTableInputComponent {
  pars: any[] = []

  gotoDetail(): void {
    this._router.navigate(['/template/table', this.pars[0], this.pars[1]]);
  }

  constructor(private _router: Router) { }
}